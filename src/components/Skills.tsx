import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Palette, Settings, Globe, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 70 },
        { name: "Tailwind CSS", level: 70 },
        { name: "Node.js", level: 65 },
        { name: "Python", level: 65 },
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "MariaDb", level: 80 },
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 40 },
        { name: "Java", level: 85 },
        { name: "SpringBoot", level: 85 },
      ]
    },
    {
      title: "Design & UX",
      icon: Palette,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe Creative Suite", level: 90 },
        { name: "UI/UX Design", level: 90 },
        { name: "StarUML", level: 85 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: Settings,
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 85 },
        { name: "CI/CD", level: 85 }
      ]
    }
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner",

  ];

  const technologies = [
    "React", "Vue.js", "Node.js", "TypeScript", "Python", "PostgreSQL", 
    "MongoDB", "AWS", "Docker", "Figma", "Tailwind CSS", "Next.js"
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-gradient border-border animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="card-gradient border-border animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-accent" />
                Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="transition-smooth hover:bg-primary hover:text-primary-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-border animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Smartphone className="h-6 w-6 text-accent" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {cert}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
 {/* ADD */}
