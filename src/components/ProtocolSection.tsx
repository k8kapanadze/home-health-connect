import { motion } from "framer-motion";
import { useState } from "react";

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
  const [active, setActive] = useState(0);

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

        <div className="grid md:grid-cols-[240px_1fr] gap-6">
          <div className="flex md:flex-col gap-3">
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
            <h3 className="text-lg font-semibold text-foreground mb-2">
              ეტაპი {stages[active].num}: {stages[active].title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{stages[active].text}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProtocolSection;
