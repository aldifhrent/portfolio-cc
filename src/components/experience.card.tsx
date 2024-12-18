import { IExperienceProps } from "@/types/types";

export default function ExperienceCard(experience: IExperienceProps) {
  return (
    <div className="p-4 sm:p-6 py-[30px] border-[1px]  w-[300px] md:w-[700px] lg:w-[900px] min-h-[200px] rounded-lg flex items-center">
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row  justify-between w-full gap-y-[30px]">
          <div className="flex items-center gap-[30px] ">
            <h1 className="text-xl text-white lg:text-xl font-bold">
              {experience.role} at {experience.company}
            </h1>
          </div>

          {/* Tanggal */}
          <p className="text-white ">{experience.date}</p>
        </div>

        {/* Deskripsi */}
        <p className="text-white text-lg mt-7">{experience.description}</p>
      </div>
    </div>
  );
}
