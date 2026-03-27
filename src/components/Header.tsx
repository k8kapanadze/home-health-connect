import { Phone } from "lucide-react";
import ecgLogo from "@/assets/ecg-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <img src={ecgLogo} alt="HOMEDIC" className="w-8 h-8 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-primary">HOMEDIC</span>
            <span className="text-[10px] font-medium text-muted-foreground tracking-widest uppercase">ექთნები ბინაზე გამოძახებით</span>
          </div>
        </div>
        <a
          href="tel:557292542"
          className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">557 29 25 42</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
