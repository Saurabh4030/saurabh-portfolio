import { data } from "../data/data";
import "../styles/projects.css";
import { Briefcase, Code } from "lucide-react";

export default function Journey() {
  return (
    <section id="projects" className="journey-section">

      {/* TITLE */}
      <h2 className="journey-title">
        Professional <span>Journey</span>
      </h2>

      {/* WORK EXPERIENCE */}
      <div className="journey-block">
        <div className="journey-heading">
          <span className="journey-line"></span>
          <Briefcase size={22} />
          <h3>Journey</h3>
        </div>

        <div className="journey-timeline">
          <span className="journey-dot"></span>

          <div className="journey-card">
            <h4>
              {data.experience.role} @ {data.experience.company}
            </h4>
            <p className="journey-date">{data.experience.duration}</p>

            <ul>
              {data.experience.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="journey-divider"></div>

      {/* KEY PROJECTS */}
      <div className="journey-block">
        <div className="journey-heading">
          <span className="journey-line purple"></span>
          <Code size={22} />
          <h3>Key Projects</h3>
        </div>

        <div className="project-grid">
          {data.projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h4>{project.title}</h4>
              <p className="tech">{project.tech}</p>
              <p className="desc">{project.desc}</p>

              <div className="project-actions">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>Live Demo</button>
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="outline">GitHub Repo</button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
