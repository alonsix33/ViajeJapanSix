// Quita notas aclaratorias entre paréntesis (ej. "(5 min a pie del hotel)") antes de
// geocodificar — confunden al buscador de Google Maps y pueden dejar el link en blanco.
function stripParentheticals(place) {
  return place.replace(/\s*\([^)]*\)/g, '').trim();
}

export function buildGoogleMapsUrl({ origin, destination, mode = 'transit' }) {
  const params = new URLSearchParams({
    api: '1',
    origin: stripParentheticals(origin),
    destination: stripParentheticals(destination),
    travelmode: mode,
  });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}
