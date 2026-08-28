import React from 'react';
import './css/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHtml5, faCss3Alt, faJs, faReact,
    faJava, faDocker, faGitAlt, faJira, faAws, faJenkins
} from '@fortawesome/free-brands-svg-icons';
import { faLeaf, faDatabase, faShieldHalved, faCode } from '@fortawesome/free-solid-svg-icons';

const skillGroups = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", icon: faHtml5, color: "#E34F26" },
            { name: "CSS", icon: faCss3Alt, color: "#1572B6" },
            { name: "JavaScript", icon: faJs, color: "#F0DB4F" },
            { name: "React.js", icon: faReact, color: "#61DAFB" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Java", icon: faJava, color: "#ED8B00" },
            { name: "Spring Boot", icon: faLeaf, color: "#6DB33F" },
            { name: "Spring Data JPA", icon: faDatabase, color: "#6DB33F" },
            { name: "Spring Security", icon: faShieldHalved, color: "#6DB33F" },
            { name: "REST APIs", icon: faCode, color: "#8b5cf6" },
            { name: "SQL (MySQL)", icon: faDatabase, color: "#4479A1" },
        ],
    },
    {
        title: "Tools & Cloud",
        skills: [
            { name: "Docker", icon: faDocker, color: "#2496ED" },
            { name: "Git", icon: faGitAlt, color: "#F05032" },
            { name: "Jira", icon: faJira, color: "#0052CC" },
            { name: "AWS (EC2)", icon: faAws, color: "#FF9900" },
            { name: "CI/CD (Jenkins)", icon: faJenkins, color: "#D24939" },
        ],
    },
];

const Skills = () => {
    return (
        <div>
            <h1 className="section-heading">Skills</h1>
            <div className="skills-groups">
                {skillGroups.map((group) => (
                    <div className="skills-group" key={group.title}>
                        <h3 className="skills-group-title">{group.title}</h3>
                        <div className="skills-row">
                            {group.skills.map((skill) => (
                                <span className="skill-chip" key={skill.name}>
                                    <span className="skill-icon" style={{ '--icon-color': skill.color }}>
                                        <FontAwesomeIcon icon={skill.icon} />
                                    </span>
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
