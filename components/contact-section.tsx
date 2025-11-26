"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { MailIcon, LinkedinIcon, GithubIcon, FacebookIcon, IndeedIcon, JobstreetIcon } from "@/components/icons"

const contactLinks = [
  {
    icon: MailIcon,
    label: "Email",
    value: "karladrianlopez16@gmail.com",
    href: "mailto:karladrianlopez16@gmail.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "karl-lopez",
    href: "https://www.linkedin.com/in/karl-lopez-b3472539a",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "KingKarlKong69",
    href: "https://github.com/KingKarlKong69",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: "karl.lopez",
    href: "https://www.facebook.com/karl.lopez.75491",
  },
  {
    icon: IndeedIcon,
    label: "Indeed",
    value: "Karl Lopez",
    href: "https://profile.indeed.com/p/kristinegracel-xs9r02f",
  },
  {
    icon: JobstreetIcon,
    label: "Jobstreet",
    value: "karladrian-lopez",
    href: "https://ph.jobstreet.com/profiles/karladrian-lopez-m9P7w4mvDx",
  },
]

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-px bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Get In Touch</h2>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {`Let's build something great together.`}
          </h3>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Have a project in mind or just want to chat? Feel free to reach out through any of these platforms.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-4 p-5 rounded-lg border border-border hover:border-primary/50 hover:bg-card transition-all duration-300 group",
                  isInView && "animate-in fade-in slide-in-from-bottom-4",
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="text-foreground group-hover:text-primary transition-colors font-medium">{link.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
