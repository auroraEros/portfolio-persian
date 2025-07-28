export const SCROLL_THRESHOLD = 10;

export const navItems = [
  { href: "#hero", label: "خانه" },
  { href: "#about", label: "درباره من" },
  { href: "#skills", label: "مهارت‌ها" },
  { href: "#projects", label: "پروژه‌ها" },
  { href: "#contact", label: "ارتباط با من" },
];

export const skills = [
  // Frontend
  { name: "React", icon: "/images/react.png" },
  {
    name: "JavaScript",

    icon: "/images/js.png",
  },
  {
    name: "HTML/CSS",

    icon: "/images/html.png",
  },
  {
    name: "TypeScript",

    icon: "/images/ts.png",
  },
  {
    name: "TailwindCSS",

    icon: "/images/tailwind.png",
  },
  {
    name: "Next.js",

    icon: "/images/next.png",
  },
  // Tools
  {
    name: "Git/GitHub",

    icon: "/images/github.png",
  },
  { name: "Figma", icon: "/images/figma.png" },
  { name: "VS Code", icon: "/images/vsc.png" },
];

export const projects = [
  {
    id: 1,
    title: "پروژه مدیریت بلاگ (با پنل ادمین)",
    description:
      "پلتفرمی ساده و فارسی برای مدیریت بلاگ، مشاهده پست ها برای کاربران عادی همراه پنل ادمین.",
    image: "/projects/next-persian-blog.png",
    tags: ["React Query", "Next.js", "MongoDB", "TailwindCSS "],
    demoUrl: "https://the-wild-oasis-customer-website-drab.vercel.app/",
    githubUrl: "https://github.com/auroraEros/my-blog",
    category: "next.js",
  },
  {
    id: 5,
    title: "اپلیکیشن ورکستان (ارتباط فریلنسر و کارفرما)",
    description:
      "یک اپلیکیشن مدیریت پروژه فریلنسری با احراز هویت، پنل کارفرما و فریلنسر، قابلیت ارسال پروژه، پیشنهاد و گفتگو.",
    image: "/projects/react-workestan.png",
    tags: ["TailwindCSS", "React Router", "React"],
    demoUrl: "https://react-pizza-xi-kohl.vercel.app/",
    githubUrl: "https://github.com/auroraEros/freelancingApp",
    category: "react.js",
  },
  {
    id: 11,
    title: "اپلیکیشن تک‌صفحه‌ای مدیریت داخلی هتل",
    description:
      "اپلیکیشن تک‌صفحه‌ای برای مدیریت داخلی هتلی فرضی با به‌روزرسانی لحظه‌ای و حالت تاریک.",
    image: "/projects/react-admin.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://the-wild-oasis-admin-six.vercel.app/",
    githubUrl: "https://github.com/auroraEros/the_wild_oasis_admin",
    category: "react.js",
  },
  {
    id: 2,
    title: "سایت رزرو هتل",
    description:
      "وب سایت که می‌تونید کابین‌ها رو ببینید، با تاریخ و تعداد مهمون رزرو کنید و با گوگل وارد بشید تا رزروهاتون رو مدیریت کنید.",
    image: "/projects/next-oasis.png",
    tags: ["Next.js", "NextAuth.js", "Supabase", "TailwindCSS"],
    demoUrl: "https://the-wild-oasis-customer-website-drab.vercel.app/",
    githubUrl: "https://github.com/auroraEros/the_wild_oasis_customer_website",
    category: "next.js",
  },
  {
    id: 3,
    title: "سایت پورتفولیو",
    description:
      " وب‌سایت نمونه‌کار شخصی که برای نمایش مهارت‌ها و پروژه‌هام طراحی شده؛ کاملاً ریسپانسیو، سبک و با رابط کاربری مینیمال.",
    image: "/projects/react-portfolio.png",
    tags: ["React", "TailwindCSS", "react-dom", "vite"],
    demoUrl: "https://my-portfolio-nu-ten-56.vercel.app/",
    githubUrl: "https://github.com/auroraEros/my-portfolio",
    category: "react.js",
  },
  {
    id: 4,
    title: "مدیریت بلاگ",
    description:
      "وبلاگ مدرن با Next.js، ویرایشگر پیشرفته، ورود با Clerk، پنل نقش‌محور و ذخیره‌سازی تصویر در Supabase.",
    image: "/projects/next-blog.png",
    tags: ["Next.js", "Clerk", "MongoDB", "TailwindCSS", "Supabase"],
    demoUrl: "https://sahar-blog.vercel.app/",
    githubUrl: "https://github.com/auroraEros/next-blog",
    category: "next.js",
  },

  {
    id: 6,
    title: "اپلیکیشن یادداشت‌برداری ",
    description:
      "یک اپلیکیشن ساده یادداشت‌برداری برای تمرین تایپ‌اسکریپت با قابلیت افزودن، مرتب‌سازی، تکمیل و حذف یادداشت‌ها.",
    image: "/projects/ts.png",
    tags: ["CSS", "React", "TypeScript"],
    demoUrl: "https://aurora-note-app.netlify.app/",
    githubUrl: "https://github.com/auroraEros/note-app-typescript",
    category: "react.js",
  },
  {
    id: 11,
    title: "اپ مدیریت انبار",
    description:
      "اپلیکیشن مدیریت کالا با اصول OOP، دارای امکانات افزودن، حذف و جست‌وجو، با ذخیره‌سازی داده‌ها در localStorage. ",
    image: "/projects/js-inventory.png",
    tags: ["CSS", "HTML5", "JavaScript"],
    demoUrl: "https://aurora-inventory.netlify.app/",
    githubUrl: "https://github.com/auroraEros/Inventory-App-with-OOP",
    category: "javaScript",
  },
  {
    id: 8,
    title: "دموی تپسی",
    description: "صفحه فرود تپسی که با HTML و CSS بازسازی شده است.",
    image: "/projects/tap30-htmlCss.png",
    tags: ["CSS", "HTML5"],
    demoUrl: "https://tap30-demo-teal.vercel.app/",
    githubUrl: "https://github.com/auroraEros/tap30-demo",
    category: "html&Css",
  },

  {
    id: 10,
    title: "بازی تاس مرگ",
    description:
      "یک بازی استراتژیک دو نفره با ترکیبی از رولت روسی و تاس. شانس‌تون رو در مقابل حریف کامپیوتری محک بزنید! ",
    image: "/projects/game-js.png",
    tags: ["CSS", "HTML5", "JavaScript"],
    demoUrl: "https://the-roulette-dice-game.netlify.app/",
    githubUrl: "https://github.com/auroraEros/the-roulette-dice-game",
    category: "javaScript",
  },
];
