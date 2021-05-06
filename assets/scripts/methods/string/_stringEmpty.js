export const stringEmpty = ({ string }) => {
  if(!string) return true
  const trimmedStr = string.trim()
  return trimmedStr === null || trimmedStr === ""
}
