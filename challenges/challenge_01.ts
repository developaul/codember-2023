export const searchPattern = (message: string): string => {
  const words = message.split(' ')

  const map = new Map<string, number>()

  for (const word of words) {
    const serialisedWord = word.toLowerCase()
    const wordValue = map.get(serialisedWord)

    if (wordValue) {
      map.set(serialisedWord, wordValue + 1)
      continue
    }

    map.set(serialisedWord, 1)
  }

  return Array.from(map.entries())
    .map(([key, value]) => `${key}${value}`)
    .join('')
}