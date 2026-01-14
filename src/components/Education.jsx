import "../styles/Education.css";

export default function Education() {
  const education = [
    {
      level: "Matriculation (10th Grade)",
      title: "Central Board of Secondary Education",
      institute: "Brilliant Public School, Sitamarhi",
      year: "2020",
      desc: "Completed 10th grade with strong foundation in Mathematics and Science. Secured 67%.",
      color: "blue",
    },
    {
      level: "Intermediate (12th Grade)",
      title: "Bihar School Examination Board (PCM)",
      institute: "R. Jha College, Sitamarhi",
      year: "2022",
      desc: "Specialized in Physics, Chemistry & Mathematics (PCM). Secured 70%.",
      color: "purple",
    },
    {
      level: "Undergraduate",
      title: "B.Tech in Computer Science",
      institute: "COER University, Roorkee",
      year: "2023 – 2027",
      desc: "Focused on DSA, MERN Stack, Software Engineering & modern web technologies. CGPA: 7.88",
      color: "green",
    },
  ];

  return (
    <section className="education-section">
      <h2 className="edu-title">
        My <span>Education</span>
      </h2>
      <p className="edu-subtitle">
        A snapshot of my academic journey and qualifications.
      </p>

      <div className="timeline">
        {education.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className={`timeline-dot ${item.color}`}></div>

            <div className="edu-card">
              <h4 className={`edu-level ${item.color}`}>
                {item.level}
              </h4>
              <h3>{item.title}</h3>
              <p className="institute">{item.institute}</p>
              <span className="year">{item.year}</span>
              <p className="desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
