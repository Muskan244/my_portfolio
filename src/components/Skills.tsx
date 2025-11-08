import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C++", "JavaScript", "SQL"]
  },
  {
    title: "Frameworks",
    skills: ["Spring Boot", "Django", "REST APIs"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQLite", "PostgreSQL"]
  },
  {
    title: "Developer Tools",
    skills: ["Git", "Docker", "MCP Server"]
  },
  {
    title: "Concepts",
    skills: ["OOP", "REST API Design", "DBMS", "OAuth", "LLM Integration"]
  }
];

const Skills = () => {
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/50">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills & Competencies</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My technical toolkit for building robust and scalable applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, delay: index * 0.2 }}
              >
                <Card className="bg-card/50 border-2 border-transparent hover:border-primary transition-colors duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
