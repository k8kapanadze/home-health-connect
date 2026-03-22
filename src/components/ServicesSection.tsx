import { motion } from "framer-motion";
import { Syringe, Droplets, Bandage, CircleDot } from "lucide-react";

const services = [
  {
    icon: Syringe,
    title: "ინექციური მანიპულაციები",
    text: "ნემსის გაკეთების სრული ციკლი (კუნთშიდა, კანქვეშა, ვენაშიდა) უსაფრთხოების წესების სრული დაცვით.",
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
    text: "შარდის ბუშტის კათეტერის დაყენება, შეცვლა ან მოხსნა მაქსიმალური სიფრთხილით და ჰიგიენური ნორმების დაცვით.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-4"
        >
          მომსახურების სფერო
        </motion.h2>
        <p className="text-center text-muted-foreground text-sm mb-14">პროფესიული კლასიფიკაცია</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-7 flex gap-5 hover:shadow-xl transition-shadow group"
            >
              <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
