import { motion } from 'motion/react';
import { ArrowRight, Code2, Zap, Shield } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Icon Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center gap-4 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 bg-primary/10 rounded-lg"
            >
              <Code2 className="w-6 h-6 text-primary" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="p-3 bg-primary/10 rounded-lg"
            >
              <Zap className="w-6 h-6 text-primary" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 bg-primary/10 rounded-lg"
            >
              <Shield className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-primary max-w-5xl mx-auto leading-tight"
          >
            Engineering Digital Evolution for High-Stakes Enterprise
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto"
          >
            SMPS Consultancy provides the technical leadership necessary for high-stakes digital evolution. From architecting core banking systems to scaling enterprise AI/ML initiatives, we engineer high-performance software designed to drive measurable business value.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group px-8 py-6 text-lg"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToAbout}
              className="px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 text-primary">8+</div>
              <div className="text-sm text-foreground/60">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 text-primary">8+</div>
              <div className="text-sm text-foreground/60">Major Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 text-primary">5+</div>
              <div className="text-sm text-foreground/60">Expert Consultants</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
