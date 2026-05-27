"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe, X, ArrowLeft, ArrowRight, RefreshCw, Lock } from "lucide-react";

interface Project {
  name: string;
  url: string;
  description: string;
  tag: string;
  color: string;
}

const PROJECTS: Project[] = [
  {
    name: "AlpinistHub",
    url: "https://alpinisthub.org/",
    description: "A modern web platform with a clean product experience and strong frontend presentation.",
    tag: "Web Platform",
    color: "#1C3A2D",
  },
  {
    name: "Corelan Group",
    url: "https://corelangroup.com/",
    description: "A corporate website built to communicate trust, clarity, and professional brand presence.",
    tag: "Corporate",
    color: "#2A3A5C",
  },
  {
    name: "Inteflex Global",
    url: "https://inteflexglobal.com/",
    description: "A business-facing digital platform designed for clarity, responsiveness, and accessibility.",
    tag: "Business",
    color: "#3A2A1C",
  },
  {
    name: "The Visionnaires",
    url: "https://thevisionnaires.org/",
    description: "A polished digital experience for a mission-driven organization with strong visual identity.",
    tag: "Organization",
    color: "#2C1C3A",
  },
  {
    name: "SageStack",
    url: "https://sagestack.thevisionnaires.org/",
    description: "A full-stack application built with modern architecture, clean UI, and production-grade backend systems.",
    tag: "Full-Stack App",
    color: "#1C3A2D",
  },
  {
    name: "Raw Cycling App",
    url: "https://rawcyclingapp.netlify.app/",
    description: "A sport-focused digital product with engaging UI and dynamic content delivery.",
    tag: "Web App",
    color: "#3A1C1C",
  },
  {
    name: "Bulwark",
    url: "https://bulwark.netlify.app/",
    description: "A security-oriented web product with a clean, professional interface and robust functionality.",
    tag: "Security",
    color: "#1A2A3A",
  },
];

function BrowserModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const inputUrl = project.url;
  const [loading, setLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleRefresh = () => {
    setLoading(true);
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  let hostname = "";
  try { hostname = new URL(project.url).hostname.replace("www.", ""); } catch {}

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: "rgba(10, 10, 9, 0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-6xl flex flex-col rounded-2xl overflow-hidden shadow-2xl"
        style={{
          height: "clamp(480px, 85vh, 860px)",
          backgroundColor: "var(--color-white)",
          border: "1px solid var(--color-border)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Browser chrome */}
        <div
          className="flex items-center gap-3 px-4 py-3 flex-shrink-0 border-b border-[var(--color-border)]"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-[#FF5F57] hover:opacity-80 transition-opacity flex items-center justify-center group"
              title="Close"
            >
              <X size={7} className="text-[#7A1A1A] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <div className="w-3.5 h-3.5 rounded-full bg-[#FEBC2E]" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#28C840]" />
          </div>

          {/* Nav buttons — hidden on mobile to save space */}
          <div className="hidden sm:flex items-center gap-1 flex-shrink-0">
            <button className="w-7 h-7 flex items-center justify-center rounded-lg text-[var(--color-muted-light)] hover:text-[var(--color-muted)] hover:bg-[var(--color-surface2)] transition-all duration-150">
              <ArrowLeft size={13} />
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg text-[var(--color-muted-light)] hover:text-[var(--color-muted)] hover:bg-[var(--color-surface2)] transition-all duration-150">
              <ArrowRight size={13} />
            </button>
            <button
              onClick={handleRefresh}
              className="w-7 h-7 flex items-center justify-center rounded-lg text-[var(--color-muted-light)] hover:text-[var(--color-muted)] hover:bg-[var(--color-surface2)] transition-all duration-150"
            >
              <RefreshCw size={12} className={loading ? "animate-spin" : ""} />
            </button>
          </div>
          {/* Refresh only on mobile */}
          <button
            onClick={handleRefresh}
            className="sm:hidden w-7 h-7 flex items-center justify-center rounded-lg text-[var(--color-muted-light)] hover:text-[var(--color-muted)] hover:bg-[var(--color-surface2)] transition-all duration-150 flex-shrink-0"
          >
            <RefreshCw size={12} className={loading ? "animate-spin" : ""} />
          </button>

          {/* URL bar */}
          <div className="flex-1 min-w-0 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-[12px] text-[var(--color-muted)] font-mono">
            <Lock size={10} className="flex-shrink-0 text-[var(--color-accent)]" />
            <span className="truncate sm:hidden">{hostname}</span>
            <span className="truncate hidden sm:inline">{inputUrl}</span>
          </div>

          {/* Open in tab */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-[var(--color-accent)] border border-[var(--color-accent)]/20 hover:bg-[var(--color-accent)]/5 hover:border-[var(--color-accent)]/40 transition-all duration-150"
            title="Open in new tab"
          >
            <ExternalLink size={11} />
            <span className="hidden sm:inline">Open</span>
          </a>
        </div>

        {/* Browser body — interactive iframe */}
        <div className="flex-1 relative overflow-hidden bg-white">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10"
              style={{ backgroundColor: "var(--color-bg)" }}>
              <div
                className="w-8 h-8 rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)] animate-spin"
              />
              <div className="text-center">
                <p className="text-sm font-semibold text-[var(--color-text)]">{project.name}</p>
                <p className="text-xs text-[var(--color-muted)] mt-1">Loading {hostname}…</p>
              </div>
            </div>
          )}
          <iframe
            ref={iframeRef}
            src={project.url}
            title={project.name}
            className="w-full h-full border-0"
            style={{ opacity: loading ? 0 : 1, transition: "opacity 0.4s ease" }}
            onLoad={() => setLoading(false)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-navigation"
          />
        </div>

        {/* Bottom info bar */}
        <div
          className="flex items-center justify-between px-4 py-2.5 border-t border-[var(--color-border)] flex-shrink-0"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: project.color }}
            />
            <span className="text-xs font-semibold text-[var(--color-text)]">{project.name}</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-muted)]">
              {project.tag}
            </span>
          </div>
          <p className="text-[11px] text-[var(--color-muted)] hidden sm:block max-w-sm truncate">
            {project.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
  inView,
  onOpen,
}: {
  project: Project;
  index: number;
  inView: boolean;
  onOpen: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [hovered, setHovered] = useState(false);

  let hostname = "";
  try { hostname = new URL(project.url).hostname.replace("www.", ""); } catch {}

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.06 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-white)] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
      style={{
        boxShadow: hovered
          ? `0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(28,58,45,0.08)`
          : "0 1px 3px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}
    >
      {/* Browser chrome bar */}
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg)] flex-shrink-0">
        <div className="flex gap-1.5 flex-shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 min-w-0 mx-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-white)] border border-[var(--color-border)] flex items-center gap-1.5">
          <Lock size={8} className="text-[var(--color-accent)] flex-shrink-0" />
          <span className="text-[11px] text-[var(--color-muted)] truncate font-mono">{hostname}</span>
        </div>
      </div>

      {/* Preview — pointer-events none so it doesn't hijack the card click */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{ height: "240px", backgroundColor: "var(--color-surface)" }}
      >
        {/* Hover overlay — "Explore" prompt */}
        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3"
          style={{ backgroundColor: "rgba(28, 58, 45, 0.75)", backdropFilter: "blur(2px)" }}
        >
          <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
            <Globe size={22} className="text-white" />
          </div>
          <div className="text-center">
            <p className="text-white text-sm font-semibold">Explore Live Site</p>
            <p className="text-white/70 text-xs mt-0.5">Click to open in browser</p>
          </div>
        </motion.div>

        {!error ? (
          <>
            {!loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
                <div className="w-5 h-5 rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)] animate-spin" />
                <span className="text-[11px] text-[var(--color-muted-light)]">Loading preview…</span>
              </div>
            )}
            <iframe
              src={project.url}
              title={`Preview of ${project.name}`}
              className="absolute inset-0 w-full h-full border-0 pointer-events-none select-none"
              style={{
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.5s ease",
                transform: "scale(1)",
              }}
              onLoad={() => setLoaded(true)}
              onError={() => setError(true)}
              sandbox="allow-scripts allow-same-origin"
              loading="lazy"
            />
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center gap-4 p-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: project.color + "18" }}>
              <Globe size={24} style={{ color: project.color }} />
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
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: project.color }}
            />
            <h3 className="text-sm font-semibold text-[var(--color-text)] truncate">{project.name}</h3>
            <span className="flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold border border-[var(--color-border-light)] text-[var(--color-muted)]">
              {project.tag}
            </span>
          </div>
        </div>

        <p className="text-xs text-[var(--color-muted)] leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          <button
            onClick={(e) => { e.stopPropagation(); onOpen(); }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors duration-150 group/link"
          >
            Explore in browser
            <ExternalLink size={10} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-150" />
          </button>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[10px] text-[var(--color-muted-light)] hover:text-[var(--color-muted)] transition-colors duration-150 font-mono"
          >
            ↗ {hostname}
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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
            <h2
              className="font-display font-light tracking-tight text-[var(--color-text)] leading-tight"
              style={{ fontSize: "clamp(1.9rem,4vw,3rem)" }}
            >
              Live products in the wild.
            </h2>
            <p className="text-sm text-[var(--color-muted)] max-w-xs sm:text-right leading-relaxed">
              Click any project to explore it in a live browser window.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              inView={inView}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Full browser modal */}
      <AnimatePresence>
        {activeProject && (
          <BrowserModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
