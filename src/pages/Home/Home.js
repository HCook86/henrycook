import React, { useState, useEffect, useRef } from "react";
import GLOBE from '../../vanta.globe.js'
import * as THREE from "three";

import Loader from "../../components/Loader/Loader.js";
import PageStructure from "../../components/PageStructure/PageStructure";
import SocialIcons from "../../components/SocialIcons/SocialIcons.js";

import "./Home.css";

function Home() {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);

    /* Disable scroll */
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "scroll"
        };
    }, []);

    /* 3D Animation */
    useEffect(() => {
        if (!vantaEffect) {
        setVantaEffect(
            GLOBE({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,

            scale: 0.8,
            scaleMobile: 0.6,
            color: 0x007aff,
            color2: 0x1d1713,
            backgroundColor: 0xEDEDED
            })
        );
        }
        return () => {
        if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <>
            <div className="animation-container" ref={vantaRef}></div>
            <PageStructure>
                <Loader>
                    <div className="name-container" >
                        <div>
                            <h1 className="henry-cook">Henry Cook</h1>
                            <p className="subtitle">Web developer</p>
                        </div>
                    </div>
                    <div className="tablet-social-container">
                        <SocialIcons />
                    </div>
                </Loader>
            </PageStructure>
        </>    
    )
}

export default Home;