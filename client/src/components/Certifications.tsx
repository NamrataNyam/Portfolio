import { motion } from "framer-motion";
import { ExternalLink, Award, Calendar, Hash, Shield, ExternalLink as ExternalLinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";

const getLevelColor = (level: string) => {
  switch (level) {
    case "Professional": return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800";
    case "Associate": return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800";
    case "Expert": return "bg-red-500/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800";
    case "Specialist": return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800";
    case "Course": return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800";
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
          <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4">Certifications</h2>
          <div className="w-16 h-1 bg-sage mx-auto mb-4"></div>
          {/* <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications and course completions validating expertise in cloud platforms, machine learning, and networking technologies.
          </p> */}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {portfolio.certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group flex justify-center"
            >
              {/* Hexagon Badge */}
              <div className="relative">
                <div className="w-36 h-40 relative group-hover:scale-110 transition-transform duration-300">
                  {/* Hexagon Shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-sage/10 rounded-lg border border-sage/30 group-hover:border-sage/50 transition-all duration-300"></div>
                  
                  {/* Content Container */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    {/* Badge Image or Icon */}
                    {cert.badge ? (
                      <img 
                        src={cert.badge} 
                        alt={cert.title}
                        className="w-16 h-16 object-contain mb-3 transition-all duration-300"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-sage/30 transition-all duration-300">
                        <Award className="h-8 w-8 text-sage" />
                      </div>
                    )}
                    
                    {/* Certificate Name */}
                    <div className="text-center">
                      <h3 className="text-sm font-semibold text-charcoal dark:text-white leading-tight group-hover:text-sage transition-colors duration-300">
                        {cert.title.length > 45 ? cert.title.substring(0, 45) + '...' : cert.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                {/* Hover Info Panel */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-80 bg-background border border-border rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-10">
                  <div className="p-4">
                    <h4 className="font-semibold text-charcoal dark:text-white mb-2">{cert.title}</h4>
                    <p className="text-sage font-medium text-sm mb-2">{cert.issuer}</p>
                    <p className="text-muted-foreground text-sm mb-3">{cert.description}</p>
                    
                    <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                      <Calendar className="h-3 w-3" />
                      <span>{cert.date}</span>
                      {cert.credentialId && (
                        <>
                          <span>•</span>
                          <Hash className="h-3 w-3" />
                          <span className="font-mono">{cert.credentialId}</span>
                        </>
                      )}
                    </div>
                    
                    {cert.link && (
                      <Button 
                        asChild 
                        variant="outline"
                        size="sm"
                        className="w-full border-sage text-sage hover:bg-sage hover:text-white"
                      >
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLinkIcon className="h-3 w-3 mr-2" />
                          View Certificate
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}