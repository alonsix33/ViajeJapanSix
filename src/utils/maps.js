export function buildGoogleMapsUrl({ origin, destination, mode = 'transit' }) {
  const params = new URLSearchParams({
    api: '1',
    origin,
    destination,
    travelmode: mode,
  });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}
