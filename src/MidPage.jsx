
import './css/Mainpage.css';
import profilePic from './assets/images/jyo-linkedin.jfif';

import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Education from "./Education";
import Skills from "./Skills";
import About from "./About";

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

                <div className="intro" id="home">

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
                       
                        <a href="/Resume.pdf" download>
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
