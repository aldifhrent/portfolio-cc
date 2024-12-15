import { skills } from "../const/const";
import SkillCard from "./skills.card";

export default function MySkills() {
  // Kelompokkan skills berdasarkan kategori
  // Update the filter conditions to match the category names in the `skills` array

  const frontEndSkills = skills.filter(
    (skill) => skill.category === "Front End"
  );
  const backEndSkills = skills.filter((skill) => skill.category === "Back End");
  const devOpsSkills = skills.filter((skill) => skill.category === "Dev Ops");

  return (
    <section className="container w-screen mx-auto mt-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl">
          My <span className="font-bold">Skills</span>
        </h1>

        {/* Front-End Skills */}
        <div className="mt-[50px]">
          <h2 className="text-3xl font-bold">Front-End</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 lg:gap-[71.5px] mt-4">
            {frontEndSkills.map((value, idx) => (
              <SkillCard key={idx} image={value.image} title={value.title} />
            ))}
          </div>
        </div>

        {/* Back-End Skills */}
        <div className="mt-[60px]">
          <h2 className="text-3xl font-bold">Back-End</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 lg:gap-[71.5px] mt-4">
            {backEndSkills.map((value, idx) => (
              <SkillCard key={idx} image={value.image} title={value.title} />
            ))}
          </div>
        </div>

        {/* DevOps Skills */}
        <div className="mt-[60px]">
          <h2 className="text-3xl font-bold">DevOps</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 lg:gap-[71.5px] mt-4">
            {devOpsSkills.map((value, idx) => (
              <SkillCard key={idx} image={value.image} title={value.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
