import { motion } from "framer-motion";
import doctorsConsulting from "@/assets/doctors-consulting.gif";
import consultation from "@/assets/consultation.gif";

const SafetySection = () => {
  return (
    <section className="section-padding overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-muted/50" />
      <div className="absolute left-0 top-1/3 w-72 h-72 rounded-full bg-primary/3 blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Safety standard */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-xl border border-border/30 relative group"
            >
              <img
                src={doctorsConsulting}
                alt="უსაფრთხოების სტანდარტი"
                className="w-full h-[280px] sm:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/15">
              სტანდარტი
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              უსაფრთხოების სტანდარტი
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              ნდობა, რომელიც ეფუძნება ფაქტებს - ყოველი ინვაზიური ინსტრუმენტის პირველადი გახსნა თქვენი თანდასწრებით სრულდება. ეს არის ჩვენი პროფესიული პასუხისმგებლობა და თქვენი სიმშვიდის გარანტია.
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
            />
          </motion.div>
        </div>

        {/* Professional consultation */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/15">
              კონსულტაცია
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              პროფესიული კონსულტაცია
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              ყოველი ვიზიტის წინ სპეციალისტი დეტალურად გიკავშირდებათ, ამოწმებს კლინიკურ მონაცემებს და ადგენს ინდივიდუალურ გეგმას.
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              src={consultation}
              alt="კონსულტაცია"
              className="w-full max-w-[280px] sm:max-w-xs drop-shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
