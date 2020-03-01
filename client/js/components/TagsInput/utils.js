const formatTagInput = tag => {
  const trimmedTag = tag.trim()
  const upperFirstChar = trimmedTag[0].toUpperCase()

  return `${upperFirstChar}${trimmedTag.slice(1)}`
}

export {formatTagInput}
