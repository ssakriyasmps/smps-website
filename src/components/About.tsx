import { motion } from 'motion/react';
import { Target, Eye, Sparkles } from 'lucide-react';
import { Card } from './ui/card';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-primary">About SMPS Consultancy</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              We modernize core infrastructure for established organizations, replacing manual friction with automated flow to bridge the gap between strategy and execution.
            </p>
          </motion.div>

          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={itemVariants}>
              <Card className="p-8 h-full bg-gradient-to-br from-primary/5 to-transparent border-primary/10 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl text-primary">Vision</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  To create a world where technology is a tailwind, not a barrier—where every organisation, no matter its age or size, has the agility to reinvent itself at the speed of its ideas.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-8 h-full bg-gradient-to-br from-primary/5 to-transparent border-primary/10 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl text-primary">Mission</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Leading established businesses through seamless digital transformation, we replace operational friction with smart automation. This ensures strategy translates directly into daily execution, resulting in robust systems and enduring company cultures designed for the future.
                </p>
              </Card>
            </motion.div>
          </div>

          {/* What We Do */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-primary text-primary-foreground">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8" />
                <h3 className="text-2xl">What We Do</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-90">
                We provide the technical leadership necessary for digital evolution. From architecting core banking systems to scaling enterprise AI/ML initiatives, we engineer high-performance software designed to drive measurable business value. We've worked with public & private sector clients across financial services, healthcare, and government sectors.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
