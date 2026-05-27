"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Globe, Wifi } from "lucide-react";

interface Project {
  name: string;
  url: string;
  description: string;
  tag: string;
}

const PROJECTS: Project[] = [
  {
    name: "AlpinistHub",
    url: "https://alpinisthub.org/",
    description: "A modern web platform with a clean product experience and strong frontend presentation.",
    tag: "Web Platform",
  },
  {
    name: "Corelan Group",
    url: "https://corelangroup.com/",
    description: "A corporate website built to communicate trust, clarity, and professional brand presence.",
    tag: "Corporate",
  },
  {
    name: "Inteflex Global",
    url: "https://inteflexglobal.com/",
    description: "A business-facing digital platform designed for clarity, responsiveness, and accessibility.",
    tag: "Business",
  },
  {
    name: "The Visionnaires",
    url: "https://thevisionnaires.org/",
    description: "A polished digital experience for a mission-driven organization with strong visual identity.",
    tag: "Organization",
  },
  {
    name: "SageStack",
    url: "https://sagestack.thevisionnaires.org/",
    description: "A full-stack application built with modern architecture, clean UI, and production-grade backend systems.",
    tag: "Full-Stack App",
  },
  {
    name: "Raw Cycling App",
    url: "https://rawcyclingapp.netlify.app/",
    description: "A sport-focused digital product with engaging UI and dynamic content delivery.",
    tag: "Web App",
  },
  {
    name: "Bulwark",
    url: "https://bulwark.netlify.app/",
    description: "A security-oriented web product with a clean, professional interface and robust functionality.",
    tag: "Security",
  },
];

function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  let hostname = "";
  try { hostname = new URL(project.url).hostname.replace("www.", ""); } catch {}

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.08 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-white)] overflow-hidden hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg)] flex-shrink-0">
        <div className="flex gap-1.5 flex-shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 min-w-0 mx-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-white)] border border-[var(--color-border)] flex items-center gap-1.5">
          <Globe size={10} className="text-[var(--color-accent)] flex-shrink-0" />
          <span className="text-[11px] text-[var(--color-muted)] truncate font-mono">{hostname}</span>
        </div>
        <Wifi size={12} className="text-[var(--color-muted-light)] flex-shrink-0" />
      </div>

      {/* Preview */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: "200px", backgroundColor: "var(--color-surface)" }}>
        {!error ? (
          <>
            {!loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)] animate-spin" />
                <span className="text-[11px] text-[var(--color-muted-light)]">Loading preview…</span>
              </div>
            )}
            <iframe
              src={project.url}
              title={`Preview of ${project.name}`}
              className="absolute inset-0 w-full h-full border-0 transition-opacity duration-500 pointer-events-none select-none"
              style={{ opacity: loaded ? 1 : 0 }}
              onLoad={() => setLoaded(true)}
              onError={() => setError(true)}
              sandbox="allow-scripts allow-same-origin"
              loading="lazy"
            />
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center gap-4 p-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[var(--color-accent)]/10">
              <Globe size={24} className="text-[var(--color-accent)]" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-[var(--color-text)]">{project.name}</p>
              <p className="text-xs text-[var(--color-muted)] mt-0.5 font-mono">{hostname}</p>
            </div>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 min-w-0">
            <h3 className="text-sm font-semibold text-[var(--color-text)] truncate">{project.name}</h3>
            <span className="flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold border border-[var(--color-border-light)] text-[var(--color-muted)]">
              {project.tag}
            </span>
          </div>
        </div>
        <p className="text-xs text-[var(--color-muted)] leading-relaxed flex-1 mb-4">
          {project.description}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors duration-150 group/link"
        >
          Visit Live Site
          <ExternalLink size={11} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-150" />
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 px-5 sm:px-8 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[var(--color-accent)]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Selected Work
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-display font-light tracking-tight text-[var(--color-text)] leading-tight" style={{ fontSize: "clamp(1.9rem,4vw,3rem)" }}>
              Live products in the wild.
            </h2>
            <p className="text-sm text-[var(--color-muted)] max-w-xs sm:text-right leading-relaxed">
              Shipped work — each preview links to the real, live site.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
