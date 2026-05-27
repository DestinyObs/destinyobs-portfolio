"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from "./SocialIcons";
import { Mail } from "lucide-react";

const STATS = [
  { value: "4+", label: "Years building" },
  { value: "20+", label: "Projects shipped" },
  { value: "Full-Stack", label: "Frontend → Cloud" },
  { value: "Open", label: "To opportunities" },
];

const SOCIALS = [
  { Icon: GithubIcon, href: "https://github.com/destinyobs", label: "GitHub" },
  { Icon: LinkedinIcon, href: "https://linkedin.com/in/destiny-obueh", label: "LinkedIn" },
  { Icon: InstagramIcon, href: "https://instagram.com/Destinyobueh", label: "Instagram" },
  { Icon: WhatsappIcon, href: "https://wa.me/2349042401678", label: "WhatsApp" },
];

function fade(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  };
}

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-5 sm:px-8 pt-20 pb-16 overflow-hidden"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(28,58,45,0.07) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(28,58,45,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Available badge */}
        <motion.div {...fade(0.05)} className="mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border"
            style={{
              backgroundColor: "rgba(28,58,45,0.05)",
              borderColor: "rgba(28,58,45,0.15)",
              color: "var(--color-accent)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse-dot" />
            Available for engineering work · Remote / Global
          </div>
        </motion.div>

        {/* Name — Cormorant Garamond display */}
        <motion.h1
          {...fade(0.1)}
          className="font-display font-light tracking-[-0.025em] text-[var(--color-text)] leading-[0.92] mb-4"
          style={{ fontSize: "clamp(4.5rem, 14vw, 9.5rem)" }}
        >
          Destiny<span className="italic text-[var(--color-accent)]">Obs</span>
        </motion.h1>

        {/* Editorial italic tagline */}
        <motion.p
          {...fade(0.18)}
          className="font-display italic font-light text-[var(--color-muted)] leading-snug mb-8"
          style={{ fontSize: "clamp(1.15rem, 2.8vw, 1.65rem)" }}
        >
          Engineering scalable software with clean architecture and craft.
        </motion.p>

        {/* Role chips */}
        <motion.div
          {...fade(0.26)}
          className="flex flex-wrap justify-center items-center gap-2 mb-10"
        >
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-muted)] bg-[var(--color-surface)] px-3 py-1.5 rounded-lg border border-[var(--color-border-light)]">
            <Terminal size={13} className="text-[var(--color-accent)]" />
            Full-Stack Software Engineer
          </span>
          <span className="text-[var(--color-muted-light)] text-sm select-none">·</span>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-muted)] bg-[var(--color-surface)] px-3 py-1.5 rounded-lg border border-[var(--color-border-light)]">
            <Zap size={13} className="text-[var(--color-accent2)]" />
            Cloud & DevOps Engineer
          </span>
        </motion.div>

        {/* Stats — editorial divider style */}
        <motion.div
          {...fade(0.34)}
          className="grid grid-cols-2 sm:grid-cols-4 gap-0 w-full max-w-2xl mb-10 border border-[var(--color-border)] rounded-2xl overflow-hidden bg-[var(--color-white)]"
        >
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className={`py-5 px-4 text-center ${i < STATS.length - 1 ? "border-r border-[var(--color-border)]" : ""}`}
            >
              <p className="font-display text-2xl font-light text-[var(--color-text)] leading-none mb-1">
                {value}
              </p>
              <p className="text-[11px] text-[var(--color-muted)] leading-tight">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div {...fade(0.4)} className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--color-accent)] text-white text-sm font-semibold hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-px"
          >
            View Projects
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[var(--color-border)] text-[var(--color-text)] text-sm font-semibold hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition-all duration-200 hover:-translate-y-px"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Divider */}
        <motion.div
          {...fade(0.46)}
          className="w-full max-w-xs h-px bg-[var(--color-border)] mb-8"
        />

        {/* Socials */}
        <motion.div {...fade(0.5)} className="flex items-center gap-3">
          {SOCIALS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/5 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Icon size={16} />
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] text-[var(--color-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap pointer-events-none">
                {label}
              </span>
            </a>
          ))}
          <a
            href="mailto:destinyobueh@gmail.com"
            aria-label="Email"
            className="group relative w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/5 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Mail size={16} />
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] text-[var(--color-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap pointer-events-none">
              Email
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-[var(--color-muted-light)]">
          Scroll
        </span>
        <div className="w-px h-10 overflow-hidden">
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(to bottom, var(--color-muted-light), transparent)",
              animation: "scan-line 1.6s ease-in-out infinite",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
