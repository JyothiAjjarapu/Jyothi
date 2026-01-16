import "./css/projects.css";


export default function ProjectsCard({title, description, techstack}) 
{
    return(
        <div className="project-card">
            <h2> {title} </h2>
            {/* <img src= {image} alt="Project-image"  /> */}
            <br></br>
            <p>  {description} </p>
            <br></br>
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