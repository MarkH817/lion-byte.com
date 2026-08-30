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
    ...(showTime ? { hour: '2-digit', minute: '2-digit' } : {}),
  }).format(date)
}
