import { motion } from 'motion/react';
import { Building2, Briefcase } from 'lucide-react';

export function Clients() {
  const publicSectorClients = [
    'Registers of Scotland'
  ];

  const privateSectorClients = [
    'JP Morgan',
    'RBS',
    'Clydesdale Bank',
    'Barclays',
    'Visa',
    'Cisco'
  ];

  return (
    <section id="clients" className="py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-primary">Trusted by Industry Leaders</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            We've partnered with leading organisations across public and private sectors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Public Sector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl text-primary">Public Sector</h3>
            </div>
            
            <div className="space-y-3">
              {publicSectorClients.map((client, index) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="bg-background border border-border rounded-lg p-4 hover:border-blue-500/30 transition-all hover:shadow-md group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                      {client}
                    </span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Private Sector */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl text-primary">Private Sector</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {privateSectorClients.map((client, index) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-background border border-border rounded-lg p-4 hover:border-purple-500/30 transition-all hover:shadow-md group text-center"
                >
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                    {client}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl mb-2 text-primary">8+</div>
            <div className="text-sm text-foreground/60">Major Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl mb-2 text-primary">2</div>
            <div className="text-sm text-foreground/60">Sectors Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl mb-2 text-primary">9+</div>
            <div className="text-sm text-foreground/60">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl mb-2 text-primary">100%</div>
            <div className="text-sm text-foreground/60">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
