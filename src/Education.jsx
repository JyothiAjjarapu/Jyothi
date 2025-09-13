import './css/experience.css';
import Timeline from './Timeline.jsx';

const education = [
    {
        role: "M.Tech in Computer Science",
        company: "XYZ University",
        date: "2018 – 2022",
        responsibilities: [ "Led a team of developers",
                "Implemented new features",
                "Optimized website performance",
            ]
    },
    {
        role: "B.Tech in Computer Science",
        company: "XYZ University",
        date: "2018 – 2022",
        responsibilities: [ "Led a team of developers",
                "Implemented new features",
                "Optimized website performance",
            ]
    }
];
    export default function Education()
{


    return(
        <div className="experience">
            <h2 style={{textAlign:"center"}}> Education </h2>
            <br />
            <Timeline experiences={education} />
        </div>
    )
}