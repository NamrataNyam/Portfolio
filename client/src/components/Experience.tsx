import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolio } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4">Professional Experience</h2>
          <div className="w-16 h-1 bg-sage mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-sage"></div>

            {portfolio.experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="relative mb-12 ml-12 md:ml-0"
              >
                <Card className={`relative shadow-sm border-border ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                  <div className="absolute -left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-sage rounded-full border-4 border-background"></div>
                  
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-charcoal dark:text-white">{exp.role}</h3>
                        <p className="text-sage font-medium">{exp.company}</p>
                      </div>
                      <div className="text-muted-foreground mt-2 md:mt-0 text-sm flex items-center gap-1">
                        {exp.location && (
                          <>
                            <MapPin className="h-3 w-3" />
                            {exp.location} • 
                          </>
                        )}
                        {exp.start} {exp.end && `– ${exp.end}`}
                      </div>
                    </div>

                    <ul className="space-y-3 text-muted-foreground mb-6">
                      {exp.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                          <span dangerouslySetInnerHTML={{ __html: bullet.replace(/~(\d+%)/g, '<strong class="text-sage">$1</strong>').replace(/\*\*(.*?)\*\*/g, '<strong class="text-sage">$1</strong>') }} />
                        </li>
                      ))}
                    </ul>

                    {exp.tech && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-sage/10 text-sage font-mono text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
