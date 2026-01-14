import "../styles/philosophy.css";

export default function Philosophy() {
  return (
    <section className="philosophy-section">
      <div className="philosophy-title">
        <h2>
          My Development <span>Philosophy</span>
        </h2>
        <p>The core principles that guide my work every day.</p>
      </div>

      <div className="philosophy-cards">
        <div className="philosophy-card">
          <div className="icon">&lt;/&gt;</div>
          <h3>Clean Architecture</h3>
          <p>
            Focus on writing readable, maintainable, and scalable code that
            adheres to industry best practices and quality standards.
          </p>
        </div>

        <div className="philosophy-card">
          <div className="icon">⚡</div>
          <h3>Performance First</h3>
          <p>
            Optimizing application speed, responsiveness, and efficiency for a
            flawless user experience across all devices.
          </p>
        </div>

        <div className="philosophy-card">
          <div className="icon">🌐</div>
          <h3>Continuous Learning</h3>
          <p>
            Actively exploring new technologies, frameworks, and design patterns
            to stay ahead in the rapidly evolving tech landscape.
          </p>
        </div>
      </div>
    </section>
  );
}
