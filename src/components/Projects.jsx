import React from 'react'

function AsciiThumb({ art }) {
  return (
    <pre className="rounded-md bg-neutral-900/60 p-3 text-[10px] leading-[1.15] overflow-x-auto whitespace-pre text-neutral-200 border border-white/10 shadow-inner">
{art}
    </pre>
  );
}

const projects = [
  {
    title: 'Tangible Interface Toolkit',
    year: '2024',
    tags: ['physical computing', 'workshop'],
    desc: 'A modular set of blocks for rapid prototyping embodied interactions in studio settings.',
    art: `
 .----------.   .----------.
 |  input   |-->|  output  |
 '----.-----'   '----.-----'
       \\            /
        \\   .----./
         '-->| map |--.
             '----'   \\
 .----------.   .------\\-----.
 | sensor   |-->|   logic    |
 '----------'   '------------'
`,
  },
  {
    title: 'Inclusive Wayfinding System',
    year: '2024',
    tags: ['service design', 'accessibility'],
    desc: 'Multi-sensory navigation aids across campus with tactile cues and responsive signage.',
    art: `
[entrance]-----( tactile path )-----[hub]
      \\                          /
       \\__ [audio beacon] __/ 
          \\                / 
           [lift]----[stairs]
`,
  },
  {
    title: 'Ambient Data Sculpture',
    year: '2023',
    tags: ['data viz', 'installation'],
    desc: 'A calm display translating environmental metrics into kinetic ASCII patterns.',
    art: `
  /\\    /\\    /\\    /\\
 <> <>  <> <>  <> <>  <> <>
  \\//    \\//    \\//    \\//
--====--====--====--====--
`,
  },
  {
    title: 'XR Museum Guide',
    year: '2023',
    tags: ['AR/VR', 'storytelling'],
    desc: 'A playful guide that overlays curatorial narratives as spatial prompts and gestures.',
    art: `
  .--------.      .--------.
 /  AR UI  \\ ->  | headset |
 '--------'       '--------'
     \\\n      \\__ ( anchors ) __
          \\         /
          [ artifact ]
`,
  },
  {
    title: 'Social Robot Behaviors',
    year: '2023',
    tags: ['HRI', 'prototyping'],
    desc: 'Explorations of motion, sound, and light patterns for readable social cues.',
    art: `
   (o)  ~  (o)  ~  (o)
  /|\\     /|\\     /|\\
  / \\     / \\     / \\
  ^^^ wave  nod   spin
`,
  },
];

function ProjectCard({ p }) {
  return (
    <article className="group rounded-xl border border-white/10 bg-neutral-950/40 p-5 hover:border-white/20 transition">
      <AsciiThumb art={p.art} />
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium text-white">{p.title}</h3>
          <p className="mt-1 text-sm text-neutral-400">{p.desc}</p>
          <ul className="mt-2 flex flex-wrap gap-2 text-xs text-neutral-400">
            {p.tags.map((t) => (
              <li key={t} className="rounded border border-white/10 px-2 py-0.5">{t}</li>
            ))}
          </ul>
        </div>
        <span className="shrink-0 rounded bg-white/5 px-2 py-1 text-xs text-neutral-300 border border-white/10">{p.year}</span>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
            <p className="mt-2 text-neutral-400 max-w-2xl">
              Black, white, and gray — expressed through ASCII line art to foreground process
              and structure over decoration.
            </p>
          </div>
          <div className="hidden md:block text-xs text-neutral-500">
            <span>ASCII mode</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
