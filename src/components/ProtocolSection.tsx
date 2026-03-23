import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-14"
        >
          კლინიკური პროტოკოლის დინამიკა
        </motion.h2>

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
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0">
                    {s.num}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{s.title}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform ${
                    active === i ? "rotate-180" : ""
                  }`}
                />
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

        {/* Desktop: Tabs */}
        <div className="hidden md:grid md:grid-cols-[240px_1fr] gap-6">
          <div className="flex flex-col gap-3">
            {stages.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left px-5 py-4 rounded-lg text-sm font-medium transition-all ${
                  active === i
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-muted-foreground hover:bg-card/80 border border-border/50"
                }`}
              >
                ეტაპი {s.num}
                <span className="block text-xs mt-0.5 opacity-80">{s.title}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-8"
          >
            {active !== null && (
              <>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  ეტაპი {stages[active].num}: {stages[active].title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{stages[active].text}</p>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProtocolSection;
