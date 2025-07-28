import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
      <p className="text-sm text-muted-foreground flex flex-row-reverse">
        <span>{new Date().getFullYear()}&copy; </span>
        <span>SaharDev. All rights reserved.</span>
      </p>
    </footer>
  );
}

export default Footer;
