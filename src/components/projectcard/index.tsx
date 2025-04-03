import React from "react";
import projects from "@/assets/dto/projectsDTO";

export default function ProjectCard() {
    const displayedProjects = projects.slice(0, 4);

    return (
        <div className="bg-gray-950 py-16">
            <div className="max-w-7xl mx-auto flex flex-col text-center items-center px-4 sm:px-6 lg:px-8">
                <h2 className="fontMontserrat text-4xl font-bold text-white mb-12">Portfolio</h2>

                <div className="grid grid-cols-2 gap-x-[58px] gap-y-[65px]">
                    {displayedProjects.map((project, index) => (
                        <div
                            key={index}
                            className="relative w-[401px] h-[389px] border-[3px] border-gray-500 rounded-[14px] overflow-hidden group"
                        >
                            <img
                                src={project.src}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-white">
                                <h3 className="text-xl font-bold">{project.name}</h3>
                                <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <a
                    href="https://github.com/fsaantiago?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white w-42 h-11 flex items-center justify-center px-6 py-2 rounded-lg text-lg mt-8 hover:bg-blue-600"
                >
                    More Projects
                </a>
            </div>
        </div>
    );
}
