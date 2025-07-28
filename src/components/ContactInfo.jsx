function ContactInfo({ children, href, title, text }) {
  return (
    <li className="flex  items-start gap-x-4">
      <div className="p-3 rounded-full bg-primary/10">{children}</div>
      <div className="space-y-2">
        <h4 className="text-right font-medium">{title}</h4>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-forground hover:text-primary transition-colors duration-300"
        >
          {text}
        </a>
      </div>
    </li>
  );
}

export default ContactInfo;
