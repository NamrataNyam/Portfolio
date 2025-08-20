import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
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

  if (!project) return null;

  const renderProjectResults = () => {
    if (project.title.includes("Humma.AI")) {
      return (
        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex">
            {/* EQ Comparison Slide */}
            <div className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-muted/50 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-charcoal dark:text-white mb-6 text-center">
                  Empathy Quotient (EQ60) Comparison
                </h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                      <div className="text-4xl font-bold text-muted-foreground mb-2">45</div>
                      <p className="text-muted-foreground">Baseline Model</p>
                      <div className="w-full bg-muted rounded-full h-3 mt-4">
                        <div className="bg-muted-foreground h-3 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-background rounded-xl p-6 shadow-sm border-2 border-sage">
                      <div className="text-4xl font-bold text-sage mb-2">53</div>
                      <p className="text-muted-foreground">Fine-tuned LLaMA 3.1</p>
                      <div className="w-full bg-muted rounded-full h-3 mt-4">
                        <div className="bg-sage h-3 rounded-full" style={{ width: "53%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <div className="bg-sage/10 rounded-xl p-4">
                    <span className="text-sage font-semibold text-lg">+17.8% Improvement</span>
                    <p className="text-muted-foreground text-sm mt-1">in empathy understanding and response quality</p>
                  </div>
                </div>
              </div>
            </div>

            {/* VADER Sentiment Slide */}
            <div className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-muted/50 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-charcoal dark:text-white mb-6 text-center">
                  VADER Sentiment Analysis
                </h4>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <div className="grid grid-cols-3 gap-4 text-center mb-6">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">+0.65</div>
                      <p className="text-muted-foreground text-sm">Positive</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-600">-0.12</div>
                      <p className="text-muted-foreground text-sm">Negative</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-600">0.78</div>
                      <p className="text-muted-foreground text-sm">Compound</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-center">
                    Fine-tuned model demonstrates significantly more positive and empathetic response patterns
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture Slide */}
            <div className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-muted/50 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-charcoal dark:text-white mb-6 text-center">
                  Model Architecture & Deployment
                </h4>
                <div className="space-y-4">
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">P</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">PEFT Fine-tuning</h5>
                      <p className="text-muted-foreground text-sm">LoRA + FSDP for efficient parameter tuning</p>
                    </div>
                  </div>
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">A</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">AWS Deployment</h5>
                      <p className="text-muted-foreground text-sm">Dockerized React app on EC2 with S3 integration</p>
                    </div>
                  </div>
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">R</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">Real-time Inference</h5>
                      <p className="text-muted-foreground text-sm">Custom evaluation with emotion analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Generic project results for other projects
    return (
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {project.images?.map((image: any, index: number) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-muted/50 rounded-xl p-8">
                <div className="aspect-video bg-background rounded-xl flex items-center justify-center border border-border">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">📊</div>
                    <p className="font-medium">{image.caption || `Result ${index + 1}`}</p>
                    <p className="text-sm mt-1">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          )) || (
            <div className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-muted/50 rounded-xl p-8">
                <div className="aspect-video bg-background rounded-xl flex items-center justify-center border border-border">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">📊</div>
                    <p className="font-medium">Project Results</p>
                    <p className="text-sm mt-1">Detailed metrics and visualizations</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const totalSlides = project.title.includes("Humma.AI") ? 3 : (project.images?.length || 1);

  return (
    <Dialog open={!!project} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-charcoal dark:text-white">
                {project.title.split("—")[0].trim()} Results
              </DialogTitle>
              <p className="text-muted-foreground">
                {project.title.includes("—") ? project.title.split("—")[1].trim() : "Project Details"}
              </p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Project Details */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech: string) => (
                <Badge key={tech} variant="secondary" className="bg-sage/10 text-sage font-mono text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="space-y-2">
              {project.details.map((detail: string, index: number) => (
                <p key={index} className="text-muted-foreground">
                  • {detail}
                </p>
              ))}
            </div>
          </div>

          {/* Results Slideshow */}
          <div className="relative">
            {renderProjectResults()}

            {/* Carousel Controls */}
            {totalSlides > 1 && (
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
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>

          {/* Carousel Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
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
      </DialogContent>
    </Dialog>
  );
}
