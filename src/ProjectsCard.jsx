import "./css/projects.css";


export default function ProjectsCard({title, image, description}) {
    return(
        <div className="project-card">
            <h2> {title} </h2>
            <img src= {image} alt="Project-image" />
            <p>  {description} </p>
        </div>         
    )
}