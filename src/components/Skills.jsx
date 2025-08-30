import { motion } from 'framer-motion';
import { Code2, Cpu, Wrench, Layers, Palette, Rocket, Terminal } from 'lucide-react';

const skills = [
  { name: 'React + Vite', color: 'bg-emerald-400', icon: Code2, level: 95 },
  { name: 'TypeScript', color: 'bg-sky-400', icon: Terminal, level: 90 },
  { name: 'Node + API', color: 'bg-amber-400', icon: Cpu, level: 88 },
  { name: 'Tailwind CSS', color: 'bg-fuchsia-400', icon: Palette, level: 92 },
  { name: 'Testing', color: 'bg-lime-400', icon: Wrench, level: 80 },
  { name: 'Architecture', color: 'bg-rose-400', icon: Layers, level: 86 },
  { name: 'Perf + DX', color: 'bg-cyan-400', icon: Rocket, level: 89 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 22 } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <div className="inline-block rounded-sm border-2 border-black bg-white text-black px-3 py-1 text-xs font-extrabold tracking-widest drop-shadow-[4px_4px_0_#000]">
            SKILLS & TOOLS
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-[6px_6px_0_#000]">
            Leveling Up the Stack
          </h2>
          <p className="mt-3 text-neutral-300 max-w-2xl">
            A retro, blocky grid with a touch of arcade vibes. Hover tiles to see details — unlocked through countless quests and commits.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((s, idx) => (
            <motion.div key={s.name} variants={item}>
              <SkillCard {...s} index={idx} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ name, icon: Icon, color, level, index }) {
  return (
    <div className="group relative">
      <div className={`rounded-sm border-2 border-black ${color} text-black p-5 drop-shadow-[8px_8px_0_#000] transition-transform duration-150 group-active:translate-x-[2px] group-active:translate-y-[2px] group-active:drop-shadow-[6px_6px_0_#000]`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm border-2 border-black bg-white">
              <Icon size={20} />
            </span>
            <h3 className="text-xl font-black tracking-wide">{name}</h3>
          </div>
          <span className="text-xs font-extrabold uppercase">Lv.{Math.round(level / 10)}</span>
        </div>
        <div className="mt-4">
          <div className="h-3 rounded-sm border-2 border-black bg-white overflow-hidden">
            <div
              className="h-full bg-black"
              style={{ width: `${level}%`, clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs font-bold">
            <span>XP</span>
            <span>{level}%</span>
          </div>
        </div>
      </div>
      <div className="absolute -inset-1 rounded-sm bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_2px,transparent_2px,transparent_6px)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none" />
    </div>
  );
}
