export const extractEmail = (text) => {
  const match = text.match(/[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}/)
  return match ? match[0] : null
}
