"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, GithubIcon, LinkedinIcon } from "@/components/icons"

function useTypewriter(words: string[], typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [pause, setPause] = useState(false)

  useEffect(() => {
    if (pause) return
    const currentWord = words[wordIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => {
          setPause(true)
          setTimeout(() => {
            setPause(false)
            setIsDeleting(true)
          }, pauseDuration)
        }, typingSpeed)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1))
        }, deletingSpeed)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }, typingSpeed)
      }
    }
    return () => clearTimeout(timeout)
  }, [text, isDeleting, pause, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  return text
}

const roles = [
  "Full-Stack Web Developer",
  "IT Support",
  "Front-end Developer",
  "Back-end Developer",
  "Database Administrator",
  "UI / UX Designer",
  "Research Lead",
]

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const typedText = useTypewriter(roles, 80, 40, 1500)

  const [gradientPos, setGradientPos] = useState({ x: 30, y: 20 })

  useEffect(() => {
    let animationFrameId: number
    let angle = 0

    const animate = () => {
      angle += 0.005
      const x = 50 + Math.sin(angle) * 25
      const y = 50 + Math.cos(angle * 0.7) * 25
      setGradientPos({ x, y })
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle at ${gradientPos.x}% ${gradientPos.y}%, var(--primary) 0%, transparent 50%), radial-gradient(circle at ${100 - gradientPos.x}% ${100 - gradientPos.y}%, var(--accent) 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-secondary border-4 border-primary/20 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img src="/owner.jpg" alt="Karl Lopez" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="w-3 h-3 bg-primary-foreground rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        <p className="text-primary font-medium mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500 h-7 flex items-center justify-center">
          <span>{typedText}</span>
          <span className="ml-1 animate-pulse" style={{ fontWeight: "bold", fontSize: "1.5em", lineHeight: "1" }}>
            |
          </span>
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 text-balance">
          Karl Lopez
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 text-pretty leading-relaxed">
          Building scalable, user-friendly apps powered by clean design and code.
        </p>

        <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 text-pretty leading-relaxed">
          I specialize in UI design, full-stack development, and problem solving—driven by a passion to create
          technology that makes a difference.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
          <Button asChild size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#projects">
              View My Work
              <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary bg-transparent">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
          <a
            href="https://github.com/KingKarlKong69"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/karl-lopez-b3472539a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
