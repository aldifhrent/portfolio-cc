interface IPortfolioCard {
  image: string;
  id: number;
  title: string;
  description: string;
  website?: string;
}
export const PortfolioCard = (props: IPortfolioCard) => {
  const formattedId = props.id.toString().padStart(2, "0");
  const isEven = props.id % 2 === 0;
  return (
    <div
      className={`flex flex-col xl:flex-row ${
        isEven ? "flex-row-reverse" : "flex-row"
      } justify-between gap-0 xl:gap-[104px]`}
    >
      <img src={props.image} className="w-[500px]" />
      <div className="flex flex-col  text-white py-0 lg:py-[110px] gap-7">
        <h1 className="text-[20px] lg:text-5xl font-bold">{formattedId}</h1>
        <h2 className="text-[20px] lg:text-[32px] font-bold text-nowrap">
          {props.title}
        </h2>
        <p className="text-zinc-500 text-base">{props.description}</p>
      </div>
    </div>
  );
};
