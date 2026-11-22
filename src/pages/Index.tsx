import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-8 px-6 border-t border-border bg-muted/10">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Bakwowi Bryan.
          </p>

        </div>
      </footer>
    </div>
  );
};

export default Index;
//
