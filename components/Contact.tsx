"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./SocialIcons";

interface ContactItem {
  Icon: React.ComponentType<{ size?: number }>;
  label: string;
  href: string;
  handle: string;
  primary?: boolean;
}

const CONTACTS: ContactItem[] = [
  {
    Icon: Mail,
    label: "Email",
    href: "mailto:destinyobueh@gmail.com",
    handle: "destinyobueh@gmail.com",
    primary: true,
  },
  {
    Icon: WhatsappIcon,
    label: "WhatsApp",
    href: "https://wa.me/2349042401678",
    handle: "+234 904 240 1678",
  },
  {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/destinyobs/",
    handle: "destiny-obueh",
  },
  {
    Icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/destinyobs",
    handle: "destinyobs",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 px-5 sm:px-8 bg-[var(--color-white)]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-px bg-[var(--color-accent)]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Contact
            </span>
            <div className="w-6 h-px bg-[var(--color-accent)]" />
          </div>
          <h2 className="font-display font-light tracking-tight text-[var(--color-text)] leading-tight mb-5 max-w-xl mx-auto" style={{ fontSize: "clamp(1.9rem,5vw,3.25rem)" }}>
            Let&apos;s build something reliable, beautiful, and useful.
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-muted)] max-w-sm mx-auto leading-relaxed">
            Open to full-time roles, freelance projects, and technical collaborations. Let&apos;s talk.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {CONTACTS.map(({ Icon, label, href, handle, primary }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
                primary
                  ? "bg-[var(--color-accent)] border-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] hover:border-[var(--color-accent-hover)] shadow-sm hover:shadow-lg"
                  : "bg-[var(--color-bg)] border-[var(--color-border)] hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/3 hover:shadow-sm"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                  primary
                    ? "bg-white/20"
                    : "bg-[var(--color-accent)]/8 group-hover:bg-[var(--color-accent)]/14"
                }`}
              >
                <span className={primary ? "text-white" : "text-[var(--color-accent)]"}>
                  <Icon size={18} />
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-bold ${primary ? "text-white" : "text-[var(--color-text)]"}`}>
                  {label}
                </p>
                <p className={`text-xs truncate mt-0.5 ${primary ? "text-white/70" : "text-[var(--color-muted)]"}`}>
                  {handle}
                </p>
              </div>
              <ArrowUpRight
                size={15}
                className={`flex-shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ${
                  primary ? "text-white" : "text-[var(--color-muted)]"
                }`}
              />
            </motion.a>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center text-xs text-[var(--color-muted-light)] mt-10"
        >
          I typically respond within 24 hours.
        </motion.p>
      </div>
    </section>
  );
}
