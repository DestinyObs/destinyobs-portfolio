"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setScrolled(scrollTop > 32);
    setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

    for (const { id } of [...NAV_LINKS].reverse()) {
      const el = document.getElementById(id);
      if (el && scrollTop >= el.offsetTop - 140) {
        setActive(id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 z-[60] h-0.5 transition-all duration-150"
        style={{
          width: `${progress}%`,
          backgroundColor: "var(--color-accent)",
          opacity: progress > 1 ? 1 : 0,
        }}
      />

      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? "rgba(250, 250, 246, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(217, 214, 206, 0.8)" : "none",
          transition: "background-color 0.3s, backdrop-filter 0.3s, border-color 0.3s",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[64px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="group flex items-center gap-2 text-[var(--color-text)] font-bold text-base tracking-tight hover:text-[var(--color-accent)] transition-colors duration-200"
          >
            <span className="w-7 h-7 rounded-lg bg-[var(--color-accent)] flex items-center justify-center text-white text-xs font-black flex-shrink-0 group-hover:bg-[var(--color-accent-hover)] transition-colors duration-200">
              D
            </span>
            DestinyObs
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === id
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]"
                }`}
              >
                {label}
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-[var(--color-accent)]/8 border border-[var(--color-accent)]/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Hire me CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="px-4 py-2 text-sm font-semibold rounded-xl bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-px"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-all duration-200"
            aria-label="Toggle navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/10 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-[72px] left-4 right-4 z-40 rounded-2xl border border-[var(--color-border)] shadow-xl md:hidden overflow-hidden"
              style={{ backgroundColor: "rgba(250, 250, 246, 0.98)", backdropFilter: "blur(20px)" }}
            >
              <nav className="p-2">
                {NAV_LINKS.map(({ label, id }, i) => (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    onClick={() => scrollTo(id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                      active === id
                        ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                        : "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
                    }`}
                  >
                    {label}
                  </motion.button>
                ))}
                <div className="px-2 pb-2 pt-1">
                  <button
                    onClick={() => scrollTo("contact")}
                    className="w-full py-3 rounded-xl bg-[var(--color-accent)] text-white text-sm font-semibold hover:bg-[var(--color-accent-hover)] transition-colors duration-200"
                  >
                    Hire Me
                  </button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
