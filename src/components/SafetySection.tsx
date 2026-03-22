import { motion } from "framer-motion";
import consultationImg from "@/assets/consultation.gif";
import sterileImg from "@/assets/sterile-package.jpg";

const SafetySection = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={sterileImg}
                alt="სტერილური პაკეტის გახსნა"
                className="w-full h-[320px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              უსაფრთხოების სტანდარტი
            </h2>
            <p className="text-lg text-primary font-medium mb-3">
              „ჩვენი უსაფრთხოების სტანდარტი - იხსნება მხოლოდ თქვენს თვალწინ"
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ყველა სამედიცინო მასალა და ინსტრუმენტი იხსნება პაციენტის თანდასწრებით. სტერილობის დაცვა არ არის ფორმალობა - ეს ჩვენი კლინიკური ვალდებულებაა.
            </p>
          </motion.div>
        </div>

        {/* Consultation visual */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              პროფესიული კონსულტაცია
            </h2>
            <p className="text-lg text-primary font-medium mb-3">
              „პაციენტთან კომუნიკაცია - მკურნალობის პირველი ეტაპი"
            </p>
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
              src={consultationImg}
              alt="კონსულტაცია პაციენტთან"
              className="w-full max-w-sm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
