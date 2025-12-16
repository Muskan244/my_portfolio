import { GraduationCap, Award, Code } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const About = () => {
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
    <section id="about" className="py-20 px-4 bg-secondary/50">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate software engineer with a strong foundation in backend development 
              and a love for solving complex problems through code.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="bg-card/50 border-2 border-transparent hover:border-primary transition-colors duration-300 h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-muted-foreground">
                    B.Tech in Computer Science and Engineering from Jaypee University of Engineering 
                    and Technology, Guna, MP with a CGPA of 8.3/10.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.2 }}>
              <Card className="bg-card/50 border-2 border-transparent hover:border-primary transition-colors duration-300 h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Development</h3>
                  <p className="text-muted-foreground">
                    Experienced in building backend applications using Spring Boot and Django, with strong proficiency in relational databases. Also familiar with React for basic frontend development.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.4 }}>
              <Card className="bg-card/50 border-2 border-transparent hover:border-primary transition-colors duration-300 h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Achievements</h3>
                  <p className="text-muted-foreground">
                    Reached the Semifinals of Flipkart Grid 7.0, demonstrating strong problem-solving and competitive programming skills.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
