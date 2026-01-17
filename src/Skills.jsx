import React from 'react';
import './css/Mainpage.css';

const Skills = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Skills</h1>
            <br />
            <div className="skills">
                <button className="btn-skill">HTML</button>
                <button className="btn-skill">CSS</button>
                <button className="btn-skill">JavaScript</button>
                <button className="btn-skill">React</button>
                <button className="btn-skill">Node JS</button>
                <button className="btn-skill">Mongo DB</button>
                <button className="btn-skill">Express JS</button>
                <button className="btn-skill">Java</button>
                <button className="btn-skill">Python</button>
                <button className="btn-skill">SQL</button>
                <button className="btn-skill">PHP</button>
                <button className="btn-skill">ML</button>
                <button className="btn-skill">DataScience</button>
                <button className="btn-skill">DevOps</button>
                <button className="btn-skill">AWS</button>
                <button className="btn-skill">Kubernetes</button>
                <button className="btn-skill">Jenkins</button>
            </div>
        </div>
    );
};

export default Skills;