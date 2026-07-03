export function asArray(response, keys = ['data', 'items', 'orders', 'zones', 'areas', 'rateCards', 'agents']) {
  if (Array.isArray(response)) return response

  for (const key of keys) {
    if (Array.isArray(response?.[key])) return response[key]
  }

  for (const key of keys) {
    if (Array.isArray(response?.data?.[key])) return response.data[key]
  }

  return []
}

export function unwrapUser(response) {
  return response?.user || response?.data?.user || response?.data || response
}
