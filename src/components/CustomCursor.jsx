import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const outerRef = useRef(null)
  const innerRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const outerPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none'

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }

      // Inner dot follows immediately
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`
      }
    }

    // Outer ring follows with lag via rAF
    let raf
    const animate = () => {
      outerPos.current.x += (mouse.current.x - outerPos.current.x) * 0.12
      outerPos.current.y += (mouse.current.y - outerPos.current.y) * 0.12

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outerPos.current.x - 20}px, ${outerPos.current.y - 20}px)`
      }

      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    raf = requestAnimationFrame(animate)

    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Only show on non-touch devices
  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0)

  if (isTouchDevice) return null

  return (
    <>
      {/* Outer ring */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 z-[999] pointer-events-none"
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1.5px solid rgba(0,255,135,0.6)',
          mixBlendMode: 'difference',
          willChange: 'transform',
        }}
      />
      {/* Inner dot */}
      <div
        ref={innerRef}
        className="fixed top-0 left-0 z-[999] pointer-events-none"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: '#00ff87',
          mixBlendMode: 'difference',
          willChange: 'transform',
        }}
      />
    </>
  )
}
