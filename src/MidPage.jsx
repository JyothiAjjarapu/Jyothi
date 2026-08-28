
import './css/Mainpage.css';
import profilePic from './assets/images/jyo-linkedin.jfif';

import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Education from "./Education";
import Skills from "./Skills";
import About from "./About";

import { useNavigate } from "react-router-dom";

export default function MidPage() 
{
    const navigate = useNavigate();

    return (
       <div className="main-page" >
            <div className="profile">

                <div className="intro" id="home">

                    <div className="info">

                        <h2 style={{color: 'var(--accent-color)'}}>
                            Hi, I'm Jyothi Ajjarapu 👋
                        </h2>

                        <h1 style={{color: 'var(--text-color)'}}>Full Stack Developer</h1>

                        <p style = {{color: 'var(--text-color)' ,display: 'flex', flexWrap:'wrap'}}>
                           Full stack developer building web applications with Java, Spring Boot, React and SQL — currently deepening my backend and cloud expertise.
                        </p>

                        <button
                            className="btn"
                            style={{background: "transparent", color: 'var(--text-color)', border:"1px solid var(--border-color)", boxShadow: "none"}}
                            onClick={() => navigate("/hobbies")}
                        >
                            My Hobbies
                        </button>
                        {"  "}
                       
                        <a href="/Jyothi Ajjarapu Resume.pdf" download>
                            <button className="btn">Download Resume</button>
                        </a>
                       
                    </div>

                    <img src={profilePic} className="floating" />
                </div>

                <div className="about-skills" id="about">
                    <About />
                    <Skills />
                </div>

                <div id="projects">
                    
                    <Projects />
                </div>

                <div className="experience-contact">

                    <div id="Education">
                        <Education />
                    </div>

                    <div id="experience">                        
                        <Experience />
                    </div>
                    <div id="contact">
                        <Contact />
                    </div>
                </div>
                
            </div>
        </div>
    )
}
