// Quita notas aclaratorias entre paréntesis (ej. "(5 min a pie del hotel)") antes de
// geocodificar — confunden al buscador de Google Maps y pueden dejar el link en blanco.
function stripParentheticals(place) {
  return place.replace(/\s*\([^)]*\)/g, '').trim();
}

// "Estación X" (o "Estación de X") geocodifica mucho peor que el nombre real en inglés
// de la estación ("X Station") — se reordena solo para el link, sin tocar el texto que
// se muestra en la app.
function normalizeStationName(place) {
  const commaIdx = place.indexOf(',');
  const head = commaIdx === -1 ? place : place.slice(0, commaIdx);
  const rest = commaIdx === -1 ? '' : place.slice(commaIdx);
  const m = head.match(/^Estaci[oó]n\s+(?:de\s+)?(.+)$/i);
  if (!m) return place;
  return `${m[1]} Station${rest}`;
}

function cleanForGeocoding(place) {
  return normalizeStationName(stripParentheticals(place));
}

export function buildGoogleMapsUrl({ origin, destination, mode = 'transit' }) {
  const params = new URLSearchParams({
    api: '1',
    origin: cleanForGeocoding(origin),
    destination: cleanForGeocoding(destination),
    travelmode: mode,
  });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}
