export function formatDate(
  date: Date | number,
  {
    language = 'en-US',
    showDate = true,
    showTime = false,
  }: Partial<{
    language: string
    showDate: boolean
    showTime: boolean
  }> = {},
): string {
  return new Intl.DateTimeFormat(language, {
    ...(showDate ? { month: 'long', day: '2-digit', year: 'numeric' } : {}),
    ...(showTime ? { timeStyle: 'short' } : {}),
  }).format(date)
}
