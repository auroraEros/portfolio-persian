import { Code, Palette, Wand } from "lucide-react";
import FeatureCard from "./FeatureCard";
import ProfileIntro from "./ProfileIntro";

function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          درباره <span className="text-primary"> من</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
          {" "}
          <ProfileIntro />
          <div className="grid grid-cols-1 gap-6">
            <FeatureCard
              icon={<Code className="h-6 w-6 text-primary" />}
              title="توسعه وب"
            >
              ساخت وب‌سایت‌هایی واکنش‌گرا و قابل دسترس با React ,Tailwind و
              ابزارهای مدرن فرانت‌اند.
            </FeatureCard>

            <FeatureCard
              icon={<Palette className="h-6 w-6 text-primary" />}
              title="پیاده‌سازی رابط کاربری"
            >
              تبدیل طرح‌های Figma به کامپوننت‌های تمیز و کاربردی با دقت و توجه
              به جزئیات.
            </FeatureCard>

            <FeatureCard
              icon={<Wand className="h-6 w-6 text-primary" />}
              title="یادگیری و پیشرفت"
            >
              همیشه در حال یادگیری تکنولوژی‌های جدید و بهتر کردن مهارتم هستم تا
              تجربه‌های بهتری برای کاربران بسازم.
            </FeatureCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
