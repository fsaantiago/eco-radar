import React from "react";
import Container from "@/components/containercss";

export default function Footer() {
    return (
        <Container>
            <footer className="bg-gray-950 w-auto h-auto text-center p-4 -mt-4 text-xl text-white fontLato ">
                <p>Desenvolvido por <span>
                    <a href="https://github.com/fsaantiago"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="hover:underline"
                    >
                        Fernando Santiago
                    </a>
                </span>
                </p>
            </footer>
        </Container>
    );
};
