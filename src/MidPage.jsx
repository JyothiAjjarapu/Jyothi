import {useState} from "react";
import './css/MidPage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import profilePic from './assets/jyo-linkedin.jfif';
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";



export default function MidPage() {

    const [likes, setLikes] = useState(0);
    // const [dislikes, setDislikes] = useState(0);

    return (
       <div className="mid-page" >
        
            {/* profile */}
            <div className="profile">
               

                <section id ="home" className="info">
                    <div>
                        <h1 style={{color:"white"}}>Hi, I'm Ajjarapu Jyothi</h1>
                        <h2 style={{color:"white"}}>Frontend Developer</h2>
                    </div>

                    <img src={profilePic} alt="profile" className="profile-pic" />
                </section>
                <br />

                 <section id ="about" className="info">
                    <div>
                        <About />
                    </div>

                </section>
                <br />

                <section id ="projects" className="info">
                    <div>
                        <Projects />
                    </div>

                </section>
                <br/>

                <section id ="contact" className="info">
                    <div>
                        <Contact />
                    </div>

                </section>
                <br/>

            </div>
                
            {/* likes */}            
            <div className="like" style={{display:"flex", gap:"10px", marginLeft: "20px"}}> 

                <button onClick={() => setLikes((likes) => likes + 1)}
                    style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer"
                        }}>
                    <FontAwesomeIcon icon={faHeart} style={{ color: "#e70862", fontSize: "24px"}} />
                </button>
                 <div style={{fontSize: "20px"}}> 
                    {likes >=0 && likes} 
                </div>
                
                
                {/* {" "}
                
                <button onClick={()=>{setDislikes( (dislikes) => dislikes + 1 )}} 
                    style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer"
                        }}> 
                    <FontAwesomeIcon icon={faHeartBroken} style={{color: "#fb0952",  fontSize: "24px" }} />
                </button>
                 <div style={{fontSize: "20px"}}> 
                    {dislikes >=0 && dislikes} 
                </div> */}

               

                {/* setCount((count) => (count > 0 ? count - 1 : 0)) */}
            </div>
        
        </div>
    )
}
