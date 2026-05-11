import { useMemo } from 'react'

const orbConfigs = [
  { color: '#00ff8718', size: 600, x: '10%', y: '15%', duration: 22, dx: 80, dy: 60 },
  { color: '#60efff0e', size: 500, x: '70%', y: '10%', duration: 26, dx: -70, dy: 80 },
  { color: '#c77dff0e', size: 550, x: '20%', y: '60%', duration: 30, dx: 60, dy: -70 },
  { color: '#00ff870a', size: 450, x: '75%', y: '70%', duration: 24, dx: -50, dy: -60 },
]

export default function FloatingOrbs() {
  const keyframeStyles = useMemo(() => {
    return orbConfigs
      .map(
        (orb, i) => `
@keyframes orb-drift-${i} {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(${orb.dx}px, ${orb.dy}px); }
  50% { transform: translate(${-orb.dx * 0.5}px, ${orb.dy * 1.2}px); }
  75% { transform: translate(${orb.dx * 0.8}px, ${-orb.dy * 0.6}px); }
}`
      )
      .join('\n')
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <style>{keyframeStyles}</style>
      {orbConfigs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(60px)',
            animation: `orb-drift-${i} ${orb.duration}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  )
}
