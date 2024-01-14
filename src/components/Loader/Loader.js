import React, { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

import "./Loader.css";

function Loader(props) {
    const [isLoaded, setIsLoaded] = useState();

    useEffect(() => {
        setIsLoaded(true);
      }, [isLoaded])

    function renderContent() {
        if (isLoaded) {
            return (props.children.map((child, index) => <div key={index}>{child}</div>))
        }
        else {
            return (
                <div className="loader-container">
                    <div className="loader-content">
                        <PropagateLoader color="#007AFF" />
                    </div>
                </div>
            )
        }
    }

    return (renderContent())
}

export default Loader;