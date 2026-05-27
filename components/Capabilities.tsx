"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Database, CloudCog } from "lucide-react";

const CAPABILITIES = [
  {
    number: "01",
    icon: Monitor,
    title: "Frontend Engineering",
    description:
      "I build clean, responsive, accessible, and high-performing interfaces with modern frontend tools and strong attention to user experience.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    accent: "var(--color-accent)",
  },
  {
    number: "02",
    icon: Database,
    title: "Backend Systems",
    description:
      "I design APIs, authentication flows, databases, services, and business logic using Node.js, Python, C#, .NET, and modern backend architecture.",
    tags: ["Node.js", "REST APIs", "PostgreSQL", "Auth", "Microservices"],
    accent: "var(--color-accent2)",
  },
  {
    number: "03",
    icon: CloudCog,
    title: "Cloud & Delivery",
    description:
      "I deploy, automate, monitor, and secure applications using cloud platforms, containers, CI/CD pipelines, and DevOps practices.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    accent: "var(--color-accent)",
  },
] as const;

export default function Capabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-5 sm:px-8 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[var(--color-accent)]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                What I Do
              </span>
            </div>
            <h2 className="font-display font-light tracking-tight text-[var(--color-text)] leading-tight" style={{ fontSize: "clamp(1.9rem,4vw,3rem)" }}>
              Full-Stack Capability
            </h2>
          </div>
          <p className="text-sm text-[var(--color-muted)] max-w-xs leading-relaxed sm:text-right">
            From pixel-perfect interfaces to resilient cloud infrastructure — depth across the whole stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {CAPABILITIES.map(({ number, icon: Icon, title, description, tags, accent }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col p-7 rounded-2xl border border-[var(--color-border)] bg-[var(--color-white)] hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: accent }}
              />

              {/* Number */}
              <span
                className="absolute top-5 right-6 text-[3rem] font-display font-light leading-none select-none"
                style={{ color: "var(--color-border)" }}
              >
                {number}
              </span>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-200"
                style={{ backgroundColor: `color-mix(in srgb, ${accent} 10%, transparent)` }}
              >
                <Icon size={22} style={{ color: accent }} />
              </div>

              <h3 className="text-base font-semibold text-[var(--color-text)] mb-3">{title}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6 flex-1">{description}</p>

              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-medium border border-[var(--color-border)] text-[var(--color-muted)] bg-[var(--color-bg)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
