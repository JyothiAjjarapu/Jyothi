import "./css/experience.css";
import Timeline from "./Timeline.jsx";

export default function Experience()
{

    const experiences = [
        {
            role: "Full Stack Developer",
            company: "Oculon.ai",
            date: "July 2024 - Feb 2025",
            responsibilities: [
                "Scalable React Applications",
                "Dynamic Data Dashboards",
                "Cross-Team Collaboration"
            ],
        },
        {
            role: "Application Development Associate",
            company: "Accenture Solutions",
            date: "Dec. 2020 - May 2021",
            responsibilities: [
              "Linux System Administration",
              "Dockerized Deployments Management",
              "CI/CD Pipeline Support"
            ],
        },
    ];
    return(
        <div className="experience">
            <h2 style={{textAlign:"center"}}> Experience </h2>
            <br />
            <Timeline experiences={experiences} />
        </div>
    )
}