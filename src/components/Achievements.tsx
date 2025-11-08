import { Trophy, Code2, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: Trophy,
    title: "Flipkart Grid 7.0 Semifinals",
    description: "Reached the semifinals of Flipkart Grid 7.0, showcasing strong problem-solving and competitive programming skills.",
    link: "https://drive.google.com/file/d/1nL9PjcQgMEThE-I4gPL37IaQEw0URhA_/view?usp=sharing"
  },
  {
    icon: Trophy,
    title: "CodeChef Global Rank 44",
    description: "Secured global rank 44 in CodeChef's Starters 128 competition, demonstrating exceptional problem-solving and algorithmic thinking skills.",
    link: "https://www.codechef.com/users/muskanraghav"
  }
];

const profiles = [
  {
    platform: "CodeChef",
    username: "Muskan Raghav",
    link: "https://www.codechef.com/users/muskanraghav"
  },
  {
    platform: "Codeforces",
    username: "muskanraghav",
    link: "https://codeforces.com/profile/muskanraghav"
  },
  {
    platform: "LeetCode",
    username: "muskanraghav",
    link: "https://leetcode.com/u/12muskanraghav/"
  }
];

const Achievements = () => {
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
    <section id="achievements" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Achievements & Programming</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Competitive programming accomplishments and coding profiles.
            </p>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, delay: index * 0.2 }}
              >
                <Card className="bg-card/50 border-2 border-primary/20 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                        <achievement.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl">{achievement.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        View Profile
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Code2 className="h-6 w-6 text-primary" />
                Competitive Programming Profiles
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {profiles.map((profile, index) => (
                  <motion.div
                    key={profile.platform}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, delay: index * 0.2 }}
                  >
                    <Card className="bg-card/50 border-2 border-transparent hover:border-primary transition-colors duration-300 h-full">
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-lg">{profile.platform}</h4>
                          <p className="text-sm text-muted-foreground">{profile.username}</p>
                          <Button variant="outline" size="sm" asChild className="w-full">
                            <a href={profile.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                              <ExternalLink className="h-3 w-3" />
                              Visit Profile
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
