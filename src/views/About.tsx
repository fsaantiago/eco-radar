import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import profile from "@/assets/contacts/profile-about.png";
import linkedin from "@/assets/contacts/linkedin.png";
import gmail from "@/assets/contacts/gmail-logo.png";

export default function About() {
    const [anchorElResume, setAnchorElResume] = useState<null | HTMLElement>(null);
    const isResumeMenuOpen = Boolean(anchorElResume);

    const handleResumeMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElResume(event.currentTarget);
    };

    const handleResumeMenuClose = () => {
        setAnchorElResume(null);
    };

    return (
        <div className="bg-gray-950 text-white w-auto h-auto flex flex-col items-center px-8 py-16">
            <div className="flex justify-between w-full max-w-6xl">
                <div className="flex flex-col">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl fontLatoBold">Fernando Santiago</h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-500 mt-2 fontPoppins">
                        Full Stack Developer
                    </h2>

                    <div className="flex space-x-6 mt-6">
                        <a
                            href="https://github.com/fsaantiago"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.235 1.84 1.235 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.52.117-3.176 0 0 1.007-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.046.137 3.003.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.656.243 2.873.12 3.176.77.84 1.23 1.91 1.23 3.221 0 4.61-2.806 5.625-5.478 5.92.43.372.824 1.102.824 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.192.694.8.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/fernando-santiago-aa7b3b1b4/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400"
                        >
                            <img
                                src={linkedin}
                                alt="Linkedin"
                                className="w-8 h-8"
                            />
                        </a>
                        <a
                            href="mailto:fernando.santiago770@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400"
                        >
                            <img
                                src={gmail}
                                alt="Gmail"
                                className="w-8 h-8"
                            />
                        </a>
                    </div>

                    <button
                        className="mt-6 w-36 h-12 bg-blue-500 text-white px-4 py-2 rounded-xl text-lg hover:bg-blue-600"
                        onClick={handleResumeMenuOpen}
                    >
                        My Resume
                    </button>

                    <Menu
                        anchorEl={anchorElResume}
                        open={isResumeMenuOpen}
                        onClose={handleResumeMenuClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        sx={{
                            "& .MuiPaper-root": {
                                backgroundColor: "black",
                                color: "white",
                            },
                        }}
                    >
                        <MenuItem
                            onClick={handleResumeMenuClose}
                            component="a"
                            href="https://drive.google.com/file/d/1QpSlWrKE31r-sDraUCKN3VC-jrZlQR3W/view"
                            target="_blank"
                            sx={{
                                "&:hover": {backgroundColor: "gray", color: "white"},
                            }}
                        >
                            English Version
                        </MenuItem>
                        <MenuItem
                            onClick={handleResumeMenuClose}
                            component="a"
                            href="https://drive.google.com/file/d/1LlHsfSQtBp5_HqchO191r8X_AK5Iorus/view"
                            target="_blank"
                            sx={{
                                "&:hover": {backgroundColor: "gray", color: "white"},
                            }}
                        >
                            Portuguese Version
                        </MenuItem>
                    </Menu>
                </div>

                <div
                    className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden transition-all duration-300">
                    <img
                        src={profile}
                        alt="Fernando Santiago"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="w-full max-w-6xl mt-12 px-4 sm:px-8 text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 fontLatoBold text-center md:text-left">About</h3>
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed sm:ml-6 md:ml-12 fontPoppins text-center md:text-left">
                    I’m a Brazilian Software Developer with{" "}
                    <span className="text-blue-500">Back-end</span>,{" "}
                    <span className="text-blue-500">Front-end</span>, and{" "}
                    <span className="text-blue-500">Mobile</span> skills. Currently working as a{" "}
                    <span className="text-blue-500">Software Engineering intern</span>{" "}
                    in a fintech startup, I’ve worked as a freelancer for
                    third-party companies and also had professional experience
                    in other tech, banking, and public companies.
                </p>
            </div>
        </div>
    );
}
