import { IPortfolio } from "@/types/types";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router";

export const PortfolioCard = (props: IPortfolio) => {
  const id = Number(props.id) || 0;
  const formattedId = id.toString().padStart(2, "0");

  const isEven = Number(id) % 2 === 0;

  return (
    <div
      className={`flex pl-4 lg:pl-0  justify-between gap-12 xl:gap-[104px] items-center *:
        ${isEven ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"} `}
    >
      <img src={props.image} className="w-[400px] h-[350px] rounded-lg" alt={props.title} />
      <div className="flex flex-col text-white py-0 lg:py-[110px] gap-7 mt-10">
        <h1 className="text-[20px] lg:text-5xl font-bold">{formattedId}</h1>
        <h2 className="text-[20px] lg:text-[32px] font-bold text-nowrap">
          {props.title}
        </h2>
        <div className="flex gap-4">
          {props.technology?.map((tech, idx) => (
            <p key={idx} className="bg-emerald-500 p-1 rounded-sm">
              {tech}
            </p>
          ))}
        </div>
        <p className="text-zinc-500 text-base">{props.description}</p>
        <Link to={`/portfolio/${props.id}`}>
          <ExternalLink />
        </Link>
      </div>
    </div>
  );
};
