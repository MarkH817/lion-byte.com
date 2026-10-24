export function groupBy<Item, Key extends string | number>(
  list: Iterable<Item>,
  keyFn: (item: Item) => Key,
): Map<Key, Set<Item>> {
  const map = new Map<Key, Set<Item>>()
  for (const item of list) {
    const key = keyFn(item)
    if (map.has(key)) {
      map.get(key)!.add(item)
    } else {
      map.set(key, new Set([item]))
    }
  }
  return map
}

export function unique<Item>(list: Iterable<Item>): Item[] {
  return Array.from(new Set(list))
}
