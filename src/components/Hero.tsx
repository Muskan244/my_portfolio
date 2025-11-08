import { Github, Linkedin, Mail, Phone, Code2 } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex-1 space-y-6 text-center md:text-left"
            variants={itemVariants}
          >
            <div className="space-y-2">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                variants={itemVariants}
              >
                Muskan Raghav
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground font-medium"
                variants={itemVariants}
              >
                Software Engineer
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground"
                variants={itemVariants}
              >
                Backend Developer | Open Source Contributor
              </motion.p>
            </div>
            
            <motion.p
              className="text-base text-muted-foreground max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              B.Tech CSE at Jaypee University | Passionate about building scalable web applications 
              and contributing to open source. Competitive programmer with global rank 44 on CodeChef.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start pt-4"
              variants={itemVariants}
            >
              <Button 
                onClick={() => scrollToSection("contact")}
                className="gap-2"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="gap-2"
              >
                <Code2 className="h-4 w-4" />
                View Projects
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center md:justify-start pt-4"
              variants={itemVariants}
            >
              <a 
                href="https://github.com/Muskan244" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/muskan-raghav-10511a320/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:raghav12muskan@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="tel:7004466065"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            variants={itemVariants}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-50" />
              <img 
                src={profileImage} 
                alt="Muskan Raghav"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-background shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
