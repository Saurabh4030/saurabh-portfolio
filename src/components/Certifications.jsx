import { useState } from "react";
import "../styles/certificates.css";

export default function Certifications() {
  const [activeImg, setActiveImg] = useState(null);

  const certificates = [
    {
      title: "Hackathon 8.0",
      issuer: "COER University",
      year: "October 2024",
      img: "/certificates/Hackathon 8.0.jpg",
      
      desc: "Participated showcasing rapid development skills.",
      icon: "⚡",
    },
  ];

  return (
    <section id="certification" className="cert-section">
      <h2 className="cert-title">
        My <span>Certifications</span>
      </h2>

      <p className="cert-subtitle">
        Verified proof of my technical skills. Hover or tap to view certificate!
      </p>
      

      <div className="cert-grid">
        {certificates.map((c, i) => (
          <div className="cert-flip-card" key={i}>
            <div className="cert-flip-inner">

              {/* FRONT */}
              <div className="cert-front">
                <div className="cert-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p className="issuer">{c.issuer}</p>
                <span className="date">{c.year}</span>
              </div>

              {/* BACK */}
              <div className="cert-back">
                <p>{c.desc}</p>
                <button
                  className="view-btn"
                  onClick={() => setActiveImg(c.img)}
                >
                  View Certificate 🔍
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* FULLSCREEN MODAL */}
      {activeImg && (
        <div className="cert-modal" onClick={() => setActiveImg(null)}>
          <span className="close-btn">✕</span>
          <img src={activeImg} alt="Certificate Preview" />
        </div>
      )}
    </section>
  );
}
