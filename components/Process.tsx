"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, PenTool, Cpu, TrendingUp } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Understand the product",
    description:
      "Deeply understand the problem, the users, and the constraints before writing a single line of code.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design clean architecture",
    description:
      "Plan the system architecture, data models, API contracts, and infrastructure with clarity first.",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Build scalable systems",
    description:
      "Write clean, tested, modular code — building systems that are maintainable, reliable, and ready to grow.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Ship, monitor, improve",
    description:
      "Deploy to production, observe real behavior, and iterate — shipping is not the end, it's the beginning.",
  },
] as const;

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-5 sm:px-8 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-px bg-[var(--color-accent)]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Process
            </span>
            <div className="w-6 h-px bg-[var(--color-accent)]" />
          </div>
          <h2 className="font-display font-light tracking-tight text-[var(--color-text)] leading-tight mb-4" style={{ fontSize: "clamp(1.9rem,4vw,3rem)" }}>
            How I Build
          </h2>
          <p className="text-sm text-[var(--color-muted)] max-w-md mx-auto leading-relaxed">
            A principled approach to software — from first principles to production.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-[var(--color-border)] z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {STEPS.map(({ number, icon: Icon, title, description }, i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-white)] hover:border-[var(--color-accent)]/30 hover:shadow-sm transition-all duration-300"
              >
                {/* Step icon + number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-accent)]/8 flex items-center justify-center group-hover:bg-[var(--color-accent)]/14 transition-colors duration-200 relative">
                    <Icon size={18} className="text-[var(--color-accent)]" />
                    {/* Step number dot */}
                    <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[var(--color-white)] border border-[var(--color-border)] flex items-center justify-center">
                      <span className="text-[8px] font-black text-[var(--color-muted)]">{i + 1}</span>
                    </div>
                  </div>
                  <span className="text-[2.5rem] font-black text-[var(--color-border)] leading-none select-none">
                    {number}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[var(--color-text)] mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
