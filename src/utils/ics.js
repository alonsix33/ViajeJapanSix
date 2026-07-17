import { LA_DAYS } from '../data/la.js';
import { SEOUL_PLAN } from '../data/seoul.js';
import { JP_CITIES } from '../data/japan.js';

// Julio y agosto de 2026 son los únicos meses del viaje.
const MONTHS = { Jul: 7, Ago: 8 };

// Sin DST en Japón/Corea; PDT (UTC-7) cubre todo el tramo de LA en jul-ago 2026.
const TZ_OFFSET_HOURS = {
  la: -7,
  seul: 9,
  japon: 9,
};

// Horas representativas para franjas del día sin hora exacta en el itinerario.
const TIME_WORDS = {
  mañana: [9, 0],
  mediodía: [12, 0],
  tarde: [15, 0],
  atardecer: [19, 0],
  noche: [20, 0],
  madrugada: [5, 0],
};

function parseDateLabel(label) {
  const m = label.match(/(\d{1,2})\s+(Jul|Ago)/i);
  if (!m) return null;
  const day = parseInt(m[1], 10);
  const month = MONTHS[m[2][0].toUpperCase() + m[2].slice(1).toLowerCase()];
  return { year: 2026, month, day };
}

function parseTimeLabel(label) {
  if (!label) return null;
  const clean = label.replace('~', '').trim();
  const hm = clean.match(/^(\d{1,2}):(\d{2})/);
  if (hm) return [parseInt(hm[1], 10), parseInt(hm[2], 10)];
  const amPm = clean.match(/^(\d{1,2})\s*([ap]m)$/i);
  if (amPm) {
    let h = parseInt(amPm[1], 10);
    if (amPm[2].toLowerCase() === 'pm' && h !== 12) h += 12;
    if (amPm[2].toLowerCase() === 'am' && h === 12) h = 0;
    return [h, 0];
  }
  const word = TIME_WORDS[clean.toLowerCase()];
  return word || null;
}

function pad2(n) {
  return String(n).padStart(2, '0');
}

function toUTCMillis({ year, month, day }, [h, m], offsetHours) {
  return Date.UTC(year, month - 1, day, h - offsetHours, m);
}

function formatICSDateUTC(utcMs) {
  const d = new Date(utcMs);
  return (
    `${d.getUTCFullYear()}${pad2(d.getUTCMonth() + 1)}${pad2(d.getUTCDate())}` +
    `T${pad2(d.getUTCHours())}${pad2(d.getUTCMinutes())}00Z`
  );
}

function escapeICSText(text) {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
}

function foldLine(line) {
  if (line.length <= 74) return line;
  const chunks = [];
  let rest = line;
  while (rest.length > 74) {
    chunks.push(rest.slice(0, 74));
    rest = ' ' + rest.slice(74);
  }
  chunks.push(rest);
  return chunks.join('\r\n');
}

let uidCounter = 0;
function buildEvent({ dateLabel, timeLabel, tag, text, offsetHours, durationMin = 60 }) {
  const date = parseDateLabel(dateLabel);
  const time = parseTimeLabel(timeLabel);
  if (!date || !time) return null;

  const startMs = toUTCMillis(date, time, offsetHours);
  const startUTC = formatICSDateUTC(startMs);
  const endUTC = formatICSDateUTC(startMs + durationMin * 60000);

  uidCounter += 1;
  const summary = escapeICSText(`[${tag}] ${text}`.slice(0, 90));
  const description = escapeICSText(text);

  return [
    'BEGIN:VEVENT',
    `UID:viaje-japon-2026-${uidCounter}@ternero`,
    `DTSTAMP:${startUTC}`,
    `DTSTART:${startUTC}`,
    `DTEND:${endUTC}`,
    foldLine(`SUMMARY:${summary}`),
    foldLine(`DESCRIPTION:${description}`),
    'END:VEVENT',
  ].join('\r\n');
}

export function generateItineraryICS() {
  const events = [];

  for (const day of LA_DAYS) {
    for (const item of day.items) {
      const ev = buildEvent({
        dateLabel: day.date,
        timeLabel: item.time,
        tag: item.tag,
        text: item.text,
        offsetHours: TZ_OFFSET_HOURS.la,
      });
      if (ev) events.push(ev);
    }
  }

  for (const item of SEOUL_PLAN) {
    const ev = buildEvent({
      dateLabel: '27 Jul',
      timeLabel: item.time,
      tag: item.tag,
      text: item.text,
      offsetHours: TZ_OFFSET_HOURS.seul,
    });
    if (ev) events.push(ev);
  }

  for (const city of JP_CITIES) {
    for (const day of city.days) {
      for (const item of day.items) {
        const ev = buildEvent({
          dateLabel: day.date,
          timeLabel: item.time,
          tag: item.tag,
          text: item.text,
          offsetHours: TZ_OFFSET_HOURS.japon,
        });
        if (ev) events.push(ev);
      }
    }
  }

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Viaje Familia Ternero 2026//Los Angeles y Japon//ES',
    'CALSCALE:GREGORIAN',
    ...events,
    'END:VCALENDAR',
  ].join('\r\n');
}

export function downloadItineraryICS() {
  const ics = generateItineraryICS();
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'viaje-japon-2026.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
