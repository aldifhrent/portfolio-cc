import { portfolioData } from "../const/const";
import { PortfolioCard } from "./portfolio.card";

export default function Portfolio() {
  return (
    <section className="mt-[60px] lg:px-[112px] w-screen min-h-fit mx-auto bg-black">
      <div>
        <div className="flex flex-col items-center justify-center px-10 lg:px-[80px] py-[60px]">
          <h1 className="text-5xl text-white text-center">
            My <span className="font-bold">Projects</span>
          </h1>

          <div className="grid grid-cols-1 items-center justify-center mt-[90px] gap-y-10  ">
            {portfolioData.map((porto, index) => (
              <PortfolioCard
                key={index}
                image={porto.image}
                id={porto.id}
                title={porto.title}
                description={porto.description}
                website={porto.website}
                technology={porto.technology}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
