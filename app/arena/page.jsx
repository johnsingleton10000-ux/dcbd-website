import FlipArena from '../../components/FlipArena';
import { MEMBERSHIP } from '../../lib/constants';

export const metadata = {
  title: 'Flip Three Arena | DCBD',
  description: 'Play Flip Three inside the DCBD Estate — pick three original cards and battle.'
};

export default function ArenaPage() {
  return (
    <main className="concrete min-h-screen overflow-hidden px-4 py-16">
      <div className="relative mx-auto max-w-7xl">
        <img src="/art/estate-hud.jpg" alt="" className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-20" />
        <span className="sticker gold" style={{ '--r': '6deg' }}>GAME MECHANIC</span>
        <FlipArena />
        <p className="mt-12 max-w-2xl text-sm text-zinc-500">
          Arena play is a universe mechanic, not a prize draw. Estate Access at {MEMBERSHIP.price} unlocks the wider movement — community, drops, education — not a monthly box.
        </p>
      </div>
    </main>
  );
}
