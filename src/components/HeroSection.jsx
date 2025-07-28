import { ArrowDown } from "lucide-react";
import { cn } from "../lib/utils";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> سلام، </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              سحر
            </span>

            <span className="text-gradient mr-4 opacity-0 animate-fade-in-delay-2">
              جوادی هستم
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
              فرانت‌اند دولوپری در حال رشد که علاقه زیادی به طراحی تمیز و
            رابط‌های کاربرپسند دارم. هنوز دارم مسیرم رو می‌سازم، اما با انگیزه و
            تعهد کامل، هر روز در حال یادگیری، بهتر شدن و ساختن تجربه‌های کاربردی
            و تاثیرگذار توی دنیای وبم.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-3">
            <a href="#projects" className="cosmic-button">
             نمونه کارهای من
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "text-center absolute bottom-8 left-1/2 transform -translate-x-1/2",
          "flex flex-col items-center animate-bounce"
        )}
      >
        <span className="text-sm text-muted-forground mb-2">اسکرول کنید</span>
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
}

export default HeroSection;
