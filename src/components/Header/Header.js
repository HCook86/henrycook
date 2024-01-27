import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Header.css";

function Header() {
    const navigate = useNavigate();
    
    const url = window.location.href.split('/');;
    const path = url.pop() || url.pop();

    const [hamburgerStatus, setHamburgerStatus] = useState(false);

    function handleHamburger() {
        if (hamburgerStatus) {
            setHamburgerStatus(false);
        }
        else {
            setHamburgerStatus(true);
        }
    }

    const variants_top = {
        open: { opacity: 1, x: 0 },
        closed: { rotate: 45 },
    }
    const variants_center = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0},
    }
    const variants_bottom = {
        open: { opacity: 1, x: 0 },
        closed: { rotate: -45 },
    }

    return (
        <header>
            <nav>
                <div className="header-content">
                    <button onClick={() => navigate("/")} className={"header-tag " + (url.length === 2 ? "current-page": "")}>Home</button>
                    <button onClick={() => navigate("/about")} className={"header-tag " + (path === "about" ? "current-page": "")}>About</button>
                    <button onClick={() => navigate("/projects")} className={"header-tag " + (path === "projects" ? "current-page": "")}>Projects</button>
                    <button onClick={() => navigate("/contact")} className={"header-button"}>Contact</button>
                    <div className="hamburger-icon" onClick={handleHamburger}>
                        <motion.span className="hamburger-bar-1" style={{ originX: 0.04 }}  variants={variants_top} animate={hamburgerStatus ? "closed" : "open"}/>
                        <motion.span className="hamburger-bar-2" variants={variants_center} animate={hamburgerStatus ? "closed" : "open"}/>
                        <motion.span className="hamburger-bar-3" style={{ originX: 0.02 }}  variants={variants_bottom} animate={hamburgerStatus ? "closed" : "open"}/>
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {hamburgerStatus &&
                    <motion.div 
                        initial={{ 
                            width: 300,
                            opacity: 0, 
                        }}
                        animate={{ 
                            width: "100%",
                            opacity: 1, 
                        }}
                        exit={{
                            width: 300,
                            opacity: 0, 
                        }}
                        className="hamburger-menu"
                    >
                        <div className="hamburger-options-container">
                            <div className="hamburger-options-tags">
                                <button onClick={() => navigate("/")} className={"hamburger-header-tag " + (url.length === 2 ? "current-page": "")}>Home</button>
                                <button onClick={() => navigate("/about")} className={"hamburger-header-tag " + (path === "about" ? "current-page": "")}>About</button>
                                <button onClick={() => navigate("/projects")} className={"hamburger-header-tag " + (path === "projects" ? "current-page": "")}>Projects</button>
                            </div>
                            <button onClick={() => navigate("/contact")} className={"hamburger-header-button " + (path === "contact" ? "current-page": "")}>Contact</button>
                        </div>
                    </motion.div>
                }   
            </AnimatePresence>
        </header>
    )
}

export default Header;