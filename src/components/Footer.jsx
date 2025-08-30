import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="inline-block rounded-sm border-2 border-black bg-emerald-400 text-black px-2 py-1 text-xs font-extrabold tracking-widest drop-shadow-[4px_4px_0_#000]">
              BLOCKY DEV
            </div>
            <p className="mt-4 text-neutral-300 max-w-sm">
              Retro-inspired, performance-focused. Building tactile interfaces and delightful developer experiences.
            </p>
          </div>

          <div>
            <h4 className="font-black tracking-widest text-sm text-neutral-200">NAV</h4>
            <ul className="mt-3 space-y-2 text-neutral-300">
              <li><a href="#skills" className="hover:text-white">Skills</a></li>
              <li><a href="#" className="hover:text-white">Projects</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black tracking-widest text-sm text-neutral-200">CONTACT</h4>
            <div className="mt-3 flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-sm border-2 border-black bg-neutral-900 text-white drop-shadow-[4px_4px_0_#000] hover:bg-neutral-800">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-sm border-2 border-black bg-neutral-900 text-white drop-shadow-[4px_4px_0_#000] hover:bg-neutral-800">
                <Linkedin size={18} />
              </a>
              <a href="mailto:hello@example.dev" className="inline-flex h-10 w-10 items-center justify-center rounded-sm border-2 border-black bg-neutral-900 text-white drop-shadow-[4px_4px_0_#000] hover:bg-neutral-800">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-6 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Blocky Dev. All rights reserved.</p>
          <p className="text-neutral-500">Made with React, Tailwind, and a dash of 8-bit flair.</p>
        </div>
      </div>
    </footer>
  );
}
