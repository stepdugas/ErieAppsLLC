import { useEffect, useState } from 'react'

const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'

export default function GlitchText({ text, className = '' }) {
  const [display, setDisplay] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true)
      let iterations = 0
      const maxIterations = 6

      const interval = setInterval(() => {
        setDisplay(
          text
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' '
              if (iterations > i) return text[i]
              return glitchChars[Math.floor(Math.random() * glitchChars.length)]
            })
            .join('')
        )

        iterations++
        if (iterations > maxIterations) {
          clearInterval(interval)
          setDisplay(text)
          setIsGlitching(false)
        }
      }, 50)

      return () => clearInterval(interval)
    }

    const scheduleNext = () => {
      const nextDelay = 3000 + Math.random() * 4000
      return setTimeout(triggerGlitch, nextDelay)
    }

    let timeout = scheduleNext()
    const recurring = setInterval(() => {
      if (!isGlitching) {
        clearTimeout(timeout)
        timeout = scheduleNext()
      }
    }, 7000)

    return () => {
      clearTimeout(timeout)
      clearInterval(recurring)
    }
  }, [text, isGlitching])

  return <span className={className}>{display}</span>
}
