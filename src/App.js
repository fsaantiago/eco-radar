import React from "react";

import { useState, useEffect, useRef } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./pages/start";
import  './index.css';
import './globals.css';

export default function App() {
    const [loading, setLoading] = useState(true);
    const scrollToSection = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1);

    }, []);

    return (
        <>
            {!loading ? (
                <Router>
                    <Routes>
                        <Route path="/" element={<Start scrollToSection={scrollToSection} />} />
                    </Routes>
                </Router>
            ) : (
                <div className="loading">Carregando...</div>
            )}
        </>
    );
}
