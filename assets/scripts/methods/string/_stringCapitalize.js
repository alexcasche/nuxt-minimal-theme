export const stringCapitalize = ({ string }) => {
  if(!string) return false
  return `${string[0].toUpperCase()}${string.slice(1)}`
}
