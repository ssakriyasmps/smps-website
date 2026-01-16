import { motion } from 'motion/react';
import { 
  Code2, 
  Server, 
  Cloud, 
  Container, 
  GitBranch, 
  Shield,
  Layers,
  Cpu
} from 'lucide-react';

export function Technologies() {
  const techCategories = [
    {
      category: 'Backend & Frameworks',
      icon: Server,
      color: 'from-blue-500/10 to-blue-600/10',
      borderColor: 'border-blue-500/20',
      technologies: ['Java', 'Spring Boot', 'Python', 'Node.js']
    },
    {
      category: 'Frontend',
      icon: Code2,
      color: 'from-purple-500/10 to-purple-600/10',
      borderColor: 'border-purple-500/20',
      technologies: ['React', 'TypeScript']
    },
    {
      category: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-cyan-500/10 to-cyan-600/10',
      borderColor: 'border-cyan-500/20',
      technologies: ['AWS', 'OpenShift']
    },
    {
      category: 'DevOps & Containers',
      icon: Container,
      color: 'from-green-500/10 to-green-600/10',
      borderColor: 'border-green-500/20',
      technologies: ['Docker', 'CI/CD Pipelines']
    },
    {
      category: 'Security & Quality',
      icon: Shield,
      color: 'from-red-500/10 to-red-600/10',
      borderColor: 'border-red-500/20',
      technologies: ['OSV Scanner', 'SonarQube', 'Renovate']
    }
  ];

  return (
    <section id="technologies" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-primary">Technologies We Master</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to deliver robust, scalable solutions
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative bg-gradient-to-br ${category.color} border ${category.borderColor} rounded-xl p-6 group hover:shadow-lg transition-all`}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="text-lg mb-3 text-primary">{category.category}</h3>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background/50 border border-border rounded-full text-sm text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <Cpu className="w-5 h-5 text-primary" />
            <span className="text-sm text-foreground/70">
              Full-stack expertise across enterprise architectures
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
