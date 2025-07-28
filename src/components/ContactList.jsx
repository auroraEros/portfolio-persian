import { Mail, MapPin, Phone } from "lucide-react";
import ContactInfo from "./ContactInfo";

const contactInfo = [
  {
    title: "ایمیل",
    text: "sahar.javadi.h@gmail.com",
    href: "mailto:sahar.javadi.h@gmail.com",
    icon: <Mail className="w-6 h-6 text-primary" />,
  },
  {
    title: "واتساپ",
    text: "لینک ارتباطی",
    href: "https://wa.me/989122602818",
    icon: <Phone className="h-6 w-6 text-primary" />,
  },
  {
    title: "آدرس",
    text: "ایران, البرز, کرج",
    href: "",
    icon: <MapPin className="h-6 w-6 text-primary" />,
  },
];
function ContactList() {
  return (
    <ul className="space-y-6 justify-center">
      {contactInfo.map((info, key) => (
        <ContactInfo
          key={key}
          title={info.title}
          text={info.text}
          href={info.href}
        >
          {info.icon}
        </ContactInfo>
      ))}
    </ul>
  );
}

export default ContactList;
