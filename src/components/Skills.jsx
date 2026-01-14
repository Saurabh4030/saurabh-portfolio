import { data } from "../data/data";
import "../styles/skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2>
          Technical <span>Skills</span>
        </h2>
        <p>
          My core competencies and proficiency levels across the modern
          full-stack development ecosystem.
        </p>
      </div>

      <div className="skills-grid">
        {data.skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-top">
              <h4>{skill.name}</h4>
              <span className="skill-percent">{skill.level}%</span>
            </div>

            <p className="skill-desc">
              {skill.description || "Proficient in modern development practices."}
            </p>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
