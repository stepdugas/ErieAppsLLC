import { useEffect, useState } from 'react'

export default function AnimatedWord({ children, delay = 0, className = '' }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), delay * 1000)
    return () => clearTimeout(timeout)
  }, [delay])

  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      <span
        className="inline-block"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
          transition: `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        }}
      >
        {children}
      </span>
    </span>
  )
}
