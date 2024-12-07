interface IExperienceProps {
  role: string;
  company: string;
  description: string;
  date: string;
}

export default function ExperienceCard(experience: IExperienceProps) {
  return (
    <div className="px-2 py-[30px] border-[1px] min-w-[400px] max-h-[600px] rounded-lg">
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-y-[30px]">
          <div className="flex items-center gap-[30px]">
            <img src="./google.svg" className="w-8 h-8" alt="Google Logo" />
            <h1 className="text-lg text-white lg:text-2xl text-nowrap">
              {experience.company} at ${experience.company}
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
