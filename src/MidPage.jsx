
import './css/Mainpage.css';
import profilePic from './assets/images/jyo-linkedin.jfif';

import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

export default function MidPage() 
{
    
    return (
       <div className="main-page" >
            <div className="profile">

                <div className="intro" section id="home">

                    <div className="info">

                        <h2 style={{color: "rgb(172, 1, 78)"}}>
                            Hi, I'm Ajjarapu Jyothi 👋
                        </h2>

                        <h1 style={{color:"white"}}>Full Stack Developer</h1>

                        <p style = {{color:"white" ,display: 'flex', flexWrap:'wrap'}}> 
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, sequi?
                            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, vel? */}
                        </p>

                        <button className="btn" style={{backgroundColor: "transparent", border:"1px solid grey"}}>  View my work </button>
                        {"  "}
                        <button className="btn">  Download Resume </button> 
                       
                    </div>

                    <img src={profilePic} />
                </div>

                <div className="about-skills" section id="about">
                    <div>
                         <h1 style={{textAlign:"center"}}> About Me </h1>
                         <br />
                        <div className="about">
                           
                            <p> 
                                
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, ut.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, fugit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, at!
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
                            <button className="btn-skill">  </button>
                            <button className="btn-skill">  </button> 
                            <button className="btn-skill">  </button>
                            <button className="btn-skill">  </button>
                        </div>
                       
                    </div>

                </div>

                <div section id="projects">
                    <Projects />
                </div>

                <div className="experience-contact">

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
