import "./Projects.css";

import PageStructure from "../../components/PageStructure/PageStructure";
import Project from "../../components/Project/Project";

function Projects () {
    return (
        <PageStructure>
            <h1 className="page-title">Projects</h1>
            <div className="projects-container">
                <Project title="Project Name">
                    <p>Project Description</p>
                </Project>

                <Project title="Project Name">
                    <p>Project Description</p>
                </Project>

                <Project title="Project Name">
                    <p>Project Description</p>
                </Project>
            </div>
        </PageStructure>
    )
}

export default Projects;