import { motion } from "framer-motion";
import { PhoneCall, ClipboardCheck, HeartPulse } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    num: "01",
    title: "რეზერვირება",
    text: "სატელეფონო კავშირის მეშვეობით ირჩევთ საჭირო პროცედურას და თქვენთვის სასურველ დროს.",
  },
  {
    icon: ClipboardCheck,
    num: "02",
    title: "ვერიფიკაცია",
    text: "ჩვენი სპეციალისტი ახდენს სამედიცინო დანიშნულების გადამოწმებას და დეტალების დაზუსტებას.",
  },
  {
    icon: HeartPulse,
    num: "03",
    title: "ინტერვენცია",
    text: "პერსონალიზებული სამედიცინო დახმარების გაწევა დათქმულ ვადებში, უსაფრთხოების სტანდარტების სრული დაცვით.",
  },
];

const StepsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted/30 to-background" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/15">
            პროცესი
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            მომსახურების სამი ნაბიჯი
          </h2>
        </motion.div>

        <div className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-start">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full h-full bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 origin-left"
            />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="flex-1 text-center relative"
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ duration: 0.25 }}
                className="w-24 h-24 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-card to-muted border-2 border-primary/15 flex items-center justify-center relative z-10 shadow-lg group cursor-default"
              >
                <s.icon className="w-9 h-9 text-primary transition-transform duration-300 group-hover:scale-110" />
              </motion.div>
              <span className="text-xs font-bold text-primary tracking-widest">{s.num}</span>
              <h3 className="text-base font-semibold text-foreground mt-1 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground max-w-[260px] mx-auto">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
