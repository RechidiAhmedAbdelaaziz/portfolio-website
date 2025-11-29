import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { DeviceMockup } from './DeviceMockup';
interface Project {
  title: string;
  role: string;
  description: string;
  images?: string[];
  tags: string[];
  deviceType: 'mobile' | 'desktop';
  liveUrl: string | null;
  githubUrl: string | null;
}

export function Projects() {
  const projects : Project[] = [
    {
      title: 'FenneQCM',
      role: 'Freelance - Mobile and Backend Developer',
      description: 'Mobile application for medical students to prepare for exams through multiple-choice questions (QCM, QCU, Clinical Cases) and exam simulations. Includes user app with Flutter and admin panel with Flutter Web for managing content.',
      // images: [
      //   '/images/projects/fenneqcm/screenshot-1.png',
      //   '/images/projects/fenneqcm/screenshot-2.png',
      //   '/images/projects/fenneqcm/screenshot-3.png',
      // ],
      tags: ['Flutter', 'Dart', 'NestJS', 'TypeScript', 'MongoDB', 'Docker'],
      deviceType: 'mobile' as const,
      liveUrl: 'https://play.google.com/store/apps/details?id=top.fenneqcm.app',
      githubUrl: null,
    },
    {
      title: 'HAKIMI',
      role: 'Startup Project - Mobile Developer',
      description: 'Social media platform for healthcare professionals and patients to connect, share information, and access healthcare services. Features Q&A forum, appointment booking, telemedicine consultations, health articles, job board, and real-time messaging.',
      // images: [
      //   '/images/projects/hakimi/screenshot-1.png',
      //   '/images/projects/hakimi/screenshot-2.png',
      //   '/images/projects/hakimi/screenshot-3.png',
      // ],
      tags: ['Flutter', 'Dart', 'Socket.io', 'REST API'],
      deviceType: 'mobile' as const,
      liveUrl: null,
      githubUrl: null,
    },
    {
      title: 'EasyHome',
      role: 'ESI-SBA Multidisciplinary Project - Backend Developer',
      description: 'Mobile application connecting users with local service providers for home maintenance and repairs. Features user authentication with roles, service provider search, appointment booking, ratings and reviews, and provider portfolios.',
      // images: [
      //   '/images/projects/easyhome/screenshot-1.png',
      //   '/images/projects/easyhome/screenshot-2.png',
      //   '/images/projects/easyhome/screenshot-3.png',
      // ],
      tags: ['Node.js', 'Express.js', 'MongoDB'],
      deviceType: 'mobile' as const,
      liveUrl: null,
      githubUrl: null,
    },
    {
      title: 'DIRASSATY',
      role: 'ESI-SBA Multidisciplinary Project - Flutter Web Developer',
      description: 'Web application for managing private school operations including student registration, class schedules, grades, assignments, teacher and parent portals, and admin dashboard for school management.',
      // images: [
      //   '/images/projects/dirassaty/screenshot-1.png',
      //   '/images/projects/dirassaty/screenshot-2.png',
      //   '/images/projects/dirassaty/screenshot-3.png',
      // ],
      tags: ['Flutter Web', 'Dart'],
      deviceType: 'desktop' as const,
      liveUrl: null,
      githubUrl: null,
    },
    {
      title: 'Portfolio Website',
      role: 'Personal Project - Fullstack Developer',
      description: 'Personal portfolio website showcasing projects, skills, and experience. Features responsive design for all devices, project showcase with descriptions and links, skills section, and contact form.',
      // images: [
      //   '/images/projects/portfolio/screenshot-1.png',
      //   '/images/projects/portfolio/screenshot-2.png',
      //   '/images/projects/portfolio/screenshot-3.png',
      // ],
      tags: ['React.js', 'TypeScript', 'Tailwind CSS'],
      deviceType: 'desktop' as const,
      liveUrl: 'https://rechidiahmed.me',
      githubUrl: 'https://github.com/RechidiAhmedAbdelaaziz/portfolio-website',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-purple-500/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              My work
            </span>
            <h2 className="mb-4">Featured Projects</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: {
    title: string;
    role: string;
    description: string;
    images?: string[];
    tags: string[];
    deviceType: 'mobile' | 'desktop';
    liveUrl: string | null;
    githubUrl: string | null;
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasImages = project.images && project.images.length > 0;

  const nextImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const prevImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover:shadow-2xl hover:shadow-primary/10 transition-all hover:scale-[1.03] border-2 border-primary/10 hover:border-primary/30 group overflow-hidden">
        {hasImages && (
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            
            {/* Device Mockup with Image */}
            <div className="relative z-20">
              <DeviceMockup
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                type={project.deviceType}
                className="transition-transform group-hover:scale-105 duration-500"
              />
            </div>
            
            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
            
            {/* Image Indicators */}
            {project.images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {project.images.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={() => setCurrentImageIndex(imgIndex)}
                    className={`h-2 rounded-full transition-all ${
                      imgIndex === currentImageIndex
                        ? 'w-8 bg-cyan-500'
                        : 'w-2 bg-gray-400 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${imgIndex + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
        
        <CardHeader className="pb-4">
          <CardTitle className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent text-2xl mb-2">
            {project.title}
          </CardTitle>
          <div className="text-sm text-primary font-medium mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
            {project.role}
          </div>
          <CardDescription className="leading-relaxed text-base">{project.description}</CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow pt-0">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <Badge key={tagIndex} variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 transition-colors px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex gap-3 pt-4">
          {project.liveUrl && (
            <Button variant="default" size="sm" asChild className="flex-1 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 shadow-md hover:shadow-lg transition-all">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild className="flex-1 border-2 hover:bg-primary/5">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <div className="flex-1 text-center text-sm text-muted-foreground py-3 px-4 bg-muted/50 rounded-md font-medium">
              🔒 Private Project
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
