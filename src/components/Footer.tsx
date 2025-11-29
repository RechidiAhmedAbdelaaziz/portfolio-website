import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-primary/10 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium mb-1">
              © {currentYear} RECHIDI Ahmed Abdelaaziz
            </p>
            <p className="text-xs text-muted-foreground">
              All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all rounded-full h-10 w-10" asChild>
              <a
                href="https://github.com/RechidiAhmedAbdelaaziz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all rounded-full h-10 w-10" asChild>
              <a
                href="https://www.linkedin.com/in/rechidiahmed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all rounded-full h-10 w-10" asChild>
              <a
                href="mailto:aa.rechidi@esi-sba.dz"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
