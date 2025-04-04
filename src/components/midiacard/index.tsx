import React from "react";
import { techStack } from "@/constants";

export default function Skills() {
    return (
        <div className="bg-gray-950 w-full h-auto mx-auto text-white py-12 px-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-20 fontLato">My skills</h2>

            <div className="grid grid-cols-5 gap-4 max-w-5xl mx-auto">
                {techStack.map((tech, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center justify-center transform transition-all scale-90 hover:scale-105 group"
                    >
                        <span className="absolute bottom-full mb-2 px-2 py-1 text-sm bg-black bg-opacity-75 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {tech.desc}
                        </span>

                        <img
                            src={tech.link}
                            alt={tech.name}
                            className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300
                                w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
