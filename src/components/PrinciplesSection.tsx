import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Clock } from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "კლინიკური კომპეტენცია",
    text: "ჩვენი გუნდი შედგება პრაქტიკოსი სპეციალისტებისგან, რომელთა გამოცდილება კრიტიკულ მედიცინასა და ინტენსიურ თერაპიაში მაღალკვალიფიციური დახმარების გარანტიაა.",
  },
  {
    icon: Sparkles,
    title: "სტერილობის აბსოლუტური პროტოკოლი",
    text: "ასეპტიკისა და ანტისეპტიკის ნორმების მკაცრი დაცვა. ჩვენი მუშაობის პროცესი სრულად გამჭვირვალეა და ეფუძნება საერთაშორისო ჰიგიენურ სტანდარტებს.",
  },
  {
    icon: Clock,
    title: "დროითი რეგლამენტი",
    text: "ოპერატიული რეაგირება და პროცესების ზუსტი დაგეგმვა ჩვენი მომსახურების განუყოფელი ნაწილია. ჩვენ პატივს ვცემთ პაციენტის დროს და ვუზრუნველყოფთ ასისტენციას დათქმულ ვადებში.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" as const },
  }),
};

const PrinciplesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/60 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/15">
            ჩვენი საფუძველი
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            ფუნდამენტური პრინციპები
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass-card p-8 text-center hover:shadow-xl transition-shadow group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center shadow-sm"
                >
                  <p.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
