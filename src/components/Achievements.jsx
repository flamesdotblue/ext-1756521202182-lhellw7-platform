import { motion, useAnimation } from 'framer-motion';
import { Star, Trophy, Swords, Medal } from 'lucide-react';
import { useEffect } from 'react';

export default function Achievements() {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({ width: '78%' });
  }, [controls]);

  const badges = [
    { name: 'Bug Slayer', icon: Swords },
    { name: 'Pixel Perfect', icon: Medal },
    { name: 'Ship It!', icon: Trophy },
  ];

  return (
    <section className="relative py-16 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 rounded-sm border-2 border-black bg-amber-400 text-black p-6 drop-shadow-[8px_8px_0_#000]">
            <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wider">
              <Star size={16} /> Player Stats
            </div>
            <h3 className="mt-2 text-2xl font-extrabold">Frontend XP</h3>
            <div className="mt-4">
              <div className="h-4 rounded-sm border-2 border-black bg-white overflow-hidden">
                <motion.div
                  animate={controls}
                  initial={{ width: 0 }}
                  transition={{ type: 'tween', duration: 1.2, delay: 0.2 }}
                  className="h-full bg-black"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
                />
              </div>
              <div className="mt-2 flex justify-between text-xs font-bold">
                <span>Current Level</span>
                <span>Lv. 7</span>
              </div>
            </div>
          </div>

          <div className="flex-1 rounded-sm border-2 border-black bg-white text-black p-6 drop-shadow-[8px_8px_0_#000]">
            <div className="text-sm font-black uppercase tracking-wider">Badges</div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {badges.map((b) => (
                <div key={b.name} className="rounded-sm border-2 border-black bg-lime-400 p-4 flex flex-col items-center gap-2 text-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm border-2 border-black bg-white">
                    <b.icon size={22} />
                  </span>
                  <div className="text-sm font-extrabold">{b.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
