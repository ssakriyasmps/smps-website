import { motion } from 'motion/react';
import { 
  Building2, 
  Brain, 
  Workflow, 
  Code, 
  Database,
  Rocket,
  Shield,
  Users
} from 'lucide-react';
import { Card } from './ui/card';

export function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Core Banking Systems',
      description: 'Architecting and modernizing mission-critical banking infrastructure with enterprise-grade reliability and security.',
      color: 'from-blue-500/10 to-blue-600/10'
    },
    {
      icon: Brain,
      title: 'AI/ML Initiatives',
      description: 'Scaling enterprise artificial intelligence and machine learning solutions to drive data-driven decision making.',
      color: 'from-purple-500/10 to-purple-600/10'
    },
    {
      icon: Workflow,
      title: 'Digital Transformation',
      description: 'Modernizing legacy systems and processes, replacing manual friction with automated flow and efficiency.',
      color: 'from-green-500/10 to-green-600/10'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Building high-performance, scalable software solutions tailored to your specific business requirements.',
      color: 'from-orange-500/10 to-orange-600/10'
    },
    {
      icon: Database,
      title: 'System Architecture',
      description: 'Designing resilient, maintainable architectures that serve both end-users and development teams effectively.',
      color: 'from-cyan-500/10 to-cyan-600/10'
    },
    {
      icon: Rocket,
      title: 'DevOps & Automation',
      description: 'Implementing CI/CD pipelines and automation strategies to accelerate delivery and reduce human error.',
      color: 'from-red-500/10 to-red-600/10'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Ensuring robust security measures and compliance standards across financial and public sector environments.',
      color: 'from-indigo-500/10 to-indigo-600/10'
    },
    {
      icon: Users,
      title: 'Technical Leadership',
      description: 'Providing strategic technical guidance and elevating team capabilities through knowledge transfer and mentorship.',
      color: 'from-pink-500/10 to-pink-600/10'
    }
  ];

  return (
    <section id="services" className="py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-primary">Our Services</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Comprehensive technology consulting services designed to drive measurable business value
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className={`p-6 h-full bg-gradient-to-br ${service.color} border-border hover:border-primary/30 transition-all hover:shadow-lg group`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mb-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-lg mb-2 text-primary">{service.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-foreground/70 mb-6">
            Need a custom solution? Let's discuss your requirements.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
