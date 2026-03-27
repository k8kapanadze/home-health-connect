import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-primary via-[hsl(220_50%_22%)] to-accent/60">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(225_55%_50%/0.25),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(215_65%_35%/0.2),_transparent_50%)]" />
      
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-1/5 w-48 h-48 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block mb-6 px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase bg-white/15 text-white border border-white/25 shadow-lg backdrop-blur-sm"
            >
              ექთნები ბინაზე გამოძახებით
            </motion.span>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-snug text-primary-foreground mb-6">
              კლინიკური უსაფრთხოება და პერსონალიზებული ზრუნვა თქვენს გარემოში.
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base text-primary-foreground/80 max-w-xl mb-10 leading-relaxed"
            >
              ჩვენი საქმიანობა ეფუძნება სამედიცინო ეთიკას, პაციენტის ავტონომიის პრინციპსა და მკაცრ კლინიკურ პროტოკოლებს. სტაციონარული სტანდარტის ადაპტაცია ინდივიდუალურ სივრცეში - ეს ჩვენი პროფესიული პასუხისმგებლობაა.
            </motion.p>
            <motion.button
              onClick={scrollToServices}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-lg bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
            >
              იხილეთ მომსახურება
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-w-md w-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
