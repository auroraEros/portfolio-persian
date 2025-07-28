import { skills } from "../helpers/constants";

function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">مهارت‌های </span> من
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="bg-card w-30 h-30  justify-self-center flex justify-center items-center rounded-full card-hover shadow-xs"
            >
              <h3 className="flex flex-col items-center gap-y-2">
                <img src={skill.icon} alt={skill.name} width={40} height={40} />
                <span>{skill.name}</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
