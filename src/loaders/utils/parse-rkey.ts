export function parseRKey(uri: string) {
  return uri.split('/').pop()!
}
