import Link from 'next/link';
import { VAULTS, SIDEBAR_VAULTS, getVault } from '../lib/vaults';

const ICONS = {
  flower: '🌿',
  jar: '🫙',
  cup: '🍵',
  bolt: '⚡',
  press: '🟩',
  drop: '💧',
  diamond: '◆',
  vault: '▣',
  crown: '♛',
  merch: '🧥'
};

export default function VaultSidebar({ active }) {
  return (
    <aside className="space-y-3">
      <p className="px-1 text-[10px] font-black uppercase tracking-[0.28em] text-zinc-500">Browse by category</p>
      {SIDEBAR_VAULTS.map((slug) => {
        const vault = getVault(slug);
        const on = slug === active;
        return (
          <Link
            key={slug}
            href={`/vaults/${slug}`}
            className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-black uppercase tracking-wide ${on ? 'purple-glow border-purple-400 bg-purple-600/20 text-white' : 'border-white/10 bg-white/[0.04] text-zinc-300 hover:border-white/25'}`}
          >
            <span>{ICONS[vault.icon] || '•'}</span>
            <span>{vault.nav}</span>
          </Link>
        );
      })}
      <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 p-4 text-center">
        <p className="text-3xl">★</p>
        <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-purple-200">Earn Rev Points with every flip</p>
        <p className="mt-1 text-[11px] text-zinc-400">Level up. Unlock power.</p>
      </div>
    </aside>
  );
}

export function VaultStrip({ active }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {VAULTS.map((vault) => (
        <Link
          key={vault.slug}
          href={`/vaults/${vault.slug}`}
          className={`whitespace-nowrap rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-widest ${active === vault.slug ? 'border-gold bg-gold text-black' : 'border-white/15 text-zinc-300'}`}
        >
          {vault.nav}
        </Link>
      ))}
    </div>
  );
}
