import ExperienceCard from "./experience.card";

export default function Experience() {
  return (
    <section className="mt-[120px] px-12 lg:px-[112px] max-w-screen min-h-fit mx-auto bg-black">
      <div className="flex flex-col items-center justify-center px-[80px] py-[60px]">
        <h1 className="text-5xl text-white text-center">
          My <span className="font-bold text-nowrap">Experience</span>
        </h1>

        <div className="flex flex-col items-center justify-center mt-[90px] gap-y-[20px]">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </div>
    </section>
  );
}
