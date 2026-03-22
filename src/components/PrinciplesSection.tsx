import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Clock } from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "კლინიკური კომპეტენცია",
    text: "ჩვენი გუნდი შედგება პრაქტიკოსი სპეციალისტებისგან, რომელთა გამოცდილებაც კრიტიკული მედიცინისა და ინტენსიური თერაპიის სფეროებში მაღალკვალიფიციური დახმარების გარანტიაა.",
  },
  {
    icon: Sparkles,
    title: "სტერილობის აბსოლუტური პროტოკოლი",
    text: "ასეპტიკისა და ანტისეპტიკის ნორმების მკაცრი დაცვა. ჩვენი მუშაობის პროცესი სრულად გამჭვირვალეა და ეფუძნება საერთაშორისო ჰიგიენურ სტანდარტებს.",
  },
  {
    icon: Clock,
    title: "დროითი რეგლამენტი",
    text: "ოპერატიული რეაგირება და პროცესების ზუსტი დაგეგმვა ჩვენი მომსახურების განუყოფელი ნაწილია. ჩვენ პატივს ვცემთ პაციენტის დროს და უზრუნველყოფთ ასისტენციას დათქმულ ვადებში.",
  },
];

const PrinciplesSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-14"
        >
          ფუნდამენტური პრინციპები
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center">
                <p.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
