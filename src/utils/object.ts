export function pick<Item extends {}, Key extends keyof Item>(
  item: Item,
  keys: Key[],
): Pick<Item, Key> {
  const result = {} as Pick<Item, Key>
  for (const key of keys) {
    result[key] = item[key]
  }
  return result
}
