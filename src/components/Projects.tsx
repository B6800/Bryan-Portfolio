import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
// @ts-ignore
import ecommerceImg from "@/assets/project-ecommerce.jpg";
// @ts-ignore
import taskManagerImg from "@/assets/project-taskmanager.jpg";
// @ts-ignore
import microbloggingImg from "@/assets/Microblogging.png";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Springboot, and Stripe integration. Features include real-time inventory, admin dashboard, and mobile-responsive design.",
      image: ecommerceImg,
      technologies: ["React", "Springboot", "MariaDb", "Stripe", "Superbase","Tailwind CSS"],
      liveUrl: "https://e-com.bakwowi.dev/",
      githubUrl: "https://github.com/B6800/E-Commerce.git",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: taskManagerImg,
      technologies: ["Vue.js", "Superbase", "Vuetify", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Microblogging  App",
      description:  "A full-stack microblogging platform that allows users to create posts, interact through comments and likes, and manage profiles. Built with React and Spring Boot for a seamless, responsive experience.",
      image: microbloggingImg,
      technologies: ["SpringBoot", "React"],
      liveUrl: "#",
      githubUrl: "https://github.com/B6800/Blogging.git",
      featured: true
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating various technologies and design approaches
            to solve different challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`card-gradient border-border transition-smooth hover:glow-primary animate-fade-in-up group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </div>
                  {project.featured && (
                    <Badge variant="secondary" className="text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && project.liveUrl !== "#" ? (
                      <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                      >
                        <Button size="sm" variant="default" className="w-full">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </a>
                  ) : (
                      <Button size="sm" variant="default" className="flex-1" disabled>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Still in Progress
                      </Button>
                  )}

                  {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                      >
                        <Button size="sm" variant="outline" className="w-full">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="transition-bounce hover:scale-105">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;