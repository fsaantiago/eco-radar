import React from "react";
import expDTO from "@/assets/dto/ExperienceDTO";

export default function Experience() {
    return (
        <div className="bg-gray-950 text-white w-auto h-auto flex flex-col items-center px-4 py-12">
            <h1 className="text-5xl font-bold mb-14 fontLatoBold">Work Experience</h1>

            <div className="max-w-6xl w-full flex flex-col space-y-8">
                {expDTO.map((experience: {
                    year: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
                    occupation: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
                    company: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
                    desc: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
                }, index: React.Key | null | undefined) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-start md:space-x-8 ">
                        <div className="fontPoppinsBold text-2xl md:w-1/4 grid text-right">
                            <p>{experience.year}</p>
                        </div>

                        <div className="md:w-3/4 border-l-2 border-gray-500 pl-4">
                            <h2 className="fontPoppinsBold text-2xl">{experience.occupation}</h2>
                            <p className="fontLatoItalic text-xl text-gray-300">{experience.company}</p>
                            <p className="text-gray-400 text-xl mt-2 whitespace-pre-line fontPoppinsLight">{experience.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <a
                href="https://www.linkedin.com/in/fernando-santiago/details/experience/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg mt-8 hover:bg-blue-600 fontPoppins">
                Linkedin
            </a>
        </div>
    );
}
