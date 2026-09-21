import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
// @ts-ignore
import ecommerceImg from "@/assets/project-ecommerce.jpg";
// @ts-ignore
import microbloggingImg from "@/assets/Microblogging.png";
// @ts-ignore
import bankingImg from "@/assets/project-banking-dashboard.png";
// @ts-ignore
import revenueLensImg from "@/assets/project-revenue-lens.png";

const Projects = () => {
  const projects = [
    {
      rank: 1,
      title: "E-Commerce Platform",
      description: "A responsive React e-commerce application with Supabase data services, Stripe integration, and an admin-focused shopping experience.",
      image: ecommerceImg,
      technologies: ["React", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
      liveUrl: "https://e-com.bakwowi.dev/",
      githubUrl: "https://github.com/B6800/E-Commerce",
      featured: true
    },
    {
      rank: 4,
      title: "Banking System",
      description: "A C-based banking application for account management, transfers, balance sorting, and persistent file-based data storage.",
      image: bankingImg,
      technologies: ["C", "File I/O", "Data Persistence", "Algorithms"],
      liveUrl: null,
      demoLabel: "No live demo",
      githubUrl: "https://github.com/B6800/Banking-System",
      featured: true
    },
    {
      rank: 3,
      title: "Microblogging Platform",
      description: "Completed full-stack platform for posts, comments, likes, and profiles, with Docker, GitHub Actions CI/CD, AWS EC2, Nginx, and MariaDB deployment architecture.",
      image: microbloggingImg,
      technologies: ["React", "Spring Boot", "MariaDB", "Docker", "GitHub Actions", "AWS EC2", "Nginx"],
      liveUrl: null,
      demoLabel: "Deployment paused",
      githubUrl: "https://github.com/B6800/Blogging",
      featured: true
    },
    {
      rank: 2,
      title: "Revenue Lens",
      description: "A retail intelligence dashboard that turns transaction data into revenue insights, product performance metrics, customer retention signals, and anomaly review queues.",
      image: revenueLensImg,
      technologies: ["Python", "FastAPI", "pandas", "scikit-learn", "Vercel"],
      liveUrl: null,
      demoLabel: "Dashboard link pending",
      githubUrl: "https://github.com/B6800/revenue-lens",
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
          {[...projects].sort((a, b) => a.rank - b.rank).map((project, index) => (
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
                        {project.demoLabel ?? "Live demo unavailable"}
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
          <a href="https://github.com/B6800?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="transition-bounce hover:scale-105">
              View All Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
