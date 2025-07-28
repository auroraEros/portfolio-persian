function ProfileIntro() {
  return (
    <div className="space-y-6 ">
      <h3 className="text-2xl font-semibold">
        برنامه‌نویس رابط کاربری با چاشنی خلاقیت
      </h3>

      <p className="text-muted-foreground">
        من همیشه دنبال اینم که رابط‌های وبی بسازم که هم واکنش‌گرا باشن هم راحت
        برای همه، با استفاده از جدیدترین تکنولوژی‌ها. دائماً دارم مهارت‌هامو
        قوی‌تر می‌کنم تا تجربه بهتری برای کاربرها خلق کنم.
      </p>

      <p className="text-muted-foreground">
        من عاشق اینم که راه‌حل‌های شیک و تمیزی برای مسائل پیچیده پیدا کنم و
        همیشه در حال یادگیری تکنولوژی‌ها و روش‌های جدیدم تا توی دنیای پر تغییر
        وب همیشه یک قدم جلو باشم.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
        <a href="#contact" className="cosmic-button">
          {" "}
          تماس با من
        </a>

        <a
          href="/resume.zip"
          download
          className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
        >
          دانلود رزومه
        </a>
      </div>
    </div>
  );
}

export default ProfileIntro;
