import { motion } from "framer-motion";
import { Volume2, Microscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolio } from "@/data/portfolio";

export function Research() {
  const getIcon = (title: string) => {
    if (title.toLowerCase().includes("audio")) return Volume2;
    return Microscope;
  };

  return (
    <section id="research" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4">Research</h2>
          <div className="w-16 h-1 bg-sage mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {portfolio.research.map((research, index) => {
            const IconComponent = getIcon(research.title);
            
            return (
              <motion.div
                key={research.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-sage h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-2">
                          {research.title.includes("—") ? research.title.split("—")[1].trim() : research.title}
                        </h3>
                        <p className="text-sage font-medium text-sm">
                          {research.title.includes("—") ? research.title.split("—")[0].trim() : "Research Project"}
                          {research.dates && ` • ${research.dates}`}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {research.summary}
                    </p>

                    {research.tech && (
                      <div className="flex flex-wrap gap-2">
                        {research.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-sage/10 text-sage font-mono text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
