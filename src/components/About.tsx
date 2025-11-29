import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Code, Award, Smartphone } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Expertise in Flutter with Bloc state management and clean architecture',
    },
    {
      icon: Code,
      title: 'Backend Development',
      description: 'Building scalable backend services with Node.js, Express.js, and NestJS',
    },
    {
      icon: Award,
      title: 'Best Practices',
      description: 'Following SOLID principles, design patterns, and clean architecture',
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
              Get to know me
            </span>
            <h2 className="mb-4">About Me</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-xl text-foreground/80 mb-6 leading-relaxed">
              Computer science student at ESI-SBA, passionate about mobile and web development. 
              Experienced in building mobile applications using Flutter and backend services with Node.js and Express.js. 
              Strong problem-solving skills and a keen eye for detail.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Eager to learn new technologies and contribute to innovative projects. 
              I focus on delivering high-quality products that provide excellent user experiences 
              while maintaining clean, efficient code following best practices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto mt-12">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-teal-500/5 border-2 border-primary/10 hover:border-primary/20 transition-all">
                <h3 className="mb-5 flex items-center gap-3 text-xl">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  Education
                </h3>
                <p className="text-foreground/90 mb-2 font-medium text-lg">Ingeniorat in Computer Science</p>
                <p className="text-muted-foreground mb-1">ESI-SBA (Ecole Superieure d'Informatique)</p>
                <p className="text-sm text-primary font-medium">Expected Graduation: 2027</p>
              </div>
              
              <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-500/5 to-cyan-500/5 border-2 border-primary/10 hover:border-primary/20 transition-all">
                <h3 className="mb-5 text-xl">Languages</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-foreground/90 font-medium text-lg">Arabic</p>
                    <p className="text-muted-foreground">Native</p>
                  </div>
                  <div>
                    <p className="text-foreground/90 font-medium text-lg">English</p>
                    <p className="text-muted-foreground">Professional Proficiency</p>
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
