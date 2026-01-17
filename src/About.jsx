import React from 'react';
import './css/Mainpage.css';

const About = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>About Me</h1>
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
    );
};

export default About;