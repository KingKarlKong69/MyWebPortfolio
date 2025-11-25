"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { PaletteIcon, CodeIcon, ServerIcon, LayersIcon, SmartphoneIcon } from "@/components/icons"

const services = [
  {
    icon: PaletteIcon,
    title: "UI / UX Design",
    description: "User-friendly, visually appealing web interfaces that engage and convert.",
  },
  {
    icon: CodeIcon,
    title: "Front-End Development",
    description: "Responsive, interactive web apps using HTML, CSS, JavaScript, React, and Tailwind.",
  },
  {
    icon: ServerIcon,
    title: "Back-End Development",
    description: "Server-side logic, APIs, and databases with PHP, Node.js, MySQL, and Firebase.",
  },
  {
    icon: LayersIcon,
    title: "Full-Stack Development",
    description: "End-to-end solutions combining front-end excellence with robust back-end systems.",
  },
  {
    icon: SmartphoneIcon,
    title: "Hybrid / Cross-Platform",
    description: "Mobile and desktop apps using Capacitor.js and Electron.js for wider reach.",
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="services" className="py-24 px-6 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-px bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">What I Offer</h2>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">Services</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={cn(
                  "group p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-all duration-300 hover:shadow-lg",
                  isInView && "animate-in fade-in slide-in-from-bottom-4",
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="w-8 h-8 text-primary mb-4 transition-transform group-hover:scale-110" />
                <h4 className="text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
