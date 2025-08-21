import { motion } from "framer-motion";
import { MapPin, ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export function Experience() {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});
  const [selectedExperience, setSelectedExperience] = useState<any>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const toggleExpanded = (company: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [company]: !prev[company]
    }));
  };

  const updateButtonStates = useCallback(() => {
    if (emblaApi) {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    updateButtonStates();
  }, [emblaApi, updateButtonStates]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtonStates();
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", updateButtonStates);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", updateButtonStates);
    };
  }, [emblaApi, onSelect, updateButtonStates]);

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

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6">
            {portfolio.experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="border-border hover:shadow-lg hover:scale-[1.01] transition-all duration-300 cursor-default group">
                  <CardContent className="p-6">
                    {/* Header with Logo, Title, and Basic Info */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* Company Logo */}
                      <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                        {exp.logo ? (
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              console.log('Logo failed to load:', exp.logo);
                              console.log('Error details:', e);
                            }}
                            onLoad={() => {
                              console.log('Logo loaded successfully:', exp.logo);
                            }}
                          />
                        ) : (
                          <div className="w-8 h-8 bg-sage/20 rounded-full flex items-center justify-center">
                            <span className="text-sage font-bold text-sm">{exp.company.charAt(0)}</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Job Details */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                          <div>
                            <h3 className="text-xl font-semibold text-charcoal dark:text-white group-hover:text-sage transition-colors duration-300">
                              {exp.role}
                            </h3>
                            <p className="text-sage font-medium text-lg">{exp.company}</p>
                          </div>
                          
                          <div className="text-muted-foreground text-sm flex items-center gap-1">
                            {exp.location && (
                              <>
                                <MapPin className="h-3 w-3" />
                                <span>{exp.location}</span>
                                <span>•</span>
                              </>
                            )}
                            <span>{exp.start}</span>
                            {exp.end && <span>– {exp.end}</span>}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    {exp.tech && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, techIndex) => (
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
                    )}

                    {/* Expandable Description */}
                    {expandedItems[exp.company] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-border pt-4 mt-4"
                      >
                        <ul className="space-y-3 text-muted-foreground mb-6">
                          {exp.bullets.map((bullet, bulletIndex) => (
                            <motion.li 
                              key={bulletIndex} 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.1 * bulletIndex }}
                              className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200"
                            >
                              <motion.div 
                                className="w-1.5 h-1.5 bg-sage rounded-full mt-2 flex-shrink-0 group-hover:scale-150 group-hover:bg-sage-dark transition-all duration-200"
                                whileHover={{ scale: 2 }}
                              ></motion.div>
                              <span dangerouslySetInnerHTML={{ __html: bullet.replace(/~(\d+%)/g, '<strong class="text-sage">$1</strong>').replace(/\*\*(.*?)\*\*/g, '<strong class="text-sage">$1</strong>') }} />
                            </motion.li>
                          ))}
                        </ul>

                        {/* Project Images for Spookfish */}
                        {exp.company === "Spookfish Innovations" && exp.images && (
                          <div className="border-t border-border pt-4">
                            <h4 className="text-lg font-semibold text-charcoal dark:text-white mb-4">Project Results & Visualizations</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {exp.images.map((image: any, index: number) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.4, delay: 0.1 * index }}
                                  className="group cursor-pointer"
                                  onClick={() => {
                                    setSelectedExperience(exp);
                                    setSelectedIndex(index);
                                  }}
                                >
                                  <div className="relative overflow-hidden rounded-lg border border-border hover:shadow-lg transition-all duration-300">
                                    <img
                                      src={image.src}
                                      alt={image.alt}
                                      className="w-full h-48 object-contain bg-gray-50 dark:bg-gray-800"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end">
                                      <div className="w-full p-3 bg-gradient-to-t from-black/70 to-transparent">
                                        <p className="text-white text-sm font-medium">{image.caption}</p>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                            <p className="text-xs text-muted-foreground mt-2 text-center">Click on any image to view full size</p>
                          </div>
                        )}
                      </motion.div>
                    )}

                    {/* More/Less Button */}
                    <div className="flex justify-end mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleExpanded(exp.company)}
                        className="border-sage text-sage hover:bg-sage hover:text-white transition-all duration-200"
                      >
                        {expandedItems[exp.company] ? (
                          <>
                            <ChevronUp className="h-4 w-4 mr-2" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4 mr-2" />
                            More
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Spookfish Results Modal */}
      {selectedExperience && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedExperience(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h3 className="text-2xl font-bold text-charcoal dark:text-white">
                  {selectedExperience.company} - Project Results
                </h3>
                <p className="text-muted-foreground">{selectedExperience.role}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedExperience(null)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Image Carousel */}
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {selectedExperience.images.map((image: any, index: number) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0">
                      <div className="relative">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-96 object-contain bg-gray-50 dark:bg-gray-800"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                          <h4 className="font-semibold text-lg">{image.caption}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              {canScrollPrev && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={scrollPrev}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              )}
              
              {canScrollNext && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={scrollNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Image Indicators */}
            <div className="flex justify-center gap-2 p-4 border-t border-border">
              {selectedExperience.images.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === selectedIndex ? 'bg-sage' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
