import React from "react";
import Container from "@/components/containercss";

type TopicCardProps = {
    title: string;
    description: string;
};

export default function TopicCard ({ title, description }: TopicCardProps){
    return (
        <Container>
            <div className="bg-secondary text-white rounded-lg p-4 md:p-6 shadow-md mb-4 max-w-sm mx-auto">
                <h3 className="text-lg md:text-xl font-bold">{title}</h3>
                <p className="text-xs md:text-sm mt-2">{description}</p>
            </div>
        </Container>
    );
}
