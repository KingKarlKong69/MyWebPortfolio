"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.2 })

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-px bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">About</h2>
          </div>

          <div className="grid md:grid-cols-[1fr,2fr] gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Background</h3>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {`I'm Karl Lopez, a 4th year BSIT student at Bulacan State University – Bustos Campus. I've always believed technology is the most powerful force shaping our future, so I dedicated myself to mastering web development from front-end to back-end.`}
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                My motivation is simple: I want to be part of technology's growth, work in a high-demand field, and
                build a rewarding career.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                In my capstone project, I served as the research lead, contributing to both architecture and
                development. I thrive on problem solving, adaptability, working under pressure, time management, and
                openness to feedback.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <p className="text-2xl font-bold text-primary">3+</p>
                  <p className="text-sm text-muted-foreground">Years Learning</p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <p className="text-2xl font-bold text-primary">10+</p>
                  <p className="text-sm text-muted-foreground">Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
