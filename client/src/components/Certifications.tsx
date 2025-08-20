import { motion } from "framer-motion";
import { ExternalLink, Award, Calendar, Hash, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";

const getLevelColor = (level: string) => {
  switch (level) {
    case "Professional": return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800";
    case "Associate": return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800";
    case "Expert": return "bg-red-500/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800";
    case "Specialist": return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800";
    default: return "bg-turquoise/10 text-turquoise border-turquoise/20";
  }
};

const getIssuerIcon = (issuer: string) => {
  if (issuer.includes("AWS") || issuer.includes("Amazon")) return "🟠";
  if (issuer.includes("Microsoft") || issuer.includes("Azure")) return "🔵";
  if (issuer.includes("Google")) return "🔴";
  if (issuer.includes("Snowflake")) return "❄️";
  return "🏆";
};

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4">Professional Certifications</h2>
          <div className="w-16 h-1 bg-turquoise mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in cloud platforms, data engineering, and machine learning technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolio.certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group cursor-default h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div 
                      className="text-3xl select-none group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {getIssuerIcon(cert.issuer)}
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-charcoal dark:text-white group-hover:text-turquoise transition-colors duration-300">
                          {cert.title}
                        </h3>
                        <Badge variant="outline" className={`${getLevelColor(cert.level)} text-xs font-mono shrink-0`}>
                          {cert.level}
                        </Badge>
                      </div>
                      
                      <p className="text-turquoise font-medium mb-1">{cert.issuer}</p>
                      
                      <div className="flex items-center gap-4 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{cert.date}</span>
                        </div>
                        {cert.credentialId && (
                          <div className="flex items-center gap-1">
                            <Hash className="h-3 w-3" />
                            <span className="font-mono text-xs">{cert.credentialId}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-turquoise" />
                      <span className="text-sm font-medium text-charcoal dark:text-white">Validated Skills</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 * skillIndex }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, y: -1 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="bg-turquoise/10 text-turquoise font-mono text-xs hover:bg-turquoise hover:text-white transition-all duration-200 cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  {cert.link && (
                    <motion.div 
                      className="mt-6 pt-4 border-t border-border"
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        asChild 
                        variant="outline"
                        size="sm"
                        className="w-full border-turquoise text-turquoise hover:bg-turquoise hover:text-white group/btn"
                      >
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          <motion.div
                            className="mr-2"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <ExternalLink className="h-3 w-3" />
                          </motion.div>
                          Learn More
                        </a>
                      </Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-muted/30 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-turquoise mb-1">{portfolio.certifications.length}</div>
                <div className="text-muted-foreground text-sm">Certifications</div>
              </motion.div>
              
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-turquoise mb-1">
                  {new Set(portfolio.certifications.map(c => c.issuer)).size}
                </div>
                <div className="text-muted-foreground text-sm">Vendors</div>
              </motion.div>
              
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-turquoise mb-1">
                  {portfolio.certifications.filter(c => c.level === "Professional").length}
                </div>
                <div className="text-muted-foreground text-sm">Professional</div>
              </motion.div>
              
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-turquoise mb-1">
                  {new Set(portfolio.certifications.flatMap(c => c.skills)).size}
                </div>
                <div className="text-muted-foreground text-sm">Skills</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}