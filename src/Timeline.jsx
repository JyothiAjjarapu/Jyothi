import "./css/timeline.css";

export default function Timeline({ experiences }) 
{
  return (
    <div className="timeline">

      {experiences.map ((exp, item) => (

        <div key={item} className="timeline-item">

          <div className="timeline-dot"></div>
          <div className="timeline-content">

            <h4>{exp.role}</h4>
            
            <p className="company">{exp.company}</p>

            <p className="date">{exp.date}</p>

            <div className="description">
              {exp.responsibilities && (
                <ul>
                  {exp.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>
              )}
            </div>

          </div>

        </div>

      ))}
    </div>
  );
}
