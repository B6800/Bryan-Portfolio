import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import cvUrl from "@/CV_Updated___.pdf";
import profileUrl from "@/Profpic.jpeg";

const Hero = () => {
  return (
      <section id="home" className="min-h-screen flex items-center justify-center relative hero-gradient">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">

            {/* Image: on top for mobile, on the right for desktop */}
            <div className="flex justify-center md:justify-end md:order-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl" />
                <img
                    src={profileUrl}
                    alt="Portrait of Bakwowi Bryan"
                    className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/40 shadow-2xl"
                />
              </div>
            </div>

            {/* Text */}
            <div className="text-center md:text-left md:order-1">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-primary">
                Bakwowi Bryan
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Full Stack Developer & UI/UX Designer
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">
                I craft beautiful, functional digital experiences that solve real problems
                and delight users. Welcome to my creative journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12">
                <a href="mailto:bryanbakwowi@gmail.com">
                  <Button variant="default" size="lg" className="glow-primary">
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </Button>
                </a>
                <a href={cvUrl} download="Bakwowi-Bryan-CV.pdf">
                  <Button variant="outline" size="lg" className="transition-bounce hover:scale-105">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Button>
                </a>
              </div>

              <div className="flex justify-center md:justify-start space-x-6">
                <a
                    href="https://github.com/B6800"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110 transform"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                    href="https://www.linkedin.com/in/bakwowi-bryan-77284b2b7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-smooth hover:scale-110 transform"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </section>
  );
};

export default Hero;