import { motion } from "framer-motion";
import homedicPhone from "@/assets/homedic-phone.png";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-primary via-primary to-accent/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(195_65%_45%/0.3),_transparent_60%)]" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/15 text-white/90 border border-white/20">
              ექთნები ბინაზე გამოძახებით
            </span>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug text-primary-foreground mb-6">
              კლინიკური უსაფრთხოება და პერსონალიზებული ზრუნვა თქვენს გარემოში.
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/80 max-w-xl mb-10 leading-relaxed">
              ჩვენი საქმიანობა ეფუძნება სამედიცინო ეთიკას, პაციენტის ავტონომიის პრინციპსა და მკაცრ კლინიკურ პროტოკოლებს. სტაციონარული სტანდარტის ადაპტაცია ინდივიდუალურ სივრცეში - ეს ჩვენი პროფესიული პასუხისმგებლობაა.
            </p>
            <button
              onClick={scrollToServices}
              className="px-8 py-3.5 rounded-lg bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-colors shadow-lg"
            >
              იხილეთ მომსახურება
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={homedicPhone}
              alt="HOMEDIC - სამედიცინო მომსახურება"
              className="w-full max-w-sm rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
