export default function Container({ children, className = '' }) {
  return (
    <div
      className={className}
      style={{
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 'clamp(24px, 5vw, 64px)',
        paddingRight: 'clamp(24px, 5vw, 64px)',
      }}
    >
      {children}
    </div>
  )
}
