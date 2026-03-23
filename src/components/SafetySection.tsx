import { motion } from "framer-motion";
import doctorsConsulting from "@/assets/doctors-consulting.gif";
import consultation from "@/assets/consultation.gif";

const SafetySection = () => {
  return (
    <section className="section-padding overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-5xl">
        {/* Safety standard */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border/30">
              <img
                src={doctorsConsulting}
                alt="უსაფრთხოების სტანდარტი"
                className="w-full h-[280px] sm:h-[320px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-accent/10 text-accent border border-accent/20">
              სტანდარტი
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              უსაფრთხოების სტანდარტი
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ნდობა, რომელიც ეფუძნება ფაქტებს - ყოველი ინვაზიური ინსტრუმენტის პირველადი გახსნა თქვენი თანდასწრებით სრულდება. ეს არის ჩვენი პროფესიული პასუხისმგებლობა და თქვენი სიმშვიდის გარანტია.
            </p>
          </motion.div>
        </div>

        {/* Professional consultation */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-primary/10 text-primary border border-primary/20">
              კონსულტაცია
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              პროფესიული კონსულტაცია
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ყოველი ვიზიტის წინ სპეციალისტი დეტალურად გიკავშირდებათ, ამოწმებს კლინიკურ მონაცემებს და ადგენს ინდივიდუალურ გეგმას.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <img
              src={consultation}
              alt="კონსულტაცია"
              className="w-full max-w-[280px] sm:max-w-xs"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
