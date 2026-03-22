import { Phone, Mail, Facebook, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <footer className="section-padding bg-foreground text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">საკონტაქტო ინფორმაცია</h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <a href="tel:557292542" className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors">
            <Phone className="w-5 h-5" />
            <span>557 29 25 42</span>
          </a>
          <a href="mailto:getmedic@gmail.com" className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors">
            <Mail className="w-5 h-5" />
            <span>getmedic@gmail.com</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 mb-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} HOMEDIC - ექთნები ბინაზე გამოძახებით. ყველა უფლება დაცულია.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
