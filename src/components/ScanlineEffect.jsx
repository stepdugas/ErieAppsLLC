export default function ScanlineEffect() {
  return (
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
      <style>{`
@keyframes scanline-sweep {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}
      `}</style>
      <div
        className="absolute left-0 right-0"
        style={{
          height: '120px',
          opacity: 0.025,
          background:
            'linear-gradient(180deg, transparent 0%, rgba(0,255,135,0.4) 50%, transparent 100%)',
          animation: 'scanline-sweep 10s linear infinite',
        }}
      />
    </div>
  )
}
