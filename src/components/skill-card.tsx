interface ISkillCard {
  image: string | null;
  title: string;
}

export default function SkillCard(props: ISkillCard) {
  return (
    <div className="px-[24px] py-[37px] w-[186px] h-[186px] border-2 border-black rounded-lg">
      <div className="flex flex-col gap-[37px] items-center justify-center">
        <img src={props.image || ""} alt={props.title} width={56} height={56} />
        <h1 className="text-xl font-bold">{props.title}</h1>
      </div>
    </div>
  );
}
