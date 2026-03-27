import { motion } from "framer-motion";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <footer className="section-padding relative overflow-hidden bg-foreground text-primary-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-[hsl(220_30%_15%)] to-foreground" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">საკონტაქტო ინფორმაცია</h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <motion.a
              href="tel:557292542"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>557 29 25 42</span>
            </motion.a>
            <motion.a
              href="mailto:getmedic@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>getmedic@gmail.com</span>
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-4 mb-10">
            {[
              { Icon: Facebook, href: "https://facebook.com" },
              { Icon: Instagram, href: "https://instagram.com" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <div className="border-t border-primary-foreground/10 pt-6">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} HOMEDIC - ექთნები ბინაზე გამოძახებით. ყველა უფლება დაცულია.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default ContactSection;
