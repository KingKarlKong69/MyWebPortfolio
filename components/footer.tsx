import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold text-foreground">Karl Lopez</p>
            <p className="text-sm text-muted-foreground">Full-stack Web Developer</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/karl-lopez-b3472539a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/KingKarlKong69"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:lopezkristine02@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <MailIcon className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">© 2025 Karl Lopez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
