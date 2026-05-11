import { useEffect, useState } from 'react'

export default function TypewriterText({
  strings = [],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className = '',
}) {
  const [displayText, setDisplayText] = useState('')
  const [stringIndex, setStringIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (strings.length === 0) return

    const currentString = strings[stringIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentString.slice(0, displayText.length + 1))

          if (displayText.length === currentString.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration)
            return
          }
        } else {
          setDisplayText(currentString.slice(0, displayText.length - 1))

          if (displayText.length === 0) {
            setIsDeleting(false)
            setStringIndex((prev) => (prev + 1) % strings.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, stringIndex, strings, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
