import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Header.css";

function Header() {
    const navigate = useNavigate();
    
    const url = window.location.href.split('/');;
    const path = url.pop() || url.pop();

    const [hambuergerStatus, setHamburgerStatus] = useState();

    function handleHamburger() {
        console.log("HAMBURGER TOGGLED");
    }

    return (
        <header>
            <nav>
                <div className="header-content">
                    <button onClick={() => navigate("/")} className={"header-tag " + (url.length === 2 ? "current-page": "")}>Home</button>
                    <button onClick={() => navigate("/about")} className={"header-tag " + (path === "about" ? "current-page": "")}>About</button>
                    <button onClick={() => navigate("/projects")} className={"header-tag " + (path === "projects" ? "current-page": "")}>Projects</button>
                    <button onClick={() => navigate("/contact")} className={"header-button " + (path === "contact" ? "current-page": "")}>Contact</button>
                    <div className="hamburger-icon" onClick={handleHamburger}>
                        <span className="hamburger-bar-1"/>
                        <span className="hamburger-bar-2"/>
                        <span className="hamburger-bar-3"/>
                    </div>
                </div>
            </nav>
            <div className="hamburger-menu">

            </div>
        </header>
    )
}

export default Header;