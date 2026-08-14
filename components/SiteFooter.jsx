import Link from 'next/link';
import { EMAIL, PHONE } from '../lib/constants';

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="font-display text-4xl md:text-5xl">DCB Revolution isn't just a store. It's a movement.</p>
          <p className="mt-4 max-w-xl text-sm text-zinc-400">18GATE → Membership → Dashboard → Store → Products → Cards → Flip Three → Collection. 18+ only. Education-first. No medical claims.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <Foot icon="🂠" title="Flip to Win" text="Every purchase is a new round." />
          <Foot icon="⚡" title="Power Up" text="Collect. Compete. Conquer." />
          <Foot icon="♛" title="Join the Rev" text="Elite products. Elite players." />
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 text-xs text-zinc-500 md:flex-row md:justify-between">
        <p>WhatsApp 07763 383729 · {EMAIL}</p>
        <div className="flex gap-4">
          <Link href="/education">Education</Link>
          <Link href="/gate">18GATE</Link>
          <Link href={`https://wa.me/${PHONE}`}>Talk to ElCastroPlugged</Link>
        </div>
      </div>
    </footer>
  );
}

function Foot({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-2xl">{icon}</p>
      <p className="mt-2 text-sm font-black uppercase">{title}</p>
      <p className="mt-1 text-xs text-zinc-400">{text}</p>
    </div>
  );
}
