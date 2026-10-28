export type Suggestible<Suggestions extends string> =
  | Suggestions
  // oxlint-disable-next-line typescript/ban-types
  | (string & {})
