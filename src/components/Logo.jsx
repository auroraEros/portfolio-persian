function Logo() {
  return (
    <a
      className="text-xl font-bold text-primary flex items-center group"
      href="#hero"
    >
      <span className="relative z-10">
        <span className="text-glow text-foreground group-hover:text-primary transition-all duration-300 ">
          {" "}
          SaharDev{" "}
        </span>
        <span className="group-hover:text-foreground transition-all duration-300">
          Portfolio
        </span>
      </span>
    </a>
  );
}

export default Logo;
