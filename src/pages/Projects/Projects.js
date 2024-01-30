import PageStructure from "../../components/PageStructure/PageStructure";

import Project from "../../components/Project/Project";

function Projects () {
    return (
        <PageStructure>
            <h1 className="page-title">Projects</h1>
            <div>
                <Project />
            </div>
        </PageStructure>
    )
}

export default Projects;