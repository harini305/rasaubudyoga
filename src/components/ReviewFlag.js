/**
 * Development-only marker that highlights an unresolved owner decision right where it matters.
 * Never rendered in production builds.
 */
export default function ReviewFlag({ children }) {
  if (process.env.NODE_ENV === 'production') return null;
  return (
    <aside
      style={{
        margin: '1.5rem 0 0',
        padding: '0.75rem 1rem',
        border: '1px dashed currentColor',
        borderRadius: 4,
        fontSize: '0.8125rem',
        lineHeight: 1.5,
        opacity: 0.85,
        maxWidth: '60ch',
      }}
    >
      <strong style={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.6875rem' }}>
        Owner review (dev only) ·{' '}
      </strong>
      {children}
    </aside>
  );
}
