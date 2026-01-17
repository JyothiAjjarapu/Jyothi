
import './css/Mainpage.css';
import profilePic from './assets/images/jyo-linkedin.jfif';

import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Education from "./Education";

import { useNavigate } from "react-router-dom";
import { useTheme } from './contexts/ThemeContext';

export default function MidPage() 
{
    const navigate = useNavigate();
    const { theme } = useTheme();

    const textColor = theme === 'light' ? '#000000' : '#ffffff';
    const accentColor = theme === 'light' ? '#929191' : '#880e4f';

    return (
       <div className="main-page" >
            <div className="profile">

                <div className="intro" section id="home">

                    <div className="info">

                        <h2 style={{color: accentColor}}>
                            Hi, I'm Ajjarapu Jyothi 👋
                        </h2>

                        <h1 style={{color: textColor}}>Full Stack Developer</h1>

                        <p style = {{color: textColor ,display: 'flex', flexWrap:'wrap'}}> 
                           front-end focused full stack developer with experience in building web applications using Java, React, SQL, and Docker.
                        </p>

                        <button 
                            className="btn" 
                            style={{backgroundColor: "transparent", border:"1px solid grey"}}
                            onClick={() => navigate("/hobbies")}
                        >  
                            My Hobbies 
                        </button>
                        {"  "}
                        {/* <button className="btn">  Download Resume </button>  */}

                        <a href="/Resume.pdf" download>
                            <button className="btn">Download Resume</button>
                        </a>
                       
                    </div>

                    <img src={profilePic} className="floating" />
                </div>

                <div className="about-skills" section id="about">
                    <div>
                         <h1 style={{textAlign:"center"}}> About Me </h1>
                         <br />
                        <div className="about">
                           
                            <p> 
                            
                               I’m a Full Stack Developer with hands-on experience building web applications using Java, React, SQL and Docker, and working in Linux-based and cloud-connected environments. 
                               My background includes developing user-facing interfaces, backend services and containerized deployments, with a strong focus on writing clean, maintainable code and understanding how systems work end to end.
                              <br /> <br />
                               I hold Masters degree in Computer Science from IIT Jodhpur, where I ranked 1st in my program, and have worked on projects ranging from healthcare systems and multi-container applications to security-focused backend development. 
                               I recently moved to Germany and am currently strengthening my German while staying technically active through projects and continuous learning.
                               I’m interested in junior to mid-level roles in backend or full stack development where I can contribute reliably, learn from experienced teams and grow further in a product-focused environment.
                            
                            </p>
                        </div>
                        
                    </div>

                    <div>
                        <h1 style={{textAlign:"center"}}> Skills </h1>
                            <br />
                        <div className="skills">
                            
                            <button className="btn-skill"> HTML </button>
                            <button className="btn-skill"> CSS </button>
                            <button className="btn-skill"> JavaScript </button>
                            <button className="btn-skill"> React </button> 
                            <button className="btn-skill"> Node JS </button>
                            <button className="btn-skill"> Mongo DB </button>
                            <button className="btn-skill"> Express JS </button>
                            <button className="btn-skill"> Java </button>
                            <button className="btn-skill"> Python </button>
                            <button className="btn-skill"> SQL </button>
                            <button className="btn-skill"> php </button>
                            <button className="btn-skill"> ML </button>
                            <button className="btn-skill"> DataScience </button>
                            <button className="btn-skill"> DevOps </button>
                            <button className="btn-skill"> AWS  </button>
                            <button className="btn-skill"> Kubernetes </button>
                            <button className="btn-skill"> Jenkins </button>
                           
                        </div>
                       
                    </div>

                </div>

                <div section id="projects">
                    
                    <Projects />
                </div>

                <div className="experience-contact">

                    <div section id="Education">
                        <Education />
                    </div>

                    <div section id="experience">                        
                        <Experience />
                    </div>
                    <div section id="contact">
                        <Contact />
                    </div>
                </div>
                
            </div>
        </div>
    )
}
