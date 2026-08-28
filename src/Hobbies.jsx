import { Link } from "react-router-dom";
import "./css/Hobbies.css";

import sketch1 from "./assets/images/sketches/1.jpeg";
import sketch2 from "./assets/images/sketches/2.jpeg";
import sketch3 from "./assets/images/sketches/3.jpeg";
import sketch4 from "./assets/images/sketches/4.jpeg";
import sketch5 from "./assets/images/sketches/5.jpeg";
import sketch6 from "./assets/images/sketches/s1.jpeg";
import sketch7 from "./assets/images/sketches/s2.jpeg";
import sketch8 from "./assets/images/sketches/s3.jpeg";
import sketch9 from "./assets/images/sketches/s4.jpeg";
import sketch10 from "./assets/images/sketches/s5.jpeg";
import sketch11 from "./assets/images/sketches/s6.jpeg";
import sketch12 from "./assets/images/sketches/s7.jpeg";
import sketch13 from "./assets/images/sketches/s8.jpeg";
import sketch14 from "./assets/images/sketches/s9.jpeg";
import sketch15 from "./assets/images/sketches/s10.jpeg";
import sketch16 from "./assets/images/sketches/s11.jpeg";
import sketch17 from "./assets/images/sketches/s12.jpeg";
import sketch18 from "./assets/images/sketches/s13.jpeg";
import sketch19 from "./assets/images/sketches/s14.jpeg";
import sketch20 from "./assets/images/sketches/s15.jpeg";
import sketch21 from "./assets/images/sketches/s16.jpeg";
import sketch22 from "./assets/images/sketches/s17.jpeg";
import sketch23 from "./assets/images/sketches/s18.jpeg";
import sketch24 from "./assets/images/sketches/s19.jpeg";


import claymodel1 from "./assets/images/claymodels/1.jpeg";
import claymodel2 from "./assets/images/claymodels/2.jpeg";
import claymodel3 from "./assets/images/claymodels/3.jpeg";
import claymodel4 from "./assets/images/claymodels/4.jpeg";
import claymodel5 from "./assets/images/claymodels/5.jpeg";
import claymodel6 from "./assets/images/claymodels/6.jpeg";
import claymodel7 from "./assets/images/claymodels/7.jpeg";
import claymodel8 from "./assets/images/claymodels/8.jpeg";


export default function Hobbies() {

const sketches = [sketch1, sketch2, sketch3, sketch4, sketch5, sketch6, sketch7, sketch8, sketch9, sketch10, sketch11, sketch12, sketch13, sketch14, sketch15, sketch16, sketch17, sketch18, sketch19, sketch20, sketch21, sketch22, sketch23, sketch24];
const claymodels = [claymodel1, claymodel2, claymodel3, claymodel4, claymodel5, claymodel6, claymodel7, claymodel8];

    return (
        <div className="hobbies-container">

            <header className="hobbies-header">
                <h1>Welcome to my Gallery</h1>
                <nav>
                    <Link to="/" style={{color: 'var(--accent-color)', fontWeight: 600, textDecoration: 'none'}} >Back to Home</Link>
                </nav>
            </header>

            <section>
                <p style={{textAlign: "center", fontSize: "20px", color: 'var(--secondary-text)', fontFamily: "Arial, sans-serif", fontStyle: "italic"}}>
                    Hi there! Now that you have seen my professional work, I invite you to explore my personal artistic side.
                    I learnt classical music for many years and enjoy singing Indian music in my free time. I can speak Telugu, Hindi, English, Tamil and German.
                    So I can sing songs in multiple languages. 
                    Apart from music, I love sketching, origami crafting and sculpting with clay. Art has always been a passion of mine, providing a creative outlet beyond my technical pursuits.
                    I also enjoy traveling and exploring new cultures.
                    <br />
                    <br />
                    Below are some of my sketches and clay models that I have created. I hope you enjoy viewing them as much as I enjoyed making them!
                    <br />
                    <br />
                </p>
            </section>

            <section>
                <h1 className="section-title">My Sketches</h1>

                <div className="gallery">
                    {sketches.map((img, index) => (
                        <div key={index} className="gallery-item">
                        <img src={img} alt={`Sketch ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </section>

            <br />
            <br />
            <section>
                <h1 className="section-title"> My Clay Models</h1>
                <div className="gallery">
                    {claymodels.map((img, index) => (
                        <div key={index} className="gallery-item">
                            <img src={img} alt={`Clay Model ${index + 1}`} />
                        </div>
                    ))}
                </div> 
            </section>
        </div>
    );
};


