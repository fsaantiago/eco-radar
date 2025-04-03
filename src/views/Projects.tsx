import React, { useEffect, useState } from "react";
import projects from "@/assets/dto/projectsDTO";

export default function Projects() {
    const [visibleProjects, setVisibleProjects] = useState(4);
    const isExpanded = visibleProjects === projects.length;

    const handleToggleProjects = () => {
        setVisibleProjects((prev) => (isExpanded ? 4 : Math.min(prev + 2, projects.length)));
    };

    useEffect(() => {
        console.log("Re-render triggered. Visible projects:", visibleProjects);
    }, [visibleProjects]);

    const displayedProjects = projects.slice(0, visibleProjects);

    return (
        <div className="bg-gray-950 py-14">
            <div className="max-w-6xl mx-auto flex flex-col text-center items-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl text-white mb-12 fontLatoBold">Portfolio</h2>

                <div
                    className={`grid grid-cols-2 gap-x-[58px] gap-y-[65px] transition-all duration-500 ease-in-out overflow-hidden ${
                        visibleProjects > 4 ? "max-h-[5000px]" : "max-h-[780px]"
                    }`}
                >
                    {displayedProjects.map((project, index) => (
                        <div
                            key={index}
                            className="relative w-[401px] h-[389px] border-8 border-gray-500 rounded-[14px] overflow-hidden group transition-all duration-700 opacity-0 scale-95"
                            style={{
                                opacity: 1,
                                transform: "scale(1)",
                                transitionDelay: `${index * 100}ms`,
                            }}
                        >
                            <img
                                src={project.src}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />

                            <div
                                className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-white">
                                <h3 className="text-xl fontLatoBold">{project.name}</h3>
                                <p className="text-sm text-gray-300 mt-2 fontPoppins">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 fontPoppins"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleToggleProjects}
                    className="bg-blue-500 text-white w-42 h-11 flex items-center justify-center px-6 py-2 rounded-lg text-lg mt-8 hover:bg-blue-600 transition-all duration-500 fontPoppins"
                >
                    {isExpanded ? "Shrink Projects" : "More Projects"}
                </button>
            </div>
        </div>
    );
}
