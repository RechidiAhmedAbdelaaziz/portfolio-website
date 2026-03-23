import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Smartphone,
  Server,
  Database,
  Shield,
  Blocks,
  Code2,
  Layers,
  FileCode,
  Link,
  Cpu,
  GitBranch,
  Container,
  Send,
  Flame,
  Monitor,
  Package,
  Settings,
  Lock,
  Search,
  Key
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend (Mobile)',
      icon: Smartphone,
      skills: [
        { name: 'Flutter', icon: Blocks },
        { name: 'Dart', icon: Code2 },
        { name: 'BLoC/Cubit', icon: Layers },
        { name: 'Clean Architecture', icon: Package },
        { name: 'Retrofit/Dio', icon: Link },
        { name: 'Freezed/Equatable', icon: Settings },
        { name: 'FL Chart/Lottie', icon: FileCode },
      ],
    },
    {
      category: 'Backend Engineering',
      icon: Server,
      skills: [
        { name: 'NestJS', icon: Layers },
        { name: 'Node.js', icon: Server },
        { name: 'Express', icon: Cpu },
        { name: 'Identity (OAuth2.0)', icon: Key },
        { name: 'JWT Architecture', icon: Lock },
        { name: 'RBAC', icon: Settings },
      ],
    },
    {
      category: 'Security Expertise',
      icon: Shield,
      skills: [
        { name: 'OWASP Top 10', icon: Shield },
        { name: 'Network Security', icon: Monitor },
        { name: 'Ethical Hacking', icon: Lock },
        { name: 'Data Sanitization', icon: Search },
        { name: 'MFA Systems', icon: Key },
        { name: 'Secure Storage', icon: Lock },
        { name: 'Zero-Trust Architecture', icon: Shield },
        { name: 'JWT Security/Rotation', icon: Lock },
        { name: 'NoSQL/XSS Sanitization', icon: Search },
        { name: 'Secure Build Pipelines', icon: Settings },
      ],
    },
    {
      category: 'Infrastructure',
      icon: Container,
      skills: [
        { name: 'Docker', icon: Container },
        { name: 'Docker Compose', icon: Layers },
        { name: 'Firebase', icon: Flame },
        { name: 'Cloudinary', icon: Link },
        { name: 'CI/CD', icon: Settings },
        { name: 'Linux', icon: Monitor },
      ],
    },
    {
      category: 'Persistence',
      icon: Database,
      skills: [
        { name: 'MongoDB/Mongoose', icon: Database },
        { name: 'NoSQL Indexing', icon: Search },
        { name: 'SQL', icon: Database },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-500/5 via-background to-cyan-500/5"></div>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              My expertise
            </span>
            <h2 className="mb-4">Technical Skills</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-lg">
                        <category.icon className="h-5 w-5 text-primary" />
                      </div>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 hover:from-cyan-500/20 hover:to-teal-500/20 transition-all border-primary/20 px-3.5 py-1.5 text-sm font-medium hover:scale-105 flex items-center gap-1.5"
                        >
                          <skill.icon className="h-3.5 w-3.5" />
                          {skill.name}
                        </Badge>
                      ))}
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
