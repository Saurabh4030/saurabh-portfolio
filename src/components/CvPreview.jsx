export default function CvPreview() {
  return (
    <div className="cv-page">
      <iframe
        src="/cv/cv.pdf"
        title="Saurabh CV"
        className="cv-frame"
      />

      <a href="/cv/cv.pdf" download className="cv-download-btn">
        Download CV
      </a>
    </div>
  );
}
