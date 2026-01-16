import { motion } from 'motion/react';
import { GraduationCap, Code, TrendingUp, Users, Award, Lightbulb } from 'lucide-react';
import { Card } from './ui/card';

export function Internships() {
  const benefits = [
    {
      icon: Code,
      title: 'Real-World Projects',
      description: 'Work on actual client projects using cutting-edge technologies'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn directly from experienced consultants in the field'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Fast-track your career with hands-on enterprise experience'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Outstanding performance may lead to full-time opportunities'
    }
  ];

  const qualities = [
    'Strong programming fundamentals (Java, Python, or similar)',
    'Eagerness to learn enterprise technologies',
    'Problem-solving mindset',
    'Good communication skills',
    'Team collaboration ability',
    'Passion for technology and innovation'
  ];

  return (
    <section id="internships" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-sm text-primary">Join Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-primary">Internship Opportunities</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Launch your career in enterprise software development. We're growing and looking for talented individuals to join our team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Why Join Us */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h3 className="text-2xl text-primary">Why Join SMPS?</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/30 transition-colors">
                      <Icon className="w-8 h-8 text-primary mb-3" />
                      <h4 className="mb-2 text-primary">{benefit.title}</h4>
                      <p className="text-sm text-foreground/70">
                        {benefit.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* What We Look For */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="text-2xl text-primary">What We Look For</h3>
            </div>
            
            <Card className="p-6 bg-primary text-primary-foreground">
              <ul className="space-y-3">
                {qualities.map((quality, index) => (
                  <motion.li
                    key={quality}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full mt-2 flex-shrink-0" />
                    <span className="opacity-90">{quality}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6"
            >
              <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
                <h4 className="mb-2 text-primary">Team Size & Growth</h4>
                <p className="text-foreground/70">
                  We currently have <strong className="text-primary">5 consultants</strong> and are actively growing our team. This is your opportunity to be part of our expansion and growth story.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl mb-4 text-primary">Ready to Start Your Journey?</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Join SMPS Consultancy and work on challenging projects with major clients across financial services and public sector. We believe in growth through apprenticeship—our success is measured by how much we elevate your skills.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Apply Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
