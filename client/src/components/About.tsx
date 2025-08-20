import { motion } from "framer-motion";
import { Brain, Eye, Database } from "lucide-react";
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

        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed text-center mb-12"
          >
            {portfolio.about}
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sage group-hover:text-white transition-all duration-300">
                  <skill.icon className="text-sage group-hover:text-white h-8 w-8" />
                </div>
                <h3 className="font-semibold text-charcoal dark:text-white mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
