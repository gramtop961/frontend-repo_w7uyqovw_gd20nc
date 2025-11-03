import React from 'react'

const asciiBanner = `
 __    __  ____   ____   ______   ______   ______   __        ______   ______  
/\ "-./  \/\  _"-./\  _"-./\__  _\ /\  ___\ /\  ___\ /\ \      /\  ___\ /\  == \ 
\ \ \-./\ \ \ \L\ \ \ \L\ \/_/\ \/ \ \  __\ \ \___  \\ \ \____ \ \  __\ \ \  __< 
 \ \_\ \ \_\ \____-\ \____-   \ \_\  \ \_____\\/\_____\\ \_____\\ \_____\\ \_\ \_\
  \/_/  \/_/\/____/ \/____/    \/_/   \/_____/ \/_____/ \/_____/ \/_____/ \/_/ /_/
`;

export default function HeaderHero() {
  return (
    <header className="relative isolate overflow-hidden bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24 md:pb-16">
        <nav className="flex items-center justify-between text-sm text-neutral-400">
          <div className="font-medium tracking-wide">Ixd Portfolio</div>
          <ul className="flex items-center gap-6">
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </nav>

        <div className="mt-12 grid gap-8 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Interaction & Experience Design
            </h1>
            <p className="mt-4 text-neutral-300 max-w-2xl">
              A selection of projects developed during my Master's at the University of Limerick —
              exploring human-centered technology, tangible interfaces, and expressive systems.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#projects" className="rounded-md bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition">View Projects</a>
              <a href="#contact" className="rounded-md border border-white/20 px-4 py-2 text-neutral-200 hover:bg-white/5 transition">Get in touch</a>
            </div>
          </div>
          <div className="md:col-span-2">
            <pre className="rounded-lg bg-neutral-900/60 p-4 text-xs leading-[1.15] overflow-x-auto whitespace-pre text-neutral-200 border border-white/10 shadow-inner">
{asciiBanner}
            </pre>
            <p className="mt-3 text-xs text-neutral-400">University of Limerick — MSc IxeD</p>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_10%,black,transparent)]">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white/10 to-transparent" />
      </div>
    </header>
  );
}
