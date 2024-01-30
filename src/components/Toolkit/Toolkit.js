import "./Toolkit.css";

import Python from "./assets/python.png";
import React from "./assets/react.png";
import JavaScript from "./assets/javascript.png";
import Html from "./assets/html.png";
import Css from "./assets/css.svg";
import Git from "./assets/git.png";
import Flask from "./assets/flask.png";
import SQL from "./assets/sql.png";

function Toolkit() {
    return (
        <>
            <h2>Toolkit</h2>
            <div className="toolkit-container">
                <div className="toolkit-item">
                    <img className="toolkit-img" src={Python} alt="Python"/>
                    <span>Python</span>
                </div>
                <div className="toolkit-item">
                    <img className="toolkit-img" src={Flask} alt="Flask"/>
                    <span>Flask</span>
                </div>
                <div className="toolkit-item">
                    <img className="toolkit-img" src={React} alt="React"/>
                    <span>React</span>
                </div>
                <div className="toolkit-item">
                    <img className="toolkit-img" src={Git} alt="Git"/>
                    <span>Git</span>
                </div>
                <div className="toolkit-item">
                    <img className="toolkit-img" src={JavaScript} alt="JavaScript"/>
                    <span>JavaScript</span>
                </div>
                <div className="toolkit-item">
                    <img className="toolkit-img" src={Html} alt="Html"/>
                    <span>Html</span>
                </div>
                <div className="toolkit-item">
                    <img className="toolkit-img" src={Css} alt="Css"/>
                    <span>Css</span>
                </div>
                <div className="toolkit-item" >
                    <img className="toolkit-img" src={SQL} alt="SQL"/>
                    <span>SQL</span>
                </div>
            </div>
        </>    
    )
}

export default Toolkit;