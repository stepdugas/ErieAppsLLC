import { useEffect, useState, useRef } from 'react'

const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'

export default function GlitchText({ text, className = '' }) {
  const [display, setDisplay] = useState(text)
  const isGlitchingRef = useRef(false)

  useEffect(() => {
    const triggerGlitch = () => {
      if (isGlitchingRef.current) return
      isGlitchingRef.current = true
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
          isGlitchingRef.current = false
        }
      }, 50)
    }

    const scheduleGlitch = () => {
      const delay = 3000 + Math.random() * 4000
      return setTimeout(() => {
        triggerGlitch()
        timerId = scheduleGlitch()
      }, delay)
    }

    let timerId = scheduleGlitch()

    return () => clearTimeout(timerId)
  }, [text])

  return <span className={className}>{display}</span>
}
