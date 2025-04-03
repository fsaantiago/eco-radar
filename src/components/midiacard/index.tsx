import React from "react";
import { techStack } from "@/constants";

export default function Skills() {
    return (
        <div className="bg-gray-950 text-white py-12">
            <h2 className="text-center text-5xl font-bold mb-20 fontLato">My skills</h2>

            <div className="pl-14 grid grid-cols-5 gap-4 max-w-5xl mx-auto">
                {techStack.map((tech, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center justify-center h-20 w-24 transform transition-all scale-90 hover:scale-105 group"
                    >
                        <span className="absolute bottom-full mb-2 px-2 py-1 text-sm bg-black bg-opacity-75 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {tech.desc}
                        </span>

                        <img
                            src={tech.link}
                            alt={tech.name}
                            className="h-20 w-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
