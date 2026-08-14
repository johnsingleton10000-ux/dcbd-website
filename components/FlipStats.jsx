export default function FlipStats({ product }) {
  const flip = product.flipThree || {};
  const cells = [
    flip.ability && { label: 'Ability', title: flip.ability.name, text: flip.ability.text },
    flip.attack && { label: 'Attack', title: flip.attack.name, text: flip.attack.text || (flip.attack.value != null ? String(flip.attack.value) : '') },
    flip.defense && { label: 'Defense', title: flip.defense.name, text: flip.defense.text || (flip.defense.value != null ? String(flip.defense.value) : '') }
  ].filter(Boolean);

  if (!cells.length && !flip.role && !flip.runs) {
    return (
      <div className="grid grid-cols-3 gap-2 text-center text-[11px] uppercase tracking-widest text-zinc-400">
        <div className="rounded-xl border border-white/10 bg-black/40 p-2">Flip Three ready</div>
        <div className="rounded-xl border border-white/10 bg-black/40 p-2">XP on purchase</div>
        <div className="rounded-xl border border-white/10 bg-black/40 p-2">Collection track</div>
      </div>
    );
  }

  if (!cells.length) {
    return (
      <div className="grid grid-cols-3 gap-2 text-center">
        <Stat label="Role" title={flip.role || 'Linked'} text={flip.runs || 'Flip Three'} />
        <Stat label="XP" title={`+${product.membership?.xp || 0}`} text="Order XP" />
        <Stat label="Rev" title={`+${product.membership?.revPoints || 0}`} text="Rev Points" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {cells.map((cell) => (
        <Stat key={cell.label} {...cell} />
      ))}
    </div>
  );
}

function Stat({ label, title, text }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/50 p-2 text-center">
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gold">{label}</p>
      <p className="mt-1 text-[11px] font-black uppercase leading-tight text-white">{title}</p>
      {text ? <p className="mt-1 text-[10px] leading-snug text-zinc-400">{text}</p> : null}
    </div>
  );
}
