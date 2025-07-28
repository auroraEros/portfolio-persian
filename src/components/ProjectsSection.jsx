import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "../helpers/constants";
import ProjectsCarousel from "./ProjectsCarosel";
import { useState } from "react";
import { cn } from "../lib/utils";
import { capitalize } from "../helpers/capitalizeText";

function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = ["all", "react.js", "next.js", "javaScript", "html&Css"];
  const selectedProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          {" "}
          <span className="text-primary"> پروژه‌های </span> منتخب
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          در اینجا چند نمونه از پروژه‌های اخیرم رو می‌بینید. هر پروژه با دقت
          زیاد، تمرکز روی عملکرد و تجربه کاربری عالی ساخته شده.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {capitalize(category)}
            </button>
          ))}
        </div>

        <ProjectsCarousel projects={selectedProjects} />

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            <ArrowLeft size={16} />
            <span> بازدید از گیت هاب</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
