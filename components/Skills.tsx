"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillGroup {
  category: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Python", "C#", ".NET", "REST APIs", "GraphQL", "Authentication", "Microservices"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL Server", "Prisma"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD", "Linux", "Nginx", "GitHub Actions"],
  },
  {
    category: "Engineering",
    skills: ["System Design", "API Design", "Security", "Performance Optimization", "Observability", "Testing", "Automation"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32 px-5 sm:px-8 bg-[var(--color-white)]">
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
              Skills
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-display font-light tracking-tight text-[var(--color-text)] leading-tight" style={{ fontSize: "clamp(1.9rem,4vw,3rem)" }}>
              Technology Stack
            </h2>
            <p className="text-sm text-[var(--color-muted)] max-w-xs sm:text-right leading-relaxed">
              Tools I use to build robust, scalable, and maintainable systems.
            </p>
          </div>
        </motion.div>

        <div className="space-y-10">
          {SKILL_GROUPS.map(({ category, skills }, groupIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + groupIndex * 0.08 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-accent)] flex-shrink-0">
                  {category}
                </span>
                <div className="flex-1 h-px bg-[var(--color-border)]" />
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.15 + groupIndex * 0.06 + i * 0.035,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="px-3.5 py-2 rounded-xl text-sm font-medium border border-[var(--color-border)] text-[var(--color-text)] bg-[var(--color-bg)] hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition-all duration-200 cursor-default select-none"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
