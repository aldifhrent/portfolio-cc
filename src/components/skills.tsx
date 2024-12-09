import { skills } from "../const/const";
import SkillCard from "./skills.card";

export default function MySkills() {
  return (
    <section className="py-[60px] px-6 lg:px-[112px] max-w-screen mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl">
          My <span className="font-bold">Skills</span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-[102px] gap-10 lg:gap-[71.5px] ">
          {skills.map((value, idx) => (
            <SkillCard key={idx} image={value.image} title={value.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
