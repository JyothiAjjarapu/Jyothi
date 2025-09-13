import ProjectsCard from "./ProjectsCard";
import "./css/projects.css";
import profilePic from './assets/images/jyo-linkedin.jfif';

export default function Projects() 
{
    return (
        <div className="projects-section">           
                
            <ProjectsCard                 
                title = {"Project Title"}
                image = {profilePic}
                description = {"This is a brief description of the project."+
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ipsum! "} 
                techstack={["React", "TailwindCSS", "Node.js"]}
            />

            <ProjectsCard                 
                title = {"Project Title"}
                image = {profilePic}
                description = {"This is a brief description of the project."
                    + "Lorem ipsum dolor sit amet consectetur adipisicing elit." +"Aliquam facilis est modi praesentium autem quaerat hic recusandae non assumenda molestiae."+
                    +"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, ex!"+"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, esse."
                }
                techstack={["React", "TailwindCSS", "Node.js", "Express.js", "MongoDB"]} 
            />

            <ProjectsCard                 
                title = {"Project Title"}
                image = {"path/to/image.jpg"}
                description = {"This is a brief description of the project."} 
                techstack={["React", "TailwindCSS", "Node.js"]}
            />

            <ProjectsCard                 
                title = {"Project Title"}
                image = {"path/to/image.jpg"}
                description = {"This is a brief description of the project."} 
                techstack={["React", "TailwindCSS", "Node.js"]}
            />

            <ProjectsCard                 
                title = {"Project Title"}
                image = {"path/to/image.jpg"}
                description = {"This is a brief description of the project."} 
                techstack={["React", "TailwindCSS", "Node.js"]}
            />

            <ProjectsCard                 
                title = {"Project Title"}
                image = {"path/to/image.jpg"}
                description = {"This is a brief description of the project."} 
                techstack={["React", "TailwindCSS", "Node.js"]}
            />
        </div>
        
    )
}