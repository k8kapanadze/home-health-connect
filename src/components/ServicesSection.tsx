import { motion } from "framer-motion";
import { Syringe, Droplets, Bandage, CircleDot, Cable } from "lucide-react";

const services = [
  {
    icon: Syringe,
    title: "ინექციური მანიპულაციები",
    text: "ნემსის გაკეთების სრული ციკლი (კუნთშიდა, კანქვეშა, ინტრავენური) უსაფრთხოების წესების სრული დაცვით.",
  },
  {
    icon: Droplets,
    title: "ინტრავენური ინფუზიური თერაპია",
    text: "ორგანიზმის სითხოვანი და მედიკამენტური ბალანსის აღდგენა (გადასხმა) ექიმის დანიშნულების შესაბამისად, მუდმივი მეთვალყურეობის ქვეშ.",
  },
  {
    icon: Bandage,
    title: "ჭრილობების მართვა",
    text: "რთული ჭრილობების პირველადი და მეორადი დამუშავება, ნახვევების შეცვლა და აღდგენის ხელშემწყობი მეთოდების გამოყენება.",
  },
  {
    icon: CircleDot,
    title: "ინვაზიური დახმარება",
    text: "შარდის ბუშტის კათეტერის დაყენება, შეცვლა ან მოხსნა მაქსიმალური სიფრთხილითა და ჰიგიენური ნორმების დაცვით.",
  },
  {
    icon: Cable,
    title: "ზონდის ჩადგმა",
    text: "ნაზოგასტრალური ზონდის ჩადგმა და მართვა კლინიკური სტანდარტების დაცვით, პაციენტის კომფორტის მაქსიმალური გათვალისწინებით.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-[hsl(215_65%_22%)] to-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(225_55%_40%/0.3),_transparent_60%)]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-white/90 border border-white/20 backdrop-blur-sm">
            პროფესიული კლასიფიკაცია
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            მომსახურების სფერო
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative p-6 sm:p-7 flex flex-col gap-4 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/[0.12] hover:bg-white/[0.12] hover:border-white/25 hover:shadow-2xl transition-all duration-300 group cursor-default overflow-hidden"
            >
              <div className="relative z-10 flex flex-col gap-4 w-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 shrink-0 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-white/20 group-hover:shadow-lg transition-all duration-300"
                >
                  <s.icon className="w-7 h-7 text-white/90" />
                </motion.div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">{s.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/75 transition-colors duration-300">{s.text}</p>
                </div>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white/40 to-white/10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
