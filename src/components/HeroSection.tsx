import { motion } from "framer-motion";
import heroImg from "@/assets/hero-medical.jpg";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={heroImg} alt="სამედიცინო მომსახურება" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-accent/20 text-accent-foreground border border-accent/30">
            ექთნები ბინაზე გამოძახებით
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-primary-foreground mb-6">
            კლინიკური უსაფრთხოება და პერსონალიზებული ზრუნვა თქვენს გარემოში.
          </h1>
          <p className="text-base sm:text-lg text-primary-foreground/85 max-w-3xl mx-auto mb-10 leading-relaxed">
            ჩვენი საქმიანობა ეფუძნება სამედიცინო ეთიკას, პაციენტის ავტონომიის პრინციპსა და მკაცრ კლინიკურ პროტოკოლებს. სტაციონარული სტანდარტის ადაპტაცია ინდივიდუალურ სივრცეში - ეს ჩვენი პროფესიული პასუხისმგებლობაა.
          </p>
          <button
            onClick={scrollToServices}
            className="px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-colors shadow-lg"
          >
            იხილეთ მომსახურება
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
