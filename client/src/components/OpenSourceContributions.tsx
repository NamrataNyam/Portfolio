import { motion } from "framer-motion";
import { ExternalLink, Download, Eye, ThumbsUp, Database, FileText, Code, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";

const getTypeIcon = (type: string) => {
  switch (type) {
    case "dataset": return Database;
    case "code": return Code;
    case "model": return Brain;
    case "paper": return FileText;
    default: return Database;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "dataset": return "bg-blue-500/10 text-blue-600 dark:text-blue-400";
    case "code": return "bg-green-500/10 text-green-600 dark:text-green-400";
    case "model": return "bg-purple-500/10 text-purple-600 dark:text-purple-400";
    case "paper": return "bg-orange-500/10 text-orange-600 dark:text-orange-400";
    default: return "bg-sage/10 text-sage";
  }
};

const formatNumber = (num: number) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
};

export function OpenSourceContributions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold text-charcoal dark:text-white mb-4">Open Source Contributions</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Contributing to the open source community through datasets, code, and research that enables innovation and discovery.
        </p>
      </div>

      <div className="grid gap-8">
        {portfolio.openSource.map((contribution, index) => {
          const TypeIcon = getTypeIcon(contribution.type);
          const typeColor = getTypeColor(contribution.type);
          
          return (
            <motion.div
              key={contribution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="border-border hover:shadow-xl hover:scale-[1.01] transition-all duration-500 group cursor-default">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className={`w-14 h-14 rounded-xl flex items-center justify-center ${typeColor} group-hover:scale-110 transition-all duration-300`}
                          whileHover={{ rotate: 5 }}
                        >
                          <TypeIcon className="h-7 w-7" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-xl font-semibold text-charcoal dark:text-white">
                              {contribution.title}
                            </h4>
                            <Badge variant="outline" className={`${typeColor} border-current font-mono text-xs`}>
                              {contribution.type}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-sage font-medium">{contribution.platform}</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground text-sm">{contribution.datePublished}</span>
                          </div>
                          
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {contribution.description}
                          </p>

                          {/* Highlights */}
                          <div className="space-y-3">
                            <h5 className="font-medium text-charcoal dark:text-white">Key Features:</h5>
                            <ul className="space-y-2">
                              {contribution.highlights.map((highlight, hIndex) => (
                                <motion.li
                                  key={hIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: 0.1 * hIndex }}
                                  viewport={{ once: true }}
                                  className="flex items-start gap-3 text-muted-foreground text-sm group hover:translate-x-1 transition-transform duration-200"
                                >
                                  <motion.div 
                                    className="w-1.5 h-1.5 bg-sage rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-all duration-200"
                                    whileHover={{ scale: 2 }}
                                  />
                                  <span>{highlight}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech Tags */}
                          <div className="flex flex-wrap gap-2 pt-4">
                            {contribution.tech.map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 * techIndex }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, y: -2 }}
                              >
                                <Badge variant="secondary" className="bg-sage/10 text-sage font-mono text-xs hover:bg-sage hover:text-white transition-all duration-200 cursor-default">
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stats and Action */}
                    <div className="space-y-6">
                      {/* Activity Stats */}
                      <div className="bg-muted/30 rounded-xl p-6">
                        <h5 className="font-semibold text-charcoal dark:text-white mb-4">Activity Overview</h5>
                        <div className="space-y-4">
                          {contribution.stats.downloads && (
                            <motion.div 
                              className="flex items-center justify-between group"
                              whileHover={{ x: 4 }}
                            >
                              <div className="flex items-center gap-2">
                                <Download className="h-4 w-4 text-muted-foreground group-hover:text-sage transition-colors duration-200" />
                                <span className="text-sm text-muted-foreground">Downloads</span>
                              </div>
                              <span className="font-semibold text-sage">{formatNumber(contribution.stats.downloads)}</span>
                            </motion.div>
                          )}
                          
                          {contribution.stats.views && (
                            <motion.div 
                              className="flex items-center justify-between group"
                              whileHover={{ x: 4 }}
                            >
                              <div className="flex items-center gap-2">
                                <Eye className="h-4 w-4 text-muted-foreground group-hover:text-sage transition-colors duration-200" />
                                <span className="text-sm text-muted-foreground">Views</span>
                              </div>
                              <span className="font-semibold text-sage">{formatNumber(contribution.stats.views)}</span>
                            </motion.div>
                          )}
                          
                          {contribution.stats.upvotes && (
                            <motion.div 
                              className="flex items-center justify-between group"
                              whileHover={{ x: 4 }}
                            >
                              <div className="flex items-center gap-2">
                                <ThumbsUp className="h-4 w-4 text-muted-foreground group-hover:text-sage transition-colors duration-200" />
                                <span className="text-sm text-muted-foreground">Upvotes</span>
                              </div>
                              <span className="font-semibold text-sage">{contribution.stats.upvotes}</span>
                            </motion.div>
                          )}
                        </div>
                      </div>

                      {/* Action Button */}
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          asChild 
                          className="w-full bg-sage hover:bg-sage-dark text-white group/btn"
                        >
                          <a href={contribution.link} target="_blank" rel="noopener noreferrer">
                            <motion.div
                              className="mr-2"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </motion.div>
                            View on {contribution.platform}
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}