"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { SearchIcon, PencilIcon, CodeIcon, RocketIcon, WrenchIcon } from "@/components/icons"

const steps = [
  {
    icon: SearchIcon,
    title: "Discovery & Research",
    description: "Understand client needs, brainstorm, and research solutions.",
  },
  {
    icon: PencilIcon,
    title: "Design",
    description: "Create UI/UX in Figma/Canva, iterate with feedback.",
  },
  {
    icon: CodeIcon,
    title: "Development",
    description: "Build front-end & back-end, integrate databases/APIs.",
  },
  {
    icon: RocketIcon,
    title: "Testing & Deployment",
    description: "Test, fix bugs, optimize performance, and launch.",
  },
  {
    icon: WrenchIcon,
    title: "Maintenance & Support",
    description: "Updates, improvements, and long-term support.",
  },
]

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-px bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">How I Work</h2>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">Process / Workflow</h3>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className={cn(
                    "flex gap-6 items-start transition-all duration-500",
                    isInView && "animate-in fade-in slide-in-from-left-4",
                  )}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-lg font-semibold text-foreground mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
