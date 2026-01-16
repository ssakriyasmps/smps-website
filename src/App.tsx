import image_71161ba1f46582e41af3d434cfed8194c7c7b389 from 'figma:asset/71161ba1f46582e41af3d434cfed8194c7c7b389.png';
import image_dc7e0bc623b020535289bbabb507e52318e2d26a from 'figma:asset/dc7e0bc623b020535289bbabb507e52318e2d26a.png';
import { useState } from "react";
import { motion } from "motion/react";
import {
  Menu,
  X,
  Code2,
  Lightbulb,
  Users,
  Award,
  ChevronRight,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Technologies } from "./components/Technologies";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Clients } from "./components/Clients";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Why Us", href: "why-us" },
    { name: "Clients", href: "clients" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 py-2">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <ImageWithFallback
                src={image_71161ba1f46582e41af3d434cfed8194c7c7b389}
                alt="SMPS Consultancy Logo"
                className="h-48 w-48 object-contain rounded"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-40">
        <Hero />
        <About />
        <Technologies />
        <Services />
        <WhyChooseUs />
        <Clients />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}