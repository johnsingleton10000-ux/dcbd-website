'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Original DCBD "Estate Frequency" — UK underground / road-scene inspired
 * production generated in the browser. Not a copy of any artist’s track.
 * 140 BPM grime grid: sub bass, tense hats, snare on 3, chopped vocal-like
 * formant hits.
 */
export default function RoadBeat() {
  const [on, setOn] = useState(false);
  const engine = useRef(null);

  useEffect(() => () => engine.current?.stop(), []);

  function toggle() {
    if (on) {
      engine.current?.stop();
      engine.current = null;
      setOn(false);
      return;
    }
    engine.current = startBeat();
    setOn(true);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed bottom-4 left-4 z-[60] flex items-center gap-3 rounded-full border border-gold/50 bg-black/85 px-4 py-2 text-left shadow-[0_0_24px_rgba(192,38,211,0.35)] backdrop-blur"
      aria-pressed={on}
    >
      <span className={`beat-eq flex h-5 items-end ${on ? '' : 'opacity-40'}`}>
        <span className="h-3" />
        <span />
        <span />
        <span />
        <span />
      </span>
      <span>
        <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-gold">Estate Frequency</span>
        <span className="block text-xs font-bold uppercase text-zinc-200">{on ? 'Original 140 BPM · mute' : 'Play original road beat'}</span>
      </span>
    </button>
  );
}

function startBeat() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const master = ctx.createGain();
  master.gain.value = 0.22;
  const compressor = ctx.createDynamicsCompressor();
  compressor.threshold.value = -18;
  compressor.knee.value = 12;
  compressor.ratio.value = 3.2;
  master.connect(compressor);
  compressor.connect(ctx.destination);

  const bpm = 140;
  const step = 60 / bpm / 4;
  let next = ctx.currentTime + 0.05;
  let i = 0;
  let timer = null;

  const kickHits = new Set([0, 3, 6, 10, 16, 19, 22, 28]);
  const snareHits = new Set([8, 24]);
  const ghostSnare = new Set([14, 26]);
  const bassHits = { 0: 43.65, 6: 36.71, 10: 41.2, 16: 43.65, 22: 32.7, 28: 36.71 };
  const stabHits = new Set([4, 12, 20, 30]);
  const chopHits = new Set([7, 15, 23, 27]);

  function tick() {
    const now = ctx.currentTime;
    while (next < now + 0.18) {
      const s = i % 32;
      hat(ctx, master, next, s % 2 === 0 ? 0.045 : 0.02, s % 8 === 6);
      if (kickHits.has(s)) kick(ctx, master, next);
      if (snareHits.has(s)) snare(ctx, master, next, 0.22);
      if (ghostSnare.has(s)) snare(ctx, master, next, 0.08);
      if (bassHits[s]) bass(ctx, master, next, bassHits[s], step * 4.5);
      if (stabHits.has(s)) stab(ctx, master, next);
      if (chopHits.has(s)) chop(ctx, master, next);
      if (s === 0) riser(ctx, master, next, step * 8);
      next += step * (s % 4 === 3 ? 1.04 : 0.98);
      i += 1;
    }
    timer = window.setTimeout(tick, 40);
  }

  tick();
  ctx.resume();

  return {
    stop() {
      window.clearTimeout(timer);
      master.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);
      window.setTimeout(() => ctx.close(), 180);
    }
  };
}

function kick(ctx, out, t) {
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(170, t);
  osc.frequency.exponentialRampToValueAtTime(42, t + 0.12);
  g.gain.setValueAtTime(1, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
  osc.connect(g);
  g.connect(out);
  osc.start(t);
  osc.stop(t + 0.3);
}

function snare(ctx, out, t, vol) {
  const noise = noiseOsc(ctx, 0.18);
  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = 1800;
  bp.Q.value = 0.8;
  const g = ctx.createGain();
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
  const tone = ctx.createOscillator();
  tone.type = 'triangle';
  tone.frequency.value = 196;
  const tg = ctx.createGain();
  tg.gain.setValueAtTime(vol * 0.5, t);
  tg.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
  noise.connect(bp);
  bp.connect(g);
  g.connect(out);
  tone.connect(tg);
  tg.connect(out);
  noise.start(t);
  noise.stop(t + 0.18);
  tone.start(t);
  tone.stop(t + 0.14);
}

function hat(ctx, out, t, vol, open) {
  const noise = noiseOsc(ctx, open ? 0.18 : 0.05);
  const hp = ctx.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = 7000;
  const g = ctx.createGain();
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + (open ? 0.16 : 0.04));
  noise.connect(hp);
  hp.connect(g);
  g.connect(out);
  noise.start(t);
  noise.stop(t + 0.2);
}

function bass(ctx, out, t, freq, dur) {
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = 240;
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, t);
  osc.frequency.exponentialRampToValueAtTime(freq * 0.92, t + dur * 0.8);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.85, t + 0.03);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  osc.connect(lp);
  lp.connect(g);
  g.connect(out);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

function stab(ctx, out, t) {
  const notes = [185, 220, 277];
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(1400, t);
    lp.frequency.exponentialRampToValueAtTime(420, t + 0.22);
    osc.type = idx ? 'sawtooth' : 'square';
    osc.frequency.value = freq;
    g.gain.setValueAtTime(0.07, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
    osc.connect(lp);
    lp.connect(g);
    g.connect(out);
    osc.start(t);
    osc.stop(t + 0.3);
  });
}

function chop(ctx, out, t) {
  const noise = noiseOsc(ctx, 0.12);
  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.setValueAtTime(900, t);
  bp.frequency.exponentialRampToValueAtTime(1800, t + 0.08);
  bp.Q.value = 8;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.16, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
  noise.connect(bp);
  bp.connect(g);
  g.connect(out);
  noise.start(t);
  noise.stop(t + 0.12);
}

function riser(ctx, out, t, dur) {
  const noise = noiseOsc(ctx, dur);
  const hp = ctx.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.setValueAtTime(200, t);
  hp.frequency.exponentialRampToValueAtTime(2400, t + dur);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.001, t);
  g.gain.linearRampToValueAtTime(0.05, t + dur);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur + 0.05);
  noise.connect(hp);
  hp.connect(g);
  g.connect(out);
  noise.start(t);
  noise.stop(t + dur + 0.06);
}

function noiseOsc(ctx, dur) {
  const buffer = ctx.createBuffer(1, Math.max(1, Math.floor(ctx.sampleRate * dur)), ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  return src;
}
