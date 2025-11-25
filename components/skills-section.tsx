"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const softSkills = [
  "UI Design",
  "Problem Solving",
  "Adaptive & Fast Learner",
  "Deadline-driven",
  "Basic Leadership",
  "Testing & Architecture",
  "Organized",
  "Time Management",
  "Open to Feedback",
]

const technicalSkills = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"] },
  { category: "Backend", items: ["PHP", "Node.js", "MySQL", "Firebase", "REST API"] },
  { category: "Hybrid Apps", items: ["Capacitor.js", "Electron.js"] },
  { category: "Design", items: ["Figma", "Canva", "Adobe Photoshop", "Premiere Pro"] },
  { category: "Dev Tools", items: ["Git", "GitHub", "VSCode", "PlantUML", "Draw.io"] },
]

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="skills" className="py-24 px-6 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-px bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Skills & Tools</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Strengths</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span
                    key={skill}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm border border-border bg-background text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/5",
                      isInView && "animate-in fade-in slide-in-from-left-4",
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skillGroup, groupIndex) => (
                  <div
                    key={skillGroup.category}
                    className={cn(
                      "transition-all duration-500",
                      isInView && "animate-in fade-in slide-in-from-right-4",
                    )}
                    style={{ animationDelay: `${groupIndex * 100}ms` }}
                  >
                    <p className="text-sm text-muted-foreground mb-2">{skillGroup.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
