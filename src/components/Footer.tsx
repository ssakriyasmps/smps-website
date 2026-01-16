import { motion } from 'motion/react';
import { Code2, Mail, Linkedin, Twitter, Github, Globe } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: 'about' },
      { name: 'Why Choose Us', href: 'why-us' },
      { name: 'Clients', href: 'clients' }
    ],
    services: [
      { name: 'Digital Transformation', href: 'services' },
      { name: 'Software Development', href: 'services' },
      { name: 'System Architecture', href: 'services' },
      { name: 'Technical Leadership', href: 'services' }
    ],
    careers: [
      { name: 'Contact', href: 'contact' }
    ]
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: '#',
      note: 'Coming Soon'
    },
    { 
      name: 'Website', 
      icon: Globe, 
      href: 'https://www.smps-consultancy.com',
      note: null
    },
    { 
      name: 'Email', 
      icon: Mail, 
      href: 'mailto:info@smps-consultancy.com',
      note: null
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-8 h-8" />
                <span className="text-xl font-semibold">SMPS Consultancy</span>
              </div>
              <p className="text-primary-foreground/70 mb-6 max-w-sm">
                Engineering digital evolution for high-stakes enterprise. Delivering technical leadership and measurable business value since 2016.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors group relative"
                      title={social.note || social.name}
                    >
                      <Icon className="w-5 h-5" />
                      {social.note && (
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary-foreground text-primary text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {social.note}
                        </span>
                      )}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Careers Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="mb-4">Careers</h4>
            <ul className="space-y-2">
              {footerLinks.careers.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-primary-foreground/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} SMPS Consultancy Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/70">
              <button className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
