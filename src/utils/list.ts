import type { NonEmptyList } from '#types/list.ts'

export function groupBy<T, V extends string | number>(
  list: Iterable<T>,
  keyFn: (item: T) => V,
) {
  const map = new Map<V, NonEmptyList<T>>()
  for (const item of list) {
    const key = keyFn(item)
    if (!map.has(key)) {
      map.set(key, [item])
    } else {
      map.get(key)!.push(item)
    }
  }
  return Array.from(map).map(([key, items]) => ({ key, items }))
}

export function unique<T>(list: Iterable<T>): T[] {
  return Array.from(new Set(list))
}
