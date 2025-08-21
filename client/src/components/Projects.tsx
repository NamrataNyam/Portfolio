import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, BarChart3 } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectModal } from "./ProjectModal";
import { OpenSourceContributions } from "./OpenSourceContributions";
import { portfolio } from "@/data/portfolio";
import { useCallback, useEffect } from "react";

export function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    skipSnaps: false,
    containScroll: "trimSnaps"
  });
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectImageIndex, setProjectImageIndex] = useState(0);

  // Auto-advance slideshow for all projects
  const [isPaused, setIsPaused] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setProjectImageIndex((prev) => {
        // Auto-advance for the current project
        const currentProject = featuredProjects[currentIndex];
        if (currentProject && currentProject.images && currentProject.images.length > 1) {
          return (prev + 1) % currentProject.images.length;
        }
        return prev;
      });
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const updateButtonStates = useCallback(() => {
    if (!emblaApi) return;
    const newIndex = emblaApi.selectedScrollSnap();
    setCurrentIndex(newIndex);
    // Reset image index when switching projects
    setProjectImageIndex(0);
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
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  // Auto-advance project carousel
  useEffect(() => {
    if (isCarouselPaused || selectedProject) return; // Pause when modal is open
    
    const carouselInterval = setInterval(() => {
      if (emblaApi && featuredProjects.length > 1) {
        emblaApi.scrollNext();
      }
    }, 4000); // Change project every 4 seconds

    return () => clearInterval(carouselInterval);
  }, [emblaApi, featuredProjects.length, isCarouselPaused, selectedProject]);

  return (
    <>
      <section id="projects" className="py-20 bg-muted/30">
        <div className="max-w-[95vw] mx-auto px-4 sm:px-6 lg:px-8">
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
                      <Card 
                        className="border-border hover:shadow-xl hover:scale-[1.01] transition-all duration-500 group cursor-default"
                        onMouseEnter={() => setIsCarouselPaused(true)}
                        onMouseLeave={() => setIsCarouselPaused(false)}
                      >
                        <CardContent className="p-8">
                          <div className="space-y-8">
                            {/* Title Section */}
                            <div className="text-center">
                              <div className="flex items-center justify-center gap-3 mb-4">
                                <motion.div 
                                  className="bg-sage/10 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-sage group-hover:scale-110 transition-all duration-300"
                                  whileHover={{ rotate: 10 }}
                                >
                                  <BarChart3 className="text-sage group-hover:text-white h-8 w-8 transition-colors duration-300" />
                                </motion.div>
                                <div>
                                  <h3 className="text-3xl font-semibold text-charcoal dark:text-white">
                                    {project.title.split("—")[0].trim()}
                                  </h3>
                                  <p className="text-lg text-muted-foreground">
                                    {project.title.includes("—") ? project.title.split("—")[1].trim() : project.oneLiner}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Centered Slideshow Section */}
                            <div className="flex justify-center">
                              <div className="w-full max-w-7xl relative">
                                {project.images && project.images.length > 0 ? (
                                  <div 
                                    className="aspect-[21/9] bg-muted rounded-xl overflow-hidden relative group"
                                    onMouseEnter={() => setIsPaused(true)}
                                    onMouseLeave={() => setIsPaused(false)}
                                  >
                                    <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-0 loading-indicator">
                                      <div className="text-center text-muted-foreground">
                                        <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-50" />
                                        <p className="text-sm">Loading image...</p>
                                      </div>
                                    </div>
                                    <img 
                                      key={`${project.title}-${projectImageIndex}`}
                                      src={project.images[projectImageIndex]?.src} 
                                      alt={project.images[projectImageIndex]?.alt || "Project visualization"}
                                      className="w-full h-full object-contain transition-all duration-700 ease-in-out group-hover:scale-105 relative z-10"
                                      onError={(e) => {
                                        console.log('Image failed to load:', project.images[projectImageIndex]?.src);
                                        console.log('Error details:', e);
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        // Show a fallback message
                                        const container = target.parentElement;
                                        if (container) {
                                          container.innerHTML = `
                                            <div class="flex items-center justify-center h-full">
                                              <div class="text-center text-muted-foreground">
                                                <div class="text-4xl mb-2">📊</div>
                                                <p class="font-medium">Stock Prediction Chart</p>
                                                <p class="text-sm mt-1">Predicted Market Direction vs Close Price</p>
                                              </div>
                                            </div>
                                          `;
                                        }
                                      }}
                                      onLoad={(e) => {
                                        console.log('Image loaded successfully:', project.images[projectImageIndex]?.src);
                                        const target = e.target as HTMLImageElement;
                                        target.style.opacity = '1';
                                        // Hide the loading indicator
                                        const loadingIndicator = target.parentElement?.querySelector('.loading-indicator');
                                        if (loadingIndicator) {
                                          (loadingIndicator as HTMLElement).style.display = 'none';
                                        }
                                      }}
                                      style={{ opacity: 0 }}
                                    />
                                    
                                    {/* Slideshow Navigation Controls */}
                                    {project.images.length > 1 && (
                                      <>
                                        <Button
                                          variant="outline"
                                          size="icon"
                                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-sage hover:text-white hover:border-sage border-border shadow-lg transition-all duration-300 z-10"
                                          onClick={() => setProjectImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))}
                                        >
                                          <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                        
                                        <Button
                                          variant="outline"
                                          size="icon"
                                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-sage hover:text-white hover:border-sage border-border shadow-lg transition-all duration-300 z-10"
                                          onClick={() => setProjectImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))}
                                        >
                                          <ChevronRight className="h-4 w-4" />
                                        </Button>
                                        
                                        {/* Image Counter */}
                                        <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                                          {projectImageIndex + 1} / {project.images.length}
                                        </div>
                                        
                                        {/* Image Indicators */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                          {project.images.map((_, index) => (
                                            <button
                                              key={index}
                                              onClick={() => setProjectImageIndex(index)}
                                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                index === projectImageIndex 
                                                  ? 'bg-sage scale-125' 
                                                  : 'bg-white/50 hover:bg-white/75'
                                              }`}
                                              aria-label={`Go to image ${index + 1}`}
                                            />
                                          ))}
                                        </div>
                                      </>
                                    )}
                                  </div>
                                ) : (
                                  <div className="aspect-[21/9] bg-muted rounded-xl flex items-center justify-center">
                                    <div className="text-center text-muted-foreground">
                                      <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                                      <p className="text-lg">Project Visualization</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Content Section Below Slideshow */}
                            <div className="grid lg:grid-cols-2 gap-8 items-start">
                              <div>
                                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                                  {project.oneLiner}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                                    <motion.div
                                      key={tech}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      transition={{ duration: 0.3, delay: 0.1 * techIndex }}
                                      viewport={{ once: true }}
                                      whileHover={{ scale: 1.1, y: -2 }}
                                    >
                                      <Badge variant="secondary" className="bg-sage/10 text-sage font-mono text-sm hover:bg-sage hover:text-white transition-all duration-200 cursor-default">
                                        {tech}
                                      </Badge>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>

                              <div className="flex justify-center lg:justify-end">
                                                              <div className="flex gap-3">
                                {project.links?.demo && (
                                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                      variant="outline"
                                      onClick={() => window.open(project.links.demo, '_blank')}
                                      className="border-sage text-sage hover:bg-sage hover:text-white group/btn text-lg px-6 py-3"
                                    >
                                      <motion.div
                                        className="mr-2"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                      >
                                        <BarChart3 className="h-5 w-5" />
                                      </motion.div>
                                      Product
                                    </Button>
                                  </motion.div>
                                )}
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                  <Button
                                    onClick={() => setSelectedProject(project)}
                                    className="bg-sage hover:bg-sage-dark text-white group/btn text-lg px-8 py-3"
                                  >
                                    <motion.div
                                      className="mr-2"
                                      whileHover={{ rotate: 360 }}
                                      transition={{ duration: 0.6 }}
                                    >
                                      <BarChart3 className="h-5 w-5" />
                                    </motion.div>
                                    View Results
                                  </Button>
                                </motion.div>
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

            {/* Project Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-sage scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            {/* Carousel Controls */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-sage hover:text-white hover:border-sage border-border shadow-lg transition-all duration-300 z-10"
              onClick={scrollPrev}
              disabled={false}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-sage hover:text-white hover:border-sage border-border shadow-lg transition-all duration-300 z-10"
              onClick={scrollNext}
              disabled={false}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Open Source Contributions */}
          <OpenSourceContributions />
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
