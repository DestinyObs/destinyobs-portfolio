"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Server, Cloud, Zap, Shield, Layers } from "lucide-react";

const STRENGTHS = [
  { icon: Layers, label: "Full-Stack", sub: "End-to-end engineering" },
  { icon: Server, label: "Backend", sub: "APIs & data systems" },
  { icon: Cloud, label: "Cloud & DevOps", sub: "Infrastructure & delivery" },
  { icon: Code2, label: "Product Focus", sub: "User-first thinking" },
  { icon: Zap, label: "Performance", sub: "Fast & resilient" },
  { icon: Shield, label: "Security", sub: "Production hardened" },
];

function stagger(i: number) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  };
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-5 sm:px-8 bg-[var(--color-white)]">
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
              About
            </span>
          </div>
          <h2 className="font-display font-light tracking-tight text-[var(--color-text)] leading-tight max-w-lg" style={{ fontSize: "clamp(1.9rem,4vw,3rem)" }}>
            Engineering software that actually matters
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">
          {/* Left: Text */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5 text-[var(--color-muted)] leading-[1.75]"
            >
              <p className="text-[var(--color-text)] text-[1.05rem] font-medium leading-relaxed">
                DestinyObs is a software engineer focused on building elegant, functional, and scalable digital products.
              </p>
              <p className="text-sm sm:text-base">
                My work combines frontend craftsmanship, backend systems, cloud infrastructure, automation, and production-grade reliability — spanning the full depth of the engineering stack.
              </p>
              <p className="text-sm sm:text-base">
                I care about code that is maintainable, systems that are observable, and products that users trust. Whether it&apos;s a polished interface, a performant API, or a resilient cloud deployment — I bring the same rigor.
              </p>
            </motion.div>

            {/* Terminal card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-sm"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <span className="flex-1 text-center text-[11px] font-medium text-[var(--color-muted-light)]">
                  engineer.ts
                </span>
              </div>
              <div
                className="p-5 font-mono text-[12.5px] leading-[1.9] overflow-x-auto"
                style={{ backgroundColor: "#131610", color: "#E4E4D8" }}
              >
                <div>
                  <span style={{ color: "#A8D5A2" }}>const</span>{" "}
                  <span style={{ color: "#C5E1A5" }}>engineer</span>{" "}
                  <span style={{ color: "#A8D5A2" }}>= </span>
                  <span>{"{"}</span>
                </div>
                <div className="pl-5">
                  <span style={{ color: "#FFD54F" }}>name</span>
                  <span>: </span>
                  <span style={{ color: "#B2DFDB" }}>&quot;Destiny Obueh&quot;</span>,
                </div>
                <div className="pl-5">
                  <span style={{ color: "#FFD54F" }}>alias</span>
                  <span>: </span>
                  <span style={{ color: "#B2DFDB" }}>&quot;DestinyObs&quot;</span>,
                </div>
                <div className="pl-5">
                  <span style={{ color: "#FFD54F" }}>stack</span>
                  <span>: [</span>
                  <span style={{ color: "#B2DFDB" }}>&quot;Frontend&quot;</span>
                  <span>, </span>
                  <span style={{ color: "#B2DFDB" }}>&quot;Backend&quot;</span>
                  <span>, </span>
                  <span style={{ color: "#B2DFDB" }}>&quot;Cloud&quot;</span>
                  <span>],</span>
                </div>
                <div className="pl-5">
                  <span style={{ color: "#FFD54F" }}>values</span>
                  <span>: [</span>
                  <span style={{ color: "#B2DFDB" }}>&quot;Reliability&quot;</span>
                  <span>, </span>
                  <span style={{ color: "#B2DFDB" }}>&quot;Clarity&quot;</span>
                  <span>, </span>
                  <span style={{ color: "#B2DFDB" }}>&quot;Craft&quot;</span>
                  <span>],</span>
                </div>
                <div className="pl-5">
                  <span style={{ color: "#FFD54F" }}>available</span>
                  <span>: </span>
                  <span style={{ color: "#A8D5A2" }}>true</span>,
                </div>
                <div>{"}"}</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Strengths grid */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-4 h-px bg-[var(--color-border)]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-light)]">
                Core Strengths
              </span>
            </motion.div>
            <div className="grid grid-cols-2 gap-3">
              {STRENGTHS.map(({ icon: Icon, label, sub }, i) => (
                <motion.div
                  key={label}
                  {...stagger(i + 2)}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  className="group p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] hover:bg-[var(--color-white)] hover:border-[var(--color-accent)]/25 hover:shadow-sm transition-all duration-200 cursor-default"
                >
                  <div className="w-9 h-9 rounded-xl bg-[var(--color-accent)]/6 flex items-center justify-center mb-3.5 group-hover:bg-[var(--color-accent)]/10 transition-colors duration-200">
                    <Icon size={16} className="text-[var(--color-accent)]" />
                  </div>
                  <p className="text-sm font-semibold text-[var(--color-text)] mb-1">{label}</p>
                  <p className="text-xs text-[var(--color-muted)]">{sub}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-5 flex items-center gap-2 text-xs text-[var(--color-muted)] px-1"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
              Nigeria — building products for a global audience
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
