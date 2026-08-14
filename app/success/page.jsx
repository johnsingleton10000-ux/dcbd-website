import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="grit-bg flex min-h-screen items-center justify-center px-5">
      <section className="max-w-3xl rounded-[2rem] border border-gold/30 bg-black/85 p-8 text-center md:p-12">
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">Inner Circle</p>
        <h1 className="font-display mt-4 text-6xl">Welcome to the Estate</h1>
        <p className="mt-5 text-zinc-300">Membership checkout completed. Continue into the dashboard, the physical store, or Flip Three.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/dashboard" className="rounded-full bg-gold px-6 py-3 text-xs font-black uppercase text-black">Dashboard</Link>
          <Link href="/store" className="rounded-full border border-white/20 px-6 py-3 text-xs font-black uppercase">Store</Link>
        </div>
      </section>
    </main>
  );
}
