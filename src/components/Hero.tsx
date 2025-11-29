import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = '/assets/Rechidi_Ahmed_Abdelaaziz_CV.pdf';
    link.download = 'Rechidi_Ahmed_Abdelaaziz_CV.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-background to-teal-500/10"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.15),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(20,184,166,0.15),transparent_50%)]"></div>
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide border border-primary/20">
              👋 Hello, I'm
            </span>
          </motion.div>
          <motion.h1 
            className="mb-6 text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            RECHIDI Ahmed <br />Abdelaaziz
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="mb-8 text-3xl md:text-4xl bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent font-bold">
              Fullstack Developer (Mobile & Web)
            </h2>
          </motion.div>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Computer science student at ESI-SBA with a passion for mobile and web development. 
            Experienced in building mobile applications using Flutter and backend services with Node.js. 
            Strong problem-solving skills and a keen eye for detail.
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button onClick={() => scrollToSection('projects')} size="lg" className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all px-8 py-6 text-lg">
              View Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button onClick={handleDownloadCV} variant="outline" size="lg" className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 px-8 py-6 text-lg">
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all rounded-full h-12 w-12" asChild>
              <a
                href="https://github.com/RechidiAhmedAbdelaaziz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all rounded-full h-12 w-12" asChild>
              <a
                href="https://www.linkedin.com/in/rechidiahmed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all rounded-full h-12 w-12" asChild>
              <a
                href="mailto:aa.rechidi@esi-sba.dz"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
