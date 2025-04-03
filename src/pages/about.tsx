import React, { useRef } from "react";
import Home from "@/views/About";
import About from "@/views/About";
import Projects from "@/views/Projects";
import MidiaCard from "@/components/midiacard";
import Contact from "@/views/Contact";

interface StartProps {
    scrollToSection: React.MutableRefObject<{ [key: string]: () => void }>;
}

const Start: React.FC<StartProps> = ({ scrollToSection }) => {
    const homeRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const servicesRef = useRef<HTMLElement>(null);
    const midiaRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    scrollToSection.current = {
        home: () => homeRef.current?.scrollIntoView({ behavior: "smooth" }),
        about: () => aboutRef.current?.scrollIntoView({ behavior: "smooth" }),
        services: () => servicesRef.current?.scrollIntoView({ behavior: "smooth" }),
        midiaRef: () => midiaRef.current?.scrollIntoView({ behavior: "smooth" }),
        contact: () => contactRef.current?.scrollIntoView({ behavior: "smooth" }),
    };

    return (
        <div>
            <Home />
            <section ref={aboutRef}><About /></section>
            <section ref={servicesRef}><Projects /></section>
            <section ref={contactRef}><Contact /></section>
            <section ref={midiaRef}><MidiaCard /></section>
        </div>
    );
};

export default Start;
