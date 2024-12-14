import Header from "@/components/header";
import PortfolioContent from "@/components/portfolio.content";
import { portfolioData } from "@/const/const";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";

export default function PortfolioPage() {
  const { id } = useParams();
  const project = portfolioData.find(
    (item) => item.id === parseInt(id || "", 10)
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Project Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The project you're searching for doesn't exist.
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            <ArrowLeft className="mr-2" size={24} />
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <PortfolioContent
        image={project.image || ""}
        title={project.title}
        description={project.description}
        technology={project.technology}
      />
    </div>
  );
}
