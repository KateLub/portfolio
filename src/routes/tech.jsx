import Projects from "../components/projects";

export default function Tech() {
    return (
        <div className="page">
          <div className="tech-container">
      <h1>Tech</h1>
      <div className="section">
        <h2>Languages</h2>
        <p>Proficient in Python, Java, C++, HTML/CSS, JavaScript</p>
      </div>
      <div className="section">
        <h2>Frameworks & Libraries</h2>
        <p>Experience with React Native, Bootstrap</p>
      </div>
      <div className="section">
        <h2>Tools & Technologies</h2>
        <p>Git, API Integration</p>
      </div>
      <div className="section">
        <h2>Projects</h2>

        <Projects />
      </div>
    </div>
        </div>
    );
  }
