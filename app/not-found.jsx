export default function NotFound() {
  return (
    <main className="grit-bg flex min-h-[70vh] items-center justify-center px-5">
      <div className="text-center">
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">18GATE</p>
        <h1 className="font-display mt-3 text-6xl">This hall is empty</h1>
        <p className="mt-3 text-zinc-400">That route is not part of the Estate yet.</p>
        <a href="/store" className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-xs font-black uppercase text-black">Return to the store</a>
      </div>
    </main>
  );
}
