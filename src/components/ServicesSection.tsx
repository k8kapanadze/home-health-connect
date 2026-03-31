import { motion } from "framer-motion";
import { Syringe, Droplets, Bandage, CircleDot, Ratio } from "lucide-react";

const services = [
  {
    icon: Syringe,
    title: "ინექციური მანიპულაციები",
    text: "ნემსის გაკეთების სრული ციკლი (კუნთშიდა, კანქვეშა, ინტრავენური) უსაფრთხოების წესების სრული დაცვით.",
    gradient: "from-primary/10 to-accent/5",
  },
  {
    icon: Droplets,
    title: "ინტრავენური ინფუზიური თერაპია",
    text: "ორგანიზმის სითხოვანი და მედიკამენტური ბალანსის აღდგენა (გადასხმა) ექიმის დანიშნულების შესაბამისად, მუდმივი მეთვალყურეობის ქვეშ.",
    gradient: "from-accent/10 to-primary/5",
  },
  {
    icon: Bandage,
    title: "ჭრილობების მართვა",
    text: "რთული ჭრილობების პირველადი და მეორადი დამუშავება, ნახვევების შეცვლა და აღდგენის ხელშემწყობი მეთოდების გამოყენება.",
    gradient: "from-primary/10 to-accent/5",
  },
  {
    icon: CircleDot,
    title: "ინვაზიური დახმარება",
    text: "შარდის ბუშტის კათეტერის დაყენება, შეცვლა ან მოხსნა მაქსიმალური სიფრთხილითა და ჰიგიენური ნორმების დაცვით.",
    gradient: "from-accent/10 to-primary/5",
  },
  {
    icon: Ratio,
    title: "ზონდის ჩადგმა",
    text: "ნაზოგასტრალური ზონდის ჩადგმა და მართვა კლინიკური სტანდარტების დაცვით, პაციენტის კომფორტის მაქსიმალური გათვალისწინებით.",
    gradient: "from-primary/10 to-accent/5",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/15">
            პროფესიული კლასიფიკაცია
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            მომსახურების სფერო
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass-card p-6 sm:p-7 flex flex-col gap-4 hover:shadow-2xl transition-all group relative overflow-hidden cursor-default border border-border/50 hover:border-primary/30"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10 flex flex-col gap-4 w-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:shadow-lg transition-all duration-300 border border-primary/10"
                >
                  <s.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
