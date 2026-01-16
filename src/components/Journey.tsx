import { motion } from 'motion/react';
import { Calendar, Building2, TrendingUp } from 'lucide-react';

export function Journey() {
  const milestones = [
    {
      year: '2016',
      title: 'Foundation in UK Financial Sector',
      description: 'Secured foundational client, beginning work with JP Morgan (2016-2017).',
      icon: Building2
    },
    {
      year: '2017',
      title: 'Financial Sector Expansion',
      description: 'Expanded client base by acquiring Clydesdale Bank (2017-2019) as a client.',
      icon: TrendingUp
    },
    {
      year: '2019',
      title: 'Major Banking Partnership',
      description: 'Transitioned to working with RBS (2019-2021), solidifying expertise in core banking systems.',
      icon: Building2
    },
    {
      year: '2021',
      title: 'International Payments Technology',
      description: 'Secured major international client in payments technology sector, working with Visa (2021-2022).',
      icon: TrendingUp
    },
    {
      year: '2022',
      title: 'Public Sector Diversification',
      description: 'Successfully diversified into public sector with Registers of Scotland (2022-2025), demonstrating adaptability across different organisational structures and compliance environments.',
      icon: Building2
    }
  ];

  return (
    <section id="journey" className="py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-primary">Our Journey</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            A decade of delivering excellence across financial services and public sector
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    isEven ? '' : 'md:text-right'
                  }`}
                >
                  {/* Content */}
                  <div className={`${isEven ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-background border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-sm text-primary">{milestone.year}</span>
                        </div>
                      </div>
                      <h3 className="text-xl mb-2 text-primary">{milestone.title}</h3>
                      <p className="text-foreground/70">{milestone.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
