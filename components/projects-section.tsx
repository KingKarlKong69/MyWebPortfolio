"use client"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { ExternalLinkIcon } from "@/components/icons"

const projects = [
  {
    title: "Tahanan ng Pagmamahal Orphanage Management System",
    description:
      "A capstone group project—a full-stack web/mobile app with integrated modules for managing orphanage operations.",
    role: "Research lead & developer (front-end & back-end)",
    tech: ["HTML", "CSS", "JS", "PHP", "Firebase", "Tailwind CSS", "Node.js", "Capacitor.js"],
    impact: "Streamlined admin tasks and improved team coordination.",
    image: "/TNPOMS_Dashboard.png",
    url: "https://tahananngpagmamahal.capstone-two.com/login",
  },
  {
    title: "Negus Grounds Coffee Shop",
    description: "Individual project—a full-stack e-commerce site with client and admin sides.",
    role: "Developer & designer",
    tech: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    impact: "Enabled online ordering and inventory management.",
    image: "/negus.png",
    url: "https://negusgrounds-demo.example.com",
  },
  {
    title: "Silver Thatch Pensions UI/UX Redesign",
    description: "Personal front-end project to modernize the Silver Thatch Pensions website.",
    role: "UI/UX Designer & Developer",
    tech: ["HTML", "CSS", "JS", "Tailwind CSS", "React.js"],
    impact: "Enhanced credibility and user experience.",
    image: "/Silver Thatch Pensions_Landing Page.png",
    url: "https://silver-thatch-pensions-redesign-iux.vercel.app/",
  },
]

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-px bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Selected Work</h2>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">Projects</h3>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={cn(
                  "group grid md:grid-cols-2 gap-8 items-center transition-all duration-500",
                  isInView && "animate-in fade-in slide-in-from-bottom-8",
                  index % 2 === 1 && "md:direction-rtl",
                )}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={cn("relative overflow-hidden rounded-lg", index % 2 === 1 && "md:order-2")}> 
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="block aspect-[3/2] bg-secondary">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className={cn(
                        "w-full h-full object-cover transition-transform duration-500",
                        hoveredIndex === index && "scale-105",
                      )}
                    />
                    <div
                      className={cn(
                        "absolute inset-0 bg-accent/80 flex items-center justify-center opacity-0 transition-opacity duration-300",
                        hoveredIndex === index && "opacity-100",
                      )}
                    >
                      <span className="text-accent-foreground flex items-center gap-2">
                        View Project <ExternalLinkIcon className="w-4 h-4" />
                      </span>
                    </div>
                  </a>
                </div>

                <div className={cn(index % 2 === 1 && "md:order-1 md:text-right")}>
                  <h4 className="text-xl font-semibold text-foreground mb-3 text-balance">{project.title}</h4>
                  <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{project.description}</p>
                  <p className="text-sm text-primary mb-4">Role: {project.role}</p>
                  <div className={cn("flex flex-wrap gap-2 mb-4", index % 2 === 1 && "md:justify-end")}>
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Impact: {project.impact}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
