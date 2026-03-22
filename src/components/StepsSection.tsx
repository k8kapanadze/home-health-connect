import { motion } from "framer-motion";
import { MousePointerClick, PhoneCall, HeartPulse } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    num: "01",
    title: "იდენტიფიკაცია",
    text: "ირჩევთ სასურველ პროცედურას და დროს.",
  },
  {
    icon: PhoneCall,
    num: "02",
    title: "ვერიფიკაცია",
    text: "სპეციალისტი გიკავშირდებათ კლინიკური დეტალების დასაზუსტებლად.",
  },
  {
    icon: HeartPulse,
    num: "03",
    title: "ინტერვენცია",
    text: "იღებთ პროფესიულ დახმარებას სახლიდან გაუსვლელად.",
  },
];

const StepsSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-14"
        >
          მომსახურების სამი ნაბიჯი
        </motion.h2>

        <div className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-start">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-border" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex-1 text-center relative"
            >
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center relative z-10">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary tracking-widest">{s.num}</span>
              <h3 className="text-base font-semibold text-foreground mt-1 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground max-w-[240px] mx-auto">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
