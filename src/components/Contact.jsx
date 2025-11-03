import React from 'react'

const mailArt = `
   .--------.
  / .------.\\
 / /  ____  \\
 | | / __ \\ |
 | |( (__) )|
 | | \\____/ |
 \ \\______/ /
  '--------'
`;

export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-3">
          <pre className="sm:col-span-1 rounded-md bg-neutral-900/60 p-4 text-[11px] leading-[1.1] whitespace-pre text-neutral-200 border border-white/10 shadow-inner">
{mailArt}
          </pre>
          <div className="sm:col-span-2 flex flex-col justify-center">
            <p className="text-neutral-300">
              Interested in collaborating or learning more about a specific project?
              I'm always happy to share process docs and prototypes.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a className="block rounded border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 transition" href="mailto:you@example.com">you@example.com</a>
              <div className="flex gap-3">
                <a className="rounded border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10 transition" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="rounded border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10 transition" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
                <a className="rounded border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10 transition" href="#projects">Download Portfolio (PDF)</a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Your Name — University of Limerick</p>
      </div>
    </section>
  );
}
