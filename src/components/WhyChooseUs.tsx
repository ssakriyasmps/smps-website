import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Zap, 
  Heart, 
  GraduationCap, 
  TrendingUp,
  Workflow
} from 'lucide-react';

export function WhyChooseUs() {
  const values = [
    {
      icon: MessageSquare,
      title: "The Translator's Mindset",
      description: "Complexity is the enemy of progress. We sit between the visionaries and the builders, ensuring that big ideas are never lost in translation and that technical realities always inform the grand plan.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "The Automation Instinct",
      description: "We believe human intelligence is too valuable to be spent on repetitive tasks. If a process is being done twice, it should be automated. We don't just fix problems; we engineer them out of existence.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Architectural Empathy",
      description: "We don't build in a vacuum. We design with the end-user and the maintainer in mind. If a design isn't clear, actionable, and resilient for the people who have to live with it every day, it isn't finished.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Practical Futurism",
      description: "We balance the 'viable now' with the 'ready for next.' We deliver immediate, tangible value through incremental releases (MVPs) while ensuring the foundation is strong enough to support whatever comes in the next decade.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Workflow,
      title: "Frictionless Flow",
      description: "Whether it's communication between departments or the journey of a product to the customer, we are obsessed with removing bottlenecks. We believe the best systems are the ones you don't notice because they simply work.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-primary">Why Choose Us</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Our core principles that drive innovation, reliability, and technical excellence
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative bg-background border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-all shadow-sm hover:shadow-lg">
                  {/* Icon with Gradient */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl mb-3 text-primary">{value.title}</h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${value.gradient} opacity-10 rotate-45 translate-x-4 -translate-y-4`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-primary/10 rounded-2xl px-8 py-6 max-w-3xl">
            <p className="text-lg text-foreground/80 leading-relaxed">
              We don't just deliver software—we build partnerships that transform how organisations operate, compete, and grow.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
