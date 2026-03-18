/**
 * Detect visitor region via IP (India vs global) for pricing display.
 */
export async function fetchPricingRegion() {
  const ac = new AbortController()
  const t = setTimeout(() => ac.abort(), 8000)
  try {
    const res = await fetch('https://ip-api.com/json/?fields=countryCode', {
      signal: ac.signal,
    })
    if (!res.ok) return 'IN'
    const data = await res.json()
    return data.countryCode === 'IN' ? 'IN' : 'global'
  } catch {
    return 'IN'
  } finally {
    clearTimeout(t)
  }
}
