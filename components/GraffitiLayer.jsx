const TAGS = [
  ['MANC MADE', 'lime', '-8deg', '8%', '12%'],
  ['REAL GAS NO REGGIE', 'gold', '7deg', '78%', '18%'],
  ["DON'T SLEEP", 'pink', '-12deg', '6%', '58%'],
  ['REAL RECOGNIZE REAL', 'white', '5deg', '72%', '62%'],
  ['18 GATE', 'green', '-3deg', '84%', '78%'],
  ['FLIP THREE', 'lime', '10deg', '14%', '82%']
];

export default function GraffitiLayer() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden lg:block">
      {TAGS.map(([text, tone, r, left, top]) => (
        <span
          key={text}
          className={`sticker ${tone} absolute text-xs md:text-sm`}
          style={{ '--r': r, left, top }}
        >
          {text}
        </span>
      ))}
      <svg className="absolute left-[46%] top-[8%] h-16 w-16 opacity-70" viewBox="0 0 64 64" fill="none" aria-hidden>
        <circle cx="32" cy="32" r="28" stroke="#d4af37" strokeWidth="3" />
        <path d="M20 36c6-10 18-10 24 0" stroke="#b7ff2a" strokeWidth="3" />
        <circle cx="24" cy="26" r="3" fill="#c026d3" />
        <circle cx="40" cy="26" r="3" fill="#c026d3" />
      </svg>
    </div>
  );
}
