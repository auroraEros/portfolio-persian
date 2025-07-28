import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import SocialsList from "./SocialsList";

function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary-30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
          <span className="text-primary">تماس </span> با من
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          اگر ایده‌ای برای پروژه دارید یا مایل به همکاری هستید، خوشحال می‌شم
          باهم صحبت کنیم. همیشه آماده‌ پذیرش فرصت‌های جدید هستم.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8 order-2">
            <h4 className="text-2xl font-semibold mb-6">اطلاعات تماس</h4>
            <ContactList />

            <div className="pt-8">
              <h4 className="font-medium mb-4">با من تماس بگیرید</h4>
              <SocialsList />
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">پیام برای من</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
