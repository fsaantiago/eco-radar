import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Main from "../views/Main";
import Emergencia from "../views/Emergencia";
import SaibaMais from "../views/SaibaMais";
import AnaliseTempo from "../views/AnaliseTempo";
import Reports from "../views/Reports";

const Start: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <Sidebar onMenuClick={setActiveIndex} activeIndex={activeIndex} />
            {activeIndex === 0 && <Main />}
            {activeIndex === 1 && <AnaliseTempo />}
            {activeIndex === 2 && <Emergencia />}
            {activeIndex === 3 && <Reports />}
            {activeIndex === 4 && <SaibaMais />}
        </div>
    );
};

export default Start;