import { motion } from "framer-motion";
import { Code, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedTyping } from "./AnimatedTyping";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-background dark:from-gray-900 dark:to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex flex-col items-center"
          >


            <h1 className="text-5xl lg:text-7xl font-bold text-charcoal dark:text-white mb-6 tracking-tight">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block"
              >
                Namrata{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-sage inline-block hover:scale-105 transition-transform duration-300 cursor-default"
              >
                Nyamagoudar
              </motion.span>
            </h1>
            <AnimatedTyping 
              titles={[
                "Data Scientist",
                "Software Developer", 
                "Founding Engineer",
                "Cloud Consultant",
                "AI/ML Engineer"
              ]}
              typingSpeed={80}
              deletingSpeed={40}
              pauseTime={2500}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-sage hover:bg-sage-dark text-white px-8 py-3 h-auto"
            >
              <Code className="mr-2 h-4 w-4" />
              View Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-sage text-sage hover:bg-sage hover:text-white px-8 py-3 h-auto"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
            {/* <Button
              variant="ghost"
              asChild
              className="text-muted-foreground hover:text-sage px-8 py-3 h-auto"
            >
              <a href="/resume/Namrata_Nyamagoudar_Resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download Résumé
              </a>
            </Button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
