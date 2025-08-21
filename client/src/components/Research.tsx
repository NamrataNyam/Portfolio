import { motion } from "framer-motion";
import { Volume2, Microscope, ChevronRight, X, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export function Research() {
  const [selectedResearch, setSelectedResearch] = useState<any>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateButtonStates = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtonStates();
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", updateButtonStates);
  }, [emblaApi, updateButtonStates, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

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
                      <div className="flex flex-wrap gap-2 mb-4">
                        {research.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-sage/10 text-sage font-mono text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {research.details && (
                      <div className="flex justify-end">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedResearch(research)}
                          className="border-sage text-sage hover:bg-sage hover:text-white transition-all duration-200"
                        >
                          View More
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Research Modal */}
      {selectedResearch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-border"
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-charcoal dark:text-white">
                  {selectedResearch.title.includes("—") ? selectedResearch.title.split("—")[1].trim() : selectedResearch.title}
                </h3>
                <p className="text-sage font-medium">
                  {selectedResearch.title.includes("—") ? selectedResearch.title.split("—")[0].trim() : "Research Project"}
                  {selectedResearch.dates && ` • ${selectedResearch.dates}`}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedResearch(null)}
                className="hover:bg-muted-foreground/10"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {/* Summary */}
              <div className="mb-6">
                <p className="text-muted-foreground leading-relaxed">
                  {selectedResearch.summary}
                </p>
              </div>

              {/* Tech Stack */}
              {selectedResearch.tech && (
                <div className="mb-6">
                  <h4 className="font-semibold text-charcoal dark:text-white mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedResearch.tech.map((tech: string) => (
                      <Badge key={tech} variant="secondary" className="bg-sage/10 text-sage font-mono text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Details */}
              {selectedResearch.details && (
                <div className="mb-6">
                  <h4 className="font-semibold text-charcoal dark:text-white mb-3">Methodology & Results</h4>
                  <div className="space-y-3">
                    {selectedResearch.details.map((detail: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Images */}
              {selectedResearch.images && selectedResearch.images.length > 0 && (
                <div>
                  <h4 className="font-semibold text-charcoal dark:text-white mb-4">Visualizations</h4>
                  <div className="relative">
                    <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                      <div className="flex">
                        {selectedResearch.images.map((image: any, index: number) => (
                          <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                            <div className="bg-muted/50 rounded-xl p-6">
                              <div className="aspect-video bg-background rounded-xl flex items-center justify-center border border-border mb-4">
                                <img
                                  src={image.src}
                                  alt={image.alt}
                                  className="w-full h-full object-contain rounded-lg"
                                  onError={(e) => {
                                    console.log('Image failed to load:', image.src);
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                  }}
                                />
                              </div>
                              <p className="text-center text-muted-foreground text-sm">
                                {image.caption}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Carousel Controls */}
                    {selectedResearch.images.length > 1 && (
                      <>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-border"
                          onClick={scrollPrev}
                          disabled={!canScrollPrev}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-border"
                          onClick={scrollNext}
                          disabled={!canScrollNext}
                        >
                          <ChevronRightIcon className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>

                  {/* Carousel Indicators */}
                  {selectedResearch.images.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                      {selectedResearch.images.map((_: any, index: number) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === selectedIndex ? "bg-sage" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                          }`}
                          onClick={() => scrollTo(index)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
