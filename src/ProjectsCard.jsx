import "./css/projects.css";


export default function ProjectsCard({title, image, description}) {
    return(
        <div className="project-card">
            <h2 style={{textAlign: "center",  width: "100%" }}> {title} </h2>
            <img src= {image} alt="Project-image" style={{ display: "block", margin: "0 auto", width: "100%" }}  />
            <p>  {description} </p>
        </div>         
    )
}