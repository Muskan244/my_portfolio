import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Online Bidding System",
    description: "Built a full-stack bidding platform enabling real-time buyer-seller transactions with role-based access control (Admin, Seller, Buyer) using Spring Security. Designed and deployed RESTful APIs for bids, user actions, and product listings.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JavaScript"],
    github: "https://github.com/Muskan244/onlineBiddingSystem",
    live: "https://onlinebiddingsystem.netlify.app/",
    date: "Jan. 2025 – Present"
  },
  {
    title: "File Summarizer MCP Server",
    description: "Developed an MCP-compliant server to summarize and analyze documents, audio, and video files. Integrated Apache Tika and Whisper for multi-format text extraction with multilingual support. Published to PyPI with async MCP tools for Claude Desktop LLM integration.",
    technologies: ["Python", "FastMCP", "Apache Tika"],
    github: "https://github.com/Muskan244/File_Summarizer_MCP_Server",
    live: "https://pypi.org/project/file-summarizer-mcp-server/",
    date: "May 2025 - June 2025"
  },
  {
    title: "Open Source Contribution – JabRef",
    description: "Refactored file access logic by modularizing into two specialized action classes, improving code clarity and maintainability. Enhanced handling of single-entry and multi-file scenarios, reducing duplication.",
    technologies: ["Java"],
    github: "https://github.com/JabRef/jabref/pull/13508",
    date: "June 2025 – July 2025"
  },
  {
    title: "Peer-to-Peer Courier Service",
    description: "Built a courier management platform connecting travelers with senders via route-matching APIs. Engineered secure authentication with OAuth, ensuring user data protection. Automated parcel-to-travel matching, improving efficiency of delivery workflows.",
    technologies: ["Python", "Django", "REST APIs"],
    github: "https://github.com/Muskan244/courier1",
    date: "June 2024 – Nov. 2024"
  }
];

const Projects = () => {
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
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A collection of my work showcasing backend development, 
              open source contributions, and problem-solving abilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, delay: index * 0.2 }}
              >
                <Card className="bg-card/50 border-2 border-transparent hover:border-primary transition-all duration-300 hover:shadow-lg h-full">
                  <CardHeader>
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-sm">{project.date}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      {project.live && project.live !== "#" && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Live
                          </a>
                        </Button>
                      )}
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

export default Projects;
