import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Gamepad2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/20 to-neutral-950/80" />
      </div>

      <div className="relative z-10 container mx-auto h-full px-6 flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6 rounded-sm border-2 border-black bg-emerald-400 text-black px-3 py-1 text-xs font-bold tracking-wider drop-shadow-[4px_4px_0_#000]">
            <Gamepad2 size={16} />
            PRESS START
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-[6px_6px_0_#000] [text-shadow:0_0_0_#000]">
            Blocky Dev Portfolio
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-200 max-w-2xl">
            I build performant web apps with a retro soul. Pixel-perfect UI, modern stacks, and playful interactions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#skills"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-black bg-rose-400 text-black px-5 py-3 font-bold uppercase tracking-wide drop-shadow-[6px_6px_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:drop-shadow-[4px_4px_0_#000]"
            >
              View Skills
            </a>
            <a
              href="mailto:hello@example.dev"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-black bg-white text-black px-5 py-3 font-bold uppercase tracking-wide drop-shadow-[6px_6px_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:drop-shadow-[4px_4px_0_#000]"
            >
              <Mail size={18} /> Contact
            </a>
            <div className="ml-auto hidden sm:flex items-center gap-3 text-white/90">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-sm border-2 border-black bg-neutral-900 drop-shadow-[4px_4px_0_#000] hover:bg-neutral-800">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-sm border-2 border-black bg-neutral-900 drop-shadow-[4px_4px_0_#000] hover:bg-neutral-800">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
