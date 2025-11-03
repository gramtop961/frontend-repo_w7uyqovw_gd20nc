import React from 'react'

const divider = `
+------------------------------------------------------------+
|  methods: research • prototyping • co-design • evaluation  |
+------------------------------------------------------------+
`;

export default function About() {
  return (
    <section id="about" className="bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
        <p className="mt-4 text-neutral-300">
          I'm an interaction and experience designer with a focus on tangible interfaces,
          accessibility, and narrative systems. My practice blends research-driven inquiry with
          hands-on prototyping, aiming for clarity, empathy, and craft.
        </p>

        <pre className="mt-6 rounded-md bg-neutral-900/60 p-4 text-[11px] leading-tight whitespace-pre text-neutral-200 border border-white/10 shadow-inner">
{divider}
        </pre>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 p-4 bg-neutral-950/40">
            <h3 className="font-medium">Core Strengths</h3>
            <ul className="mt-2 list-disc pl-5 text-neutral-300 text-sm space-y-1">
              <li>Human-centered research & synthesis</li>
              <li>Rapid prototyping across media</li>
              <li>Information architecture & flows</li>
              <li>Collaborative workshops & facilitation</li>
            </ul>
          </div>
          <div className="rounded-lg border border-white/10 p-4 bg-neutral-950/40">
            <h3 className="font-medium">Toolbox</h3>
            <ul className="mt-2 list-disc pl-5 text-neutral-300 text-sm space-y-1">
              <li>Arduino, Processing, and p5.js</li>
              <li>Figma, Illustrator, and Notion</li>
              <li>Unity (XR prototypes)</li>
              <li>Python for quick utilities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
