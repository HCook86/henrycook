import "./About.css";

import PageStructure from "../../components/PageStructure/PageStructure";
import Bento from "../../components/Bento/Bento.js";

function About() {
    return (
        <PageStructure>
            <h1 className="page-title">About</h1>
            <Bento />
            
        </PageStructure>
    )
}

export default About;