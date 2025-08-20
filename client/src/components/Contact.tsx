import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { portfolio } from "@/data/portfolio";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactLinks = [
    {
      icon: Mail,
      title: "Email",
      description: portfolio.contact.email,
      href: `mailto:${portfolio.contact.email}`,
      color: "text-blue-600"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "View my code and projects",
      href: portfolio.contact.github,
      color: "text-gray-900 dark:text-white"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Professional network",
      href: portfolio.contact.linkedin,
      color: "text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4">Get in Touch</h2>
          <div className="w-16 h-1 bg-sage mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Let's discuss opportunities in AI/ML engineering, data platforms, or research collaboration.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-charcoal dark:text-white mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, innovative projects, or research collaborations in AI/ML and data engineering.
                </p>
              </div>

              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * contactLinks.indexOf(link) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-200 group"
                    >
                      <motion.div 
                        className="bg-sage/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-sage group-hover:text-white transition-all duration-200 group-hover:scale-110"
                        whileHover={{ rotate: 5 }}
                      >
                        <link.icon className={`h-5 w-5 text-sage group-hover:text-white transition-colors duration-200`} />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-charcoal dark:text-white group-hover:text-sage transition-colors duration-200">{link.title}</h4>
                        <p className="text-muted-foreground text-sm">{link.description}</p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-border">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-charcoal dark:text-white">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="mt-2 border-border focus:ring-sage focus:border-sage"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-charcoal dark:text-white">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="mt-2 border-border focus:ring-sage focus:border-sage"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-charcoal dark:text-white">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project opportunity"
                        required
                        className="mt-2 border-border focus:ring-sage focus:border-sage"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-charcoal dark:text-white">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or opportunity..."
                        rows={5}
                        required
                        className="mt-2 border-border focus:ring-sage focus:border-sage resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-sage hover:bg-sage-dark text-white"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
