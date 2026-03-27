import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";

const stages = [
  {
    num: "I",
    title: "ვალიდაცია და ანამნეზი",
    text: "ნებისმიერი ინტერვენცია იწყება სამედიცინო დანიშნულების ვერიფიკაციითა და პაციენტის მიმდინარე სტატუსის შეფასებით. ჩვენ არ ვახორციელებთ მხოლოდ პროცედურას - ჩვენ ვადასტურებთ მის კლინიკურ მიზანშეწონილობას.",
  },
  {
    num: "II",
    title: "პერსონალიზებული მოდელირება",
    text: "მანიპულაციის ტექნიკა და მასალების შერჩევა ხდება ინდივიდუალურად. ინფუზიური თერაპიის სიჩქარე, ინექციის ანატომიური წერტილი და სახვევი მასალის ტიპი იგეგმება პაციენტის ბიოლოგიური თავისებურებების გათვალისწინებით.",
  },
  {
    num: "III",
    title: "პოსტ-პროცედურული მონიტორინგი",
    text: "ვიზიტი არ სრულდება მანიპულაციის დასრულებით. ჩვენ ვუზრუნველყოფთ პაციენტის მდგომარეობის დინამიკურ დაკვირვებას ინტერვენციის შემდგომ პერიოდში, რათა გამოირიცხოს ნებისმიერი გვერდითი რეაქცია.",
  },
];

const ProtocolSection = () => {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (i: number) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/60 via-muted/30 to-background" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/15">
            პროტოკოლი
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            კლინიკური პროტოკოლის დინამიკა
          </h2>
        </motion.div>

        {/* Mobile: Accordion */}
        <div className="md:hidden space-y-3">
          {stages.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 shadow-sm">
                    {s.num}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{s.title}</span>
                </div>
                <motion.div
                  animate={{ rotate: active === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </motion.div>
              </button>
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {s.text}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Interactive steps */}
        <div className="hidden md:block">
          {/* Step indicators */}
          <div className="flex items-center justify-center gap-0 mb-10">
            {stages.map((s, i) => (
              <div key={i} className="flex items-center">
                <motion.button
                  onClick={() => setActive(i)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    active === i
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-card text-muted-foreground hover:bg-muted border border-border/50"
                  }`}
                >
                  {active === i ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <span className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center text-[10px] font-bold">
                      {s.num}
                    </span>
                  )}
                  {s.title}
                </motion.button>
                {i < stages.length - 1 && (
                  <div className="w-8 h-px bg-border mx-2" />
                )}
              </div>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {active !== null && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="glass-card p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
                <div className="flex items-start gap-5">
                  <span className="text-5xl font-bold text-primary/10 leading-none shrink-0">
                    {stages[active].num}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {stages[active].title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                      {stages[active].text}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProtocolSection;
