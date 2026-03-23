import { motion } from "framer-motion";
import doctorsConsulting from "@/assets/doctors-consulting.gif";
import doctorPatient from "@/assets/doctor-patient.gif";

const SafetySection = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        {/* Safety video + text */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <video
                src="/sterile-video.mp4"
                autoPlay
                loop
                muted
                playsInline
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
            <p className="text-sm text-muted-foreground leading-relaxed">
              ნდობა, რომელიც ეფუძნება ფაქტებს - ყოველი ინვაზიური ინსტრუმენტის პირველადი გახსნა თქვენი თანდასწრებით სრულდება. ეს არის ჩვენი პროფესიული პასუხისმგებლობა და თქვენი სიმშვიდის გარანტია.
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
              src={doctorPatient}
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
