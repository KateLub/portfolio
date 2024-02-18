import { Link } from "react-router-dom";
import Contact from './contact';
import Tech from './tech';
import About from './about';

export default function Root() {

  return (
      <div className="root">
        <div className="hero">
              <Link to="/portfolio/about"> 
              ABOUT
              </Link>
              <Link to="/portfolio/tech">
                TECH
              </Link>
              <Link to="/portfolio/contact">
                CONTACT
              </Link>
          <div className="home-container">
            <h1>Welcome to My Portfolio!</h1>
            <p>Welcome to my portfolio website! I'm thrilled to share with you my journey and experiences in the world of software development. Here you'll find a showcase of my projects, skills, and passion for technology. Feel free to explore and learn more about what I have to offer. If you're interested in collaboration or have any inquiries, don't hesitate to reach out. Let's connect and make great things happen together!</p>
          </div>
        </div>

          <div >
            <About />
          </div>
          <div>
            <Tech/>
          </div>
          <div>
          <Contact />
          </div> 
    </div>
  );
  }

