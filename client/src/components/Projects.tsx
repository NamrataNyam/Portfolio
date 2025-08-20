import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, BarChart3 } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectModal } from "./ProjectModal";
import { portfolio } from "@/data/portfolio";
import { useCallback, useEffect } from "react";

export function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateButtonStates = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtonStates();
    emblaApi.on("select", updateButtonStates);
    emblaApi.on("reInit", updateButtonStates);
  }, [emblaApi, updateButtonStates]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const featuredProjects = portfolio.projects.filter(p => p.featured);

  return (
    <>
      <section id="projects" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-sage mx-auto"></div>
          </motion.div>

          {/* Projects Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl" ref={emblaRef}>
              <div className="flex">
                {featuredProjects.map((project, index) => (
                  <div key={project.title} className="flex-[0_0_100%] min-w-0 px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <Card className="border-border">
                        <CardContent className="p-8">
                          <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                              <div className="flex items-center gap-3 mb-4">
                                <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                                  <BarChart3 className="text-sage h-6 w-6" />
                                </div>
                                <div>
                                  <h3 className="text-2xl font-semibold text-charcoal dark:text-white">
                                    {project.title.split("—")[0].trim()}
                                  </h3>
                                  <p className="text-muted-foreground">
                                    {project.title.includes("—") ? project.title.split("—")[1].trim() : project.oneLiner}
                                  </p>
                                </div>
                              </div>

                              <p className="text-muted-foreground mb-6 leading-relaxed">
                                {project.oneLiner}
                              </p>

                              <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.slice(0, 4).map((tech) => (
                                  <Badge key={tech} variant="secondary" className="bg-sage/10 text-sage font-mono text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>

                              <Button
                                onClick={() => setSelectedProject(project)}
                                className="bg-sage hover:bg-sage-dark text-white"
                              >
                                <BarChart3 className="mr-2 h-4 w-4" />
                                View Results
                              </Button>
                            </div>

                            <div className="relative">
                              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                                <div className="text-center text-muted-foreground">
                                  <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                  <p className="text-sm">Project Visualization</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
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
          </div>

          {/* All Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-semibold text-charcoal dark:text-white mb-8 text-center">All Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolio.projects.map((project, index) => (
                <Card key={project.title} className="border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-charcoal dark:text-white mb-2">
                      {project.title.split("—")[0].trim()}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">{project.oneLiner}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-sage/10 text-sage font-mono text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                      className="border-sage text-sage hover:bg-sage hover:text-white"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
