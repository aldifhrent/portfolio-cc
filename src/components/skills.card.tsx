import { ISkillCard } from "@/types/types";

export default function SkillCard(props: ISkillCard) {
  return (
    <div className="group px-[24px] py-[37px] min-w-[186px] h-[186px] border-2 border-black rounded-lg hover:bg-black cursor-pointer">
      <div className="flex flex-col gap-[37px] items-center justify-center h-full">
        <img
          src={props.image || ""}
          alt={props.title}
          width={56}
          height={56}
          className="group-hover:invert"
        />
        <h1 className="text-xl font-bold text-black group-hover:text-white">
          {props.title}
        </h1>
      </div>
    </div>
  );
}
