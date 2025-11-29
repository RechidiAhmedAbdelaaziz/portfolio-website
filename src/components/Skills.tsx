import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Smartphone, 
  Globe, 
  Server, 
  Database, 
  Wrench, 
  BookOpen,
  Blocks,
  Code2,
  Layers,
  FileCode,
  Palette,
  Braces,
  Link,
  Cpu,
  GitBranch,
  Container,
  Send,
  Flame,
  Monitor,
  Package,
  Settings
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'Flutter', icon: Blocks },
        { name: 'Dart', icon: Code2 },
        { name: 'Bloc State Management', icon: Layers },
        { name: 'Flutter Web', icon: Globe },
        { name: 'Clean Architecture', icon: Package },
      ],
    },
    {
      category: 'Web Development',
      icon: Globe,
      skills: [
        { name: 'React.js', icon: Braces },
        { name: 'TypeScript', icon: FileCode },
        { name: 'JavaScript', icon: Code2 },
        { name: 'Tailwind CSS', icon: Palette },
        { name: 'HTML5', icon: FileCode },
        { name: 'CSS3', icon: Palette },
      ],
    },
    {
      category: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', icon: Server },
        { name: 'Express.js', icon: Cpu },
        { name: 'NestJS', icon: Layers },
        { name: 'RESTful APIs', icon: Link },
        { name: 'Socket.io', icon: Send },
        { name: 'GraphQL', icon: Braces },
      ],
    },
    {
      category: 'Database',
      icon: Database,
      skills: [
        { name: 'MongoDB', icon: Database },
        { name: 'MySQL', icon: Database },
        { name: 'Prisma', icon: Layers },
      ],
    },
    {
      category: 'Tools & Practices',
      icon: Wrench,
      skills: [
        { name: 'Git', icon: GitBranch },
        { name: 'GitHub', icon: GitBranch },
        { name: 'Docker', icon: Container },
        { name: 'Postman', icon: Send },
        { name: 'Firebase', icon: Flame },
        { name: 'Linux', icon: Monitor },
        { name: 'CI/CD', icon: Settings },
      ],
    },
    {
      category: 'Software Engineering',
      icon: BookOpen,
      skills: [
        { name: 'Clean Architecture', icon: Package },
        { name: 'SOLID Principles', icon: Layers },
        { name: 'Design Patterns', icon: Blocks },
        { name: 'Agile Methodologies', icon: Settings },
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
