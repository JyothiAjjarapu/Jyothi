// import {useState, useEffect} from "react";
// import './css/MidPage.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";

import './css/Mainpage.css';
import "./css/RotatingIcons.css";
import profilePic from './assets/images/jyo-linkedin.jfif';
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";


export default function MidPage() 
{
    // const [likes, setLikes] = useState(() => {
    // return parseInt(localStorage.getItem("likes") || "0");
    // });

    // useEffect(() => {
    // localStorage.setItem("likes", likes);
    // }, [likes]);

    return (
       <div className="main-page" >
            <div className="profile">

                <div id ="home" className="intro">

                    <div className="info">

                        <h2 style={{color: "rgb(172, 1, 78)"}}>
                            Hi, I'm Ajjarapu Jyothi 👋
                        </h2>

                        <h1 style={{color:"white"}}>Full Stack Developer</h1>

                        <p style = {{color:"white" ,display: 'flex', flexWrap:'wrap'}}> 
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, sequi?
                        </p>

                        <button className="btn" style={{backgroundColor: "transparent", border:"1px solid grey"}}>  View my work </button>
                        {"  "}
                        <button className="btn">  Download Resume </button> 
                       
                    </div>

                    <img src={profilePic} />
                </div>

                <div className="about-skills">
                    <div>
                        <h1> About Me </h1>
                        <div className="about">
                            <p> 
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, ut.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, fugit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, at!
                            </p>
                        </div>
                        
                    </div>

                    <div>
                        <h1> Skills </h1>
                        <div className="skills">
                            <button className="btn-skill"> HTML </button>
                            <button className="btn-skill"> CSS </button>
                            <button className="btn-skill"> JavaScript </button> 
                        </div>
                       
                    </div>

                </div>

            </div>
                
            {/* likes            
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
                 */}
                
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
            {/* </div> */}
        
        </div>
    )
}
