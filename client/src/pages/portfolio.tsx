import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Research } from "@/components/Research";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Mail, Github, Linkedin } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { portfolio } from "@/data/portfolio";

export default function Portfolio() {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-12 bg-charcoal text-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300">© 2024 Namrata Nyamagoudar. All rights reserved.</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href={`mailto:${portfolio.contact.email}`}
                className="text-gray-300 hover:text-sage transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={portfolio.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-sage transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={portfolio.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-sage transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="text-gray-300 hover:text-sage transition-colors duration-200 p-2"
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
