import "./Project.css";

function Project(props) {
    return (
        <div className="project-card">
            <h2 className="project-title">{props.title}</h2>
            {props.children}
        </div>
    )
}

export default Project;