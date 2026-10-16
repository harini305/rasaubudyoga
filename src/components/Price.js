// Renders a published price string unchanged, setting the currency prefix (e.g. "IDR") smaller.
export default function Price({ value }) {
  const [currency, ...rest] = value.split(' ');
  if (!rest.length) return value;
  return (
    <>
      <span style={{ fontSize: '0.42em', letterSpacing: '0.12em', marginRight: '0.35em', verticalAlign: '0.9em' }}>{currency}</span>
      <span style={{ whiteSpace: 'nowrap' }}>{rest.join(' ')}</span>
    </>
  );
}
