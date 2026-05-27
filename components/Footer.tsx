"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from "./SocialIcons";

const SOCIALS = [
  { Icon: GithubIcon, href: "https://github.com/destinyobs", label: "GitHub" },
  { Icon: LinkedinIcon, href: "https://linkedin.com/in/destiny-obueh", label: "LinkedIn" },
  { Icon: InstagramIcon, href: "https://instagram.com/Destinyobueh", label: "Instagram" },
  { Icon: WhatsappIcon, href: "https://wa.me/2349042401678", label: "WhatsApp" },
  { Icon: ({ size }: { size?: number }) => <Mail size={size ?? 14} />, href: "mailto:destinyobueh@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] py-10 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[var(--color-accent)] flex items-center justify-center text-white text-xs font-black">
              D
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--color-text)] leading-tight">DestinyObs</p>
              <p className="text-[11px] text-[var(--color-muted)]">Full-Stack · Cloud · DevOps</p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden sm:flex items-center gap-5">
            {["home", "about", "projects", "skills", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-xs text-[var(--color-muted)] capitalize hover:text-[var(--color-text)] transition-colors duration-150"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-[var(--color-border-light)] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-[var(--color-muted-light)]">
            © 2026 DestinyObs. Built with care, clarity, and engineering precision.
          </p>
          <p className="text-[11px] text-[var(--color-muted-light)]">
            Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
