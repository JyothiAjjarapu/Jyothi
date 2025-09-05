import ProjectsCard from "./ProjectsCard";
import "./css/projects.css";
import profilePic from './assets/jyo-linkedin.jfif';

export default function Projects() {
    return (
        <div className="projects-section">           
                
            <ProjectsCard                 
                title = {"Project Title"}
                image = {profilePic}
                description = {"This is a brief description of the project."} />

            <ProjectsCard                 
                title = {"Project Title"}
                image = {"path/to/image.jpg"}
                description = {"This is a brief description of the project."} />

            <ProjectsCard                 
                title = {"Project Title"}
                image = {"path/to/image.jpg"}
                description = {"This is a brief description of the project."} />

            <ProjectsCard                 
                title = {"Project Title"}
                image = {"path/to/image.jpg"}
                description = {"This is a brief description of the project."} />
        </div>
        
    )
}