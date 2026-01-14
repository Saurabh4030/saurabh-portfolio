import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Saurabh Kr</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Project</a></li>
        {/* <li><a href="#experience">Experience</a></li> */}
        <li><a href="#certification">Certification</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Download CV Button */}
      <Link to="/cv" className="btn">
        View CV
      </Link>
    </nav>
  );
}
