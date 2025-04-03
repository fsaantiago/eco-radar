import React, { useRef } from "react";
import About from "@/views/About";
import Projects from "@/views/Projects";
import MidiaCard from "@/components/midiacard";
import Contact from "@/views/Contact";
import Experience from "@/views/Experience";

interface StartProps {
    scrollToSection: React.MutableRefObject<{ [key: string]: () => void }>;
}

const Start: React.FC<StartProps> = ({ scrollToSection }) => {
    const aboutRef = useRef<HTMLElement>(null);
    const projectsRef = useRef<HTMLElement>(null);
    const midiaRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);
    const experienceRef = useRef<HTMLElement>(null);

    scrollToSection.current = {
        about: () => aboutRef.current?.scrollIntoView({ behavior: "smooth" }),
        projects: () => projectsRef.current?.scrollIntoView({ behavior: "smooth" }),
        midia: () => midiaRef.current?.scrollIntoView({ behavior: "smooth" }),
        contact: () => contactRef.current?.scrollIntoView({ behavior: "smooth" }),
        experience: () => experienceRef.current?.scrollIntoView({ behavior: "smooth"}),
    };

    return (
        <div>
            <section ref={aboutRef}><About/></section>
            <section ref={midiaRef}><MidiaCard/></section>
            <section ref={projectsRef}><Projects/></section>
            <section ref={experienceRef}><Experience/></section>
            <section ref={contactRef}><Contact/></section>
        </div>
    );
};

export default Start;
