"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { QuoteIcon } from "@/components/icons"

const testimonials = [
  {
    quote:
      "Karl is a highly reliable and talented web developer—he delivered our orphanage management system on time and with great quality.",
    author: "Capstone Team Member",
  },
  {
    quote: "His UI redesign for our site really boosted user trust and engagement.",
    author: "Personal Project Stakeholder",
  },
]

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.2 })

  return (
    <section className="py-24 px-6 bg-card" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-px bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Testimonials</h2>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">What People Say</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <blockquote
                key={index}
                className={cn(
                  "relative p-6 rounded-lg border border-border bg-background transition-all duration-500",
                  isInView && "animate-in fade-in slide-in-from-bottom-4",
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <QuoteIcon className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground mb-4 italic leading-relaxed">{`"${testimonial.quote}"`}</p>
                <footer className="text-sm text-muted-foreground">— {testimonial.author}</footer>
              </blockquote>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8">More testimonials coming soon!</p>
        </div>
      </div>
    </section>
  )
}
