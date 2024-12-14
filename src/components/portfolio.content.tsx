import { IPortfolio } from "@/types/types";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const PortfolioContent = (props: IPortfolio) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </Link>

        {/* Project Details Container */}
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
          {/* Project Header */}
          <div className="relative">
            <img
              src={props.image || "./public/portfolio/interno.jpg"}
              alt={props.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
              <h1 className="text-4xl font-bold text-white">{props.title}</h1>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-8">
            {/* Technology Stack */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {props.technology?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Description */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Project Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {props.description}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Project Details (Optional) */}
        <div className="max-w-4xl mx-auto mt-12 bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Project Highlights
          </h2>
          <ul className="space-y-4 text-gray-700 list-disc list-inside">
            <li>Implemented responsive design using modern web technologies</li>
            <li>Optimized performance and user experience</li>
            <li>
              Followed best practices in code organization and development
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
