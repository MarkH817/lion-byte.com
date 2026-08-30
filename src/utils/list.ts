import type { NonEmptyList } from '#types/list.ts'

export type GroupByResult<Key, Item> = {
  key: Key
  items: NonEmptyList<Item>
}

export function groupBy<Item, Key extends string | number>(
  list: Iterable<Item>,
  keyFn: (item: Item) => Key,
): Array<GroupByResult<Key, Item>> {
  const map = new Map<Key, NonEmptyList<Item>>()
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
