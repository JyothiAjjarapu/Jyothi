import "./css/experience.css";
import Timeline from "./Timeline.jsx";

export default function Experience()
{

    const experiences = [
        {
            role: "Senior Frontend Developer",
            company: "Tech Company",
            date: "2022 – Present",
            responsibilities: [
                "Led a team of developers",
                "Implemented new features",
                "Optimized website performance",
            ],
        },
        {
            role: "Frontend Developer",
            company: "Web Agency",
            date: "2020 – 2022",
            responsibilities: [
                "Built responsive web apps",
                "Worked closely with designers",
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