export default function About() {
  return (
    <section id="about" className="about-section">
      
      {/* SECTION TITLE */}
      <div className="about-title">
        <h2>
          Know More <span>About Me</span>
        </h2>
        <p>Who I am, what I do, and how I think as a developer</p>
      </div>

      {/* MAIN GRID */}
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-text card">
          <h3>👋 Hello! I'm <span>Saurabh Kumar</span></h3>

          <p>
            I am a <strong>passionate Full-Stack Developer</strong> with a strong
            foundation in Java and the modern MERN stack. I specialize in
            building scalable, performant, and visually engaging web
            applications.
          </p>

          <p>
            My development philosophy focuses on crafting clean architecture,
            optimizing performance, and delivering exceptional
            <strong> User Experience (UX)</strong>. I enjoy turning complex
            problems into elegant technical solutions.
          </p>

          <p>
            I'm always eager to learn new technologies, collaborate on exciting
            projects, and contribute to meaningful products that create real
            impact.
          </p>

          <div className="about-highlight">
            🚀 Currently open for <span>internships</span>, <span>freelance</span>,
            and <span>full-time opportunities</span>.
          </div>
        </div>

        {/* RIGHT STACK CARDS */}
        <div className="about-skills">

          <div className="stack-card">
            <h4>Frontend</h4>
            <div className="stack-tags">
              <span>React</span>
              <span>Vite</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="stack-card">
            <h4>Backend</h4>
            <div className="stack-tags">
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>REST APIs</span>
              <span>Auth</span>
            </div>
          </div>

          <div className="stack-card">
            <h4>Tools & Others</h4>
            <div className="stack-tags">
              <span>Git & GitHub</span>
              <span>VS Code</span>
              <span>Postman</span>
              <span>Framer Motion</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
