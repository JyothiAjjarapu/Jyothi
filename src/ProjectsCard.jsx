import "./css/projects.css";


export default function ProjectsCard({title, image, description, techstack}) 
{
    return(
        <div className="project-card">
            <h2> {title} </h2>
            <img src= {image} alt="Project-image"  />
            <p>  {description} </p>
            <div className="techstack-buttons">
                {techstack.map((tech, index) => (
                <button key={index} className="button">
                    {tech}
                </button>
                ))}
            </div>
        </div>         
    )
}