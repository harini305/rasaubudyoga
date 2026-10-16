// Original line artwork drawn for this rebuild. It replaces the Ashtanga theme's ginkgo
// illustrations, lotus PNG and line icons, whose reuse rights are unconfirmed (audit 04 §6).
// Single 1px stroke in currentColor, echoing the live site's sand line-art.

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  vectorEffect: 'non-scaling-stroke',
};

function Frangipani() {
  const petal = 'M0 0 C -11 -7 -16 -24 -8 -36 C -2 -45 13 -44 17 -34 C 21 -22 10 -9 0 0 Z';
  return (
    <svg viewBox="-50 -50 100 100">
      {[0, 72, 144, 216, 288].map((r) => (
        <path key={r} d={petal} transform={`rotate(${r})`} {...stroke} />
      ))}
      {[0, 72, 144, 216, 288].map((r) => (
        <path key={`v${r}`} d="M0 0 C 0 -10 2 -19 5 -27" transform={`rotate(${r})`} {...stroke} opacity="0.6" />
      ))}
      <circle r="3.5" {...stroke} />
    </svg>
  );
}

function Sprig() {
  // Alternating leaves along a gently curving stem.
  const leaves = [
    { y: 138, s: -1, k: 1 },
    { y: 120, s: 1, k: 1 },
    { y: 101, s: -1, k: 0.92 },
    { y: 83, s: 1, k: 0.84 },
    { y: 66, s: -1, k: 0.74 },
    { y: 50, s: 1, k: 0.64 },
    { y: 35, s: -1, k: 0.52 },
    { y: 22, s: 1, k: 0.4 },
  ];
  return (
    <svg viewBox="0 0 80 170">
      <path d="M40 168 C 37 130 44 92 40 52 C 38 34 41 18 40 6" {...stroke} />
      {leaves.map(({ y, s, k }) => {
        const L = 34 * k;
        const W = 11 * k;
        const d = `M40 ${y} C ${40 + s * W} ${y - W * 0.4} ${40 + s * L * 0.8} ${y - L * 0.55} ${40 + s * L} ${y - L * 0.7} C ${40 + s * L * 0.55} ${y - L * 0.72} ${40 + s * W * 0.4} ${y - W * 1.6} 40 ${y} Z`;
        const vein = `M40 ${y} Q ${40 + s * L * 0.5} ${y - L * 0.32} ${40 + s * L * 0.92} ${y - L * 0.66}`;
        return (
          <g key={y}>
            <path d={d} {...stroke} />
            <path d={vein} {...stroke} opacity="0.55" />
          </g>
        );
      })}
    </svg>
  );
}

function Lotus() {
  return (
    <svg viewBox="-42 -36 84 54">
      <path d="M0 8 C -9 -4 -9 -20 0 -32 C 9 -20 9 -4 0 8 Z" {...stroke} />
      <path d="M0 8 C -13 2 -24 -8 -28 -22 C -15 -20 -6 -10 0 8 Z" {...stroke} />
      <path d="M0 8 C 13 2 24 -8 28 -22 C 15 -20 6 -10 0 8 Z" {...stroke} />
      <path d="M0 8 C -16 10 -30 6 -38 -4 C -24 -6 -11 -2 0 8 Z" {...stroke} />
      <path d="M0 8 C 16 10 30 6 38 -4 C 24 -6 11 -2 0 8 Z" {...stroke} />
      <path d="M-26 15 H 26" {...stroke} opacity="0.6" />
    </svg>
  );
}

const shapes = { frangipani: Frangipani, sprig: Sprig, lotus: Lotus };

export default function Botanical({ name, className, style }) {
  const Shape = shapes[name];
  return (
    <span className={className} style={{ display: 'inline-block', lineHeight: 0, ...style }} aria-hidden="true">
      <Shape />
    </span>
  );
}

// Pillar icons for the Home page (original replacements for the theme's inline SVGs).
const icons = {
  movement: (
    <>
      <path d="M24 40c-9 0-16-7-16-16S15 8 24 8s16 7 16 16" {...stroke} />
      <path d="M24 34c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10" {...stroke} />
      <path d="M24 28a4 4 0 1 1 4-4" {...stroke} />
      <path d="M40 24c0 9-7 16-16 16" {...stroke} opacity="0.45" />
    </>
  ),
  workshops: (
    <>
      <circle cx="24" cy="24" r="18" {...stroke} />
      <path d="M24 37c-7-5-8.5-14-0-24 8.5 10 7 19 0 24Z" {...stroke} />
      <path d="M24 35V18" {...stroke} opacity="0.6" />
    </>
  ),
  living: (
    <>
      <path d="M11 42V23a13 13 0 0 1 26 0v19" {...stroke} />
      <path d="M17 42V25a7 7 0 0 1 14 0v17" {...stroke} />
      <path d="M6 42h36" {...stroke} />
      <path d="M24 13c-2.5-3-2.5-6 0-8 2.5 2 2.5 5 0 8Z" {...stroke} opacity="0.7" />
    </>
  ),
  host: (
    <>
      <path d="M5 33h38" {...stroke} />
      <path d="M13 33a11 11 0 0 1 22 0" {...stroke} />
      <path d="M24 10v6M10 16.5l4 4M38 16.5l-4 4M4.5 26.5h5M38.5 26.5h5" {...stroke} />
      <path d="M11 39h26M17 44h14" {...stroke} opacity="0.55" />
    </>
  ),
};

export function PillarIcon({ name, className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" width="48" height="48" aria-hidden="true" focusable="false">
      {icons[name]}
    </svg>
  );
}
