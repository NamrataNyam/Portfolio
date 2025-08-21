import { motion } from "framer-motion";
import { Brain, Eye, Database, Cloud } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function About() {
  const skills = [
    {
      icon: Brain,
      title: "AI/ML Engineering",
      description: "RAG systems, LangChain, RLHF, fine-tuning LLMs"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Object tracking, YOLO, DeepSORT, image inpainting"
    },
    {
      icon: Database,
      title: "Data Platforms",
      description: "Snowflake, ETL pipelines, multi-tenant architectures"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS, Azure, Docker, Kubernetes, CI/CD, Git, MLOps"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4">About</h2>
          <div className="w-16 h-1 bg-sage mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Professional Photo Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="w-96 h-96 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-sage/20 shadow-lg">
                <img
                  src="/images/me/WhatsApp Image 2025-08-19 at 6.43.23 PM.jpeg"
                  alt="Namrata Nyamagoudar - Graduation Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                {/* <h3 className="text-2xl font-semibold text-charcoal dark:text-white mb-4">
                  AI/ML Engineer & Data Platform Specialist
                </h3> */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {portfolio.about}
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-charcoal dark:text-white">Core Expertise</h4>
                <div className="grid grid-cols-1 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 group cursor-default hover:translate-x-2 transition-transform duration-300"
                    >
                      <motion.div 
                        className="bg-sage/10 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sage group-hover:scale-110 transition-all duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <skill.icon className="text-sage group-hover:text-white h-4 w-4 transition-colors duration-300" />
                      </motion.div>
                      <div>
                        <span className="font-medium text-charcoal dark:text-white group-hover:text-sage transition-colors duration-300">{skill.title}</span>
                        <p className="text-muted-foreground text-sm">{skill.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-charcoal dark:text-white mb-8">Education</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* UC Irvine */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <img
                    src="/images/Education/University_of_California,_Irvine_seal.svg.png"
                    alt="UC Irvine Seal"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-charcoal dark:text-white group-hover:text-sage transition-colors duration-300">
                    University of California, Irvine
                  </h4>
                  <p className="text-sage font-medium">Master's in Data Science</p>
                </div>
              </motion.div>

              {/* KLE Technological University */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <img
                    src="/images/Education/kle.jpeg"
                    alt="KLE Technological University Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-charcoal dark:text-white group-hover:text-sage transition-colors duration-300">
                    KLE Technological University
                  </h4>
                  <p className="text-sage font-medium">BE in Computer Science and Engineering</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
