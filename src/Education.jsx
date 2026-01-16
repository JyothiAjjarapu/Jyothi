import './css/experience.css';
import Timeline from './Timeline.jsx';

const education = [
    {
        role: "M.Tech in Computer Science",
        company: "Indian Institute of Technology Jodhpur",
        date: "2022 – 2024",
        responsibilities: []
    },
    {
        role: "B.Tech in Information Technology",
        company: "Osmania University",
        date: "2016 – 2020",
        responsibilities: []
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