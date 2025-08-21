import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Dialog, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

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
            {/* Methodology & Objective Slide */}
            <div className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-muted/50 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-charcoal dark:text-white mb-6 text-center">
                  Methodology & Objective
                </h4>
                <div className="space-y-6">
                  <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                    <h5 className="font-semibold text-charcoal dark:text-white mb-3">Objective</h5>
                    <p className="text-muted-foreground">
                      Enhance LLM empathy and conversational quality for real-world applications such as customer support and personal coaching.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background rounded-xl p-4 border border-border">
                      <h6 className="font-semibold text-charcoal dark:text-white mb-2">Fine-tuning Approach</h6>
                      <p className="text-sm text-muted-foreground">Fine-tuned LLaMA 3.1 (8B) using LoRA + FSDP for efficient parameter updates</p>
                    </div>
                    <div className="bg-background rounded-xl p-4 border border-border">
                      <h6 className="font-semibold text-charcoal dark:text-white mb-2">Prompt Engineering</h6>
                      <p className="text-sm text-muted-foreground">Integrated persona-based prompts to simulate empathetic dialogue</p>
                    </div>
                    <div className="bg-background rounded-xl p-4 border border-border">
                      <h6 className="font-semibold text-charcoal dark:text-white mb-2">Evaluation Framework</h6>
                      <p className="text-sm text-muted-foreground">Built a custom evaluation framework (EQ60) using sentiment and emotion classification</p>
                    </div>
                    <div className="bg-background rounded-xl p-4 border border-border">
                      <h6 className="font-semibold text-charcoal dark:text-white mb-2">Deployment</h6>
                      <p className="text-sm text-muted-foreground">Model containerized with Docker and deployed on AWS EC2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Evaluation Metrics Slide */}
            <div className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-muted/50 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-charcoal dark:text-white mb-6 text-center">
                  Evaluation Metrics & Results
                </h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                      <div className="text-4xl font-bold text-muted-foreground mb-2">45</div>
                      <p className="text-muted-foreground">Baseline LLM EQ60</p>
                      <div className="w-full bg-muted rounded-full h-3 mt-4">
                        <div className="bg-muted-foreground h-3 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-background rounded-xl p-6 shadow-sm border-2 border-sage">
                      <div className="text-4xl font-bold text-sage mb-2">53</div>
                      <p className="text-muted-foreground">Fine-tuned LLM EQ60</p>
                      <div className="w-full bg-muted rounded-full h-3 mt-4">
                        <div className="bg-sage h-3 rounded-full" style={{ width: "53%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <div className="bg-sage/10 rounded-xl p-4">
                    <span className="text-sage font-semibold text-lg">+18% Improvement</span>
                    <p className="text-muted-foreground text-sm mt-1">in empathy understanding and response quality</p>
                  </div>
                </div>
                <div className="mt-6 bg-background rounded-xl p-4 border border-border">
                  <h5 className="font-semibold text-charcoal dark:text-white mb-2">Additional Improvements</h5>
                  <p className="text-muted-foreground text-sm">5× improvement in emotion alignment accuracy</p>
                </div>
              </div>
            </div>

            {/* Deployment & Interface Slide */}
            <div className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-muted/50 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-charcoal dark:text-white mb-6 text-center">
                  Deployment & Interface
                </h4>
                <div className="space-y-4">
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">D</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">Docker Containerization</h5>
                      <p className="text-muted-foreground text-sm">Model packaged and deployed with Docker for consistency</p>
                    </div>
                  </div>
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">A</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">AWS EC2 Deployment</h5>
                      <p className="text-muted-foreground text-sm">Scalable cloud deployment for real-time inference</p>
                    </div>
                  </div>
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">R</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">ReactJS Interface</h5>
                      <p className="text-muted-foreground text-sm">Built a ReactJS-based chatbot interface for real-time interaction</p>
                    </div>
                  </div>
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">E</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">Enterprise Applications</h5>
                      <p className="text-muted-foreground text-sm">Healthcare, education, and enterprise support opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.title.includes("Stock Market Movement Prediction")) {
      return (
        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex">
            {/* Dataset Overview Slide */}
            <div className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-muted/50 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-charcoal dark:text-white mb-6 text-center">
                  Dataset Overview & Methodology
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                    <h5 className="font-semibold text-charcoal dark:text-white mb-4">Data Statistics</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Train Set:</span>
                        <span className="font-mono">745,327 records</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Test Set:</span>
                        <span className="font-mono">319,769 records</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Features:</span>
                        <span className="font-mono">74 attributes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Stocks:</span>
                        <span className="font-mono">~700 U.S. stocks</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time Period:</span>
                        <span className="font-mono">Jan 2019 - Jan 2020</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                    <h5 className="font-semibold text-charcoal dark:text-white mb-4">Preprocessing Steps</h5>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-sage rounded-full"></div>
                        <span className="text-sm">Linear interpolation for missing values</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-sage rounded-full"></div>
                        <span className="text-sm">Dropped anonymized date attributes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-sage rounded-full"></div>
                        <span className="text-sm">Feature grouping for equities</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-sage rounded-full"></div>
                        <span className="text-sm">Data normalization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Model Comparison Slide */}
            <div className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-muted/50 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-charcoal dark:text-white mb-6 text-center">
                  Model Performance Comparison
                </h4>
                <div className="space-y-4">
                  <div className="bg-background rounded-xl p-6 shadow-sm border-2 border-sage">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-charcoal dark:text-white">Neural Network (9 layers)</h5>
                      <span className="text-2xl font-bold text-sage">52.38%</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Linear activation, Adam optimizer, 10 epochs</p>
                    <div className="w-full bg-muted rounded-full h-3 mt-3">
                      <div className="bg-sage h-3 rounded-full" style={{ width: "52.38%" }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-charcoal dark:text-white">LightGBM</h5>
                      <span className="text-2xl font-bold text-muted-foreground">52.08%</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Suffered from overfitting issues</p>
                    <div className="w-full bg-muted rounded-full h-3 mt-3">
                      <div className="bg-muted-foreground h-3 rounded-full" style={{ width: "52.08%" }}></div>
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-charcoal dark:text-white">Random Forest</h5>
                      <span className="text-2xl font-bold text-muted-foreground">~51.5%</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Baseline performance</p>
                    <div className="w-full bg-muted rounded-full h-3 mt-3">
                      <div className="bg-muted-foreground h-3 rounded-full" style={{ width: "51.5%" }}></div>
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-6 shadow-sm border border-border opacity-60">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-charcoal dark:text-white">Polynomial Regression</h5>
                      <span className="text-2xl font-bold text-muted-foreground">Failed</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Memory overhead at higher degrees</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Slide */}
            <div className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-muted/50 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-charcoal dark:text-white mb-6 text-center">
                  Neural Network Architecture
                </h4>
                <div className="space-y-4">
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">9</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">Hidden Layers</h5>
                      <p className="text-muted-foreground text-sm">Deep architecture for complex pattern recognition</p>
                    </div>
                  </div>
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">A</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">Adam Optimizer</h5>
                      <p className="text-muted-foreground text-sm">Adaptive learning rate optimization</p>
                    </div>
                  </div>
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">L</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">Linear Activation</h5>
                      <p className="text-muted-foreground text-sm">Suitable for regression tasks</p>
                    </div>
                  </div>
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">10</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">Training Epochs</h5>
                      <p className="text-muted-foreground text-sm">Optimal training duration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.title.includes("Occlusion Removal & Inpainting")) {
      return (
        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex">
            {/* Methodology Overview Slide */}
            <div className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-muted/50 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-charcoal dark:text-white mb-6 text-center">
                  Methodology & Pipeline Overview
                </h4>
                <div className="space-y-4">
                  <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                    <h5 className="font-semibold text-charcoal dark:text-white mb-4">Occlusion Detection</h5>
                    <div className="flex items-center gap-4">
                      <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                        <span className="text-sage font-bold">M</span>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Mask R-CNN with ResNet-101 backbone for instance segmentation</p>
                        <p className="text-sm text-muted-foreground mt-1">White and binary masks created from occlusion regions, enhanced via dilation</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                    <h5 className="font-semibold text-charcoal dark:text-white mb-4">Inpainting Module</h5>
                    <div className="flex items-center gap-4">
                      <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                        <span className="text-sage font-bold">G</span>
                      </div>
                      <div>
                        <p className="text-muted-foreground">GAN-based with dilated convolutions and two-stage coarse–refinement network</p>
                        <p className="text-sm text-muted-foreground mt-1">Uses contextual attention for realistic reconstruction</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                    <h5 className="font-semibold text-charcoal dark:text-white mb-4">Optimization</h5>
                    <div className="flex items-center gap-4">
                      <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                        <span className="text-sage font-bold">⚡</span>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Reduced processing time from 27.2s → 7.3s</p>
                        <p className="text-sm text-muted-foreground mt-1">By resizing input images and optimizing loops</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Results Slide */}
            <div className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-muted/50 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-charcoal dark:text-white mb-6 text-center">
                  Performance Results & Quality Metrics
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background rounded-xl p-6 shadow-sm border-2 border-sage">
                    <h5 className="font-semibold text-charcoal dark:text-white mb-4 text-center">DCGAN</h5>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-sage mb-2">34.63</div>
                      <p className="text-muted-foreground">PSNR (Peak Signal-to-Noise Ratio)</p>
                      <p className="text-sm text-sage mt-2">Highest quality reconstruction</p>
                    </div>
                  </div>
                  
                  <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                    <h5 className="font-semibold text-charcoal dark:text-white mb-4 text-center">WGAN-GP</h5>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-muted-foreground mb-2">31.56</div>
                      <p className="text-muted-foreground">PSNR (Peak Signal-to-Noise Ratio)</p>
                      <p className="text-sm text-muted-foreground mt-2">Less stable than DCGAN</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-background rounded-xl p-6 shadow-sm border border-border">
                  <h5 className="font-semibold text-charcoal dark:text-white mb-4">Key Achievements</h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sage rounded-full"></div>
                      <span className="text-sm">Generated images required no additional post-processing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sage rounded-full"></div>
                      <span className="text-sm">Maintained global and local consistency</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sage rounded-full"></div>
                      <span className="text-sm">Enabled realistic 3D reconstruction of monuments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture & Pipeline Slide */}
            <div className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-muted/50 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-charcoal dark:text-white mb-6 text-center">
                  Architecture & Pipeline
                </h4>
                <div className="space-y-4">
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">1</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">Input Processing</h5>
                      <p className="text-muted-foreground text-sm">Crowd-sourced heritage site images with occlusions</p>
                    </div>
                  </div>
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">2</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">Mask R-CNN Detection</h5>
                      <p className="text-muted-foreground text-sm">Instance segmentation for occlusion localization</p>
                    </div>
                  </div>
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">3</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">GAN Inpainting</h5>
                      <p className="text-muted-foreground text-sm">Contextual attention for realistic reconstruction</p>
                    </div>
                  </div>
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">4</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">3D Reconstruction</h5>
                      <p className="text-muted-foreground text-sm">Clean images enable accurate 3D model generation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.title.includes("Mini DynamoDB")) {
      return (
        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex">
            {/* Objective & Methodology Slide */}
            <div className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-muted/50 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-charcoal dark:text-white mb-6 text-center">
                  Objective & Methodology
                </h4>
                <div className="space-y-4">
                  <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                    <h5 className="font-semibold text-charcoal dark:text-white mb-4">Objective</h5>
                    <p className="text-muted-foreground">
                      Design and implement a decentralized, fault-tolerant key-value store with efficient replication and consistency guarantees.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background rounded-xl p-4 border border-border">
                      <h6 className="font-semibold text-charcoal dark:text-white mb-2">Data Distribution</h6>
                      <p className="text-sm text-muted-foreground">Consistent hashing for dynamic sharding and replication across nodes</p>
                    </div>
                    <div className="bg-background rounded-xl p-4 border border-border">
                      <h6 className="font-semibold text-charcoal dark:text-white mb-2">Coordination</h6>
                      <p className="text-sm text-muted-foreground">ZooKeeper used for leader election, metadata synchronization, and fault recovery</p>
                    </div>
                    <div className="bg-background rounded-xl p-4 border border-border">
                      <h6 className="font-semibold text-charcoal dark:text-white mb-2">Communication</h6>
                      <p className="text-sm text-muted-foreground">gRPC enabled efficient, scalable inter-node RPC</p>
                    </div>
                    <div className="bg-background rounded-xl p-4 border border-border">
                      <h6 className="font-semibold text-charcoal dark:text-white mb-2">Storage Optimization</h6>
                      <p className="text-sm text-muted-foreground">Used Log-Structured Merge Trees (LSM-trees) with custom compaction strategies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outcomes & Results Slide */}
            <div className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-muted/50 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-charcoal dark:text-white mb-6 text-center">
                  Outcomes & Performance Results
                </h4>
                <div className="space-y-4">
                  <div className="bg-background rounded-xl p-6 shadow-sm border-2 border-sage">
                    <h5 className="font-semibold text-charcoal dark:text-white mb-4">Low-Latency Operations</h5>
                    <div className="flex items-center gap-4">
                      <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                        <span className="text-sage font-bold">⚡</span>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Achieved low-latency key-value operations under replication</p>
                        <p className="text-sm text-sage mt-1">Optimized for high-throughput reads and writes</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                    <h5 className="font-semibold text-charcoal dark:text-white mb-4">Fault Tolerance</h5>
                    <div className="flex items-center gap-4">
                      <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                        <span className="text-sage font-bold">🛡️</span>
                      </div>
                      <div>
                        <p className="text-muted-foreground">System maintained availability under node failures</p>
                        <p className="text-sm text-muted-foreground mt-1">Due to ZooKeeper-based recovery mechanisms</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                    <h5 className="font-semibold text-charcoal dark:text-white mb-4">Storage Optimization</h5>
                    <div className="flex items-center gap-4">
                      <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                        <span className="text-sage font-bold">📊</span>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Storage engine optimizations reduced query time</p>
                        <p className="text-sm text-muted-foreground mt-1">While handling high write loads efficiently</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture & Components Slide */}
            <div className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-muted/50 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-charcoal dark:text-white mb-6 text-center">
                  Architecture & Core Components
                </h4>
                <div className="space-y-4">
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">C</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">Consistent Hashing</h5>
                      <p className="text-muted-foreground text-sm">Dynamic sharding and replication across distributed nodes</p>
                    </div>
                  </div>
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">G</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">Gossip Protocol</h5>
                      <p className="text-muted-foreground text-sm">Eventual consistency through decentralized update propagation</p>
                    </div>
                  </div>
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">L</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">LSM-Trees</h5>
                      <p className="text-muted-foreground text-sm">Log-Structured Merge Trees with custom compaction strategies</p>
                    </div>
                  </div>
                  <div className="bg-background rounded-xl p-4 flex items-center gap-4 border border-border">
                    <div className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold">Z</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-charcoal dark:text-white">ZooKeeper Integration</h5>
                      <p className="text-muted-foreground text-sm">Leader election, metadata management, and fault tolerance</p>
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

  const totalSlides = project.title.includes("Humma.AI") ? 3 : 
                     project.title.includes("Stock Market Movement Prediction") ? 3 : 
                     project.title.includes("Occlusion Removal & Inpainting") ? 3 : 
                     project.title.includes("Mini DynamoDB") ? 3 : 
                     (project.images?.length || 1);

  return (
    <Dialog open={!!project} onOpenChange={() => onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg max-h-[90vh] overflow-hidden p-0"
          )}
        >
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
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onClose}
                className="hover:bg-muted-foreground/10"
              >
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
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </Dialog>
  );
}
