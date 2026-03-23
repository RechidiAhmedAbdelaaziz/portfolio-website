import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Code, Shield, Smartphone } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Expertise in Flutter with Clean Architecture and BLoC state management.',
    },
    {
      icon: Code,
      title: 'Backend Engineering',
      description: 'Building robust services with NestJS, Node.js, and secure API design.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Focusing on OWASP Top 10, identity systems (OAuth2, JWT), and data safety.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Who I Am
            </span>
            <h2 className="mb-4 text-4xl font-bold">About Me</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-xl text-foreground/80 mb-6 leading-relaxed">
              I am a Software Engineer and Cybersecurity student who thrives in the space between functionality and security.
              I focus on writing code that solves real problems for real people, making applications more resilient
              without sacrificing the user experience.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Currently deepening my expertise in Software Engineering and Application Security at ESI Sidi Bel Abbes,
              actively researching performance optimization and implementing OWASP-aligned security controls.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto mt-12">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-teal-500/5 border-2 border-primary/10 hover:border-primary/20 transition-all shadow-sm">
                <h3 className="mb-5 flex items-center gap-3 text-2xl font-semibold">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </div>
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-foreground/90 font-bold text-xl">Engineering Degree in Computer Science</p>
                    <p className="text-muted-foreground text-lg">ESI Sidi Bel Abbes</p>
                    <p className="text-sm text-cyan-500 font-semibold mt-1">Expected Sept 2027 • Sidi Bel Abbes, Algeria</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-500/5 to-cyan-500/5 border-2 border-primary/10 hover:border-primary/20 transition-all shadow-sm">
                <h3 className="mb-5 flex items-center gap-3 text-2xl font-semibold">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Smartphone className="h-7 w-7 text-primary" />
                  </div>
                  Languages
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="text-foreground/90 font-semibold text-lg">Arabic</p>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-bold text-primary">NATIVE</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-foreground/90 font-semibold text-lg">English</p>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-bold text-primary">PROFESSIONAL</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-foreground/90 font-semibold text-lg">French</p>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-bold text-primary">INTERMEDIATE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1 border-primary/10">
                  <CardContent className="pt-8 pb-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-5 p-4 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl">
                        <highlight.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="mb-3 text-xl">{highlight.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
