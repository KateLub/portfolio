import { Link } from "react-router-dom";
import Contact from './contact';
import Tech from './tech';
import About from './about';
import Footer from '../components/footer';
import ScrollButton from "../components/scrollButton";

import { useEffect, useRef} from "react";
 

export default function Root() {
const about = useRef(null);
const tech = useRef(null);
const contact= useRef(null);
const refScrollUp = useRef(null);

const scrollToElem = (elementRef) => {
  elementRef.current.scrollIntoView({behavior: "smooth", block:"center"})
}

  return (
    <div className="root">
      <div className="page" ref = {refScrollUp}>
       <ScrollButton  refScrollUp={refScrollUp}/>
        <div className="navbar">
          <Link to="/portfolio/about" 
           onClick={() => scrollToElem(about)}> 
          ABOUT
          </Link>
          <Link to="/portfolio/tech"
           onClick={() => scrollToElem(tech)}>
            TECH
          </Link>
          <Link to="/portfolio/contact"
           onClick={() => scrollToElem(contact)}> 
            CONTACT
          </Link>
        </div>
        <div className="home-container">
          <h1>Welcome to My Portfolio!</h1>
          <p>Welcome to my portfolio website! I'm thrilled to share with you my journey and experiences in the world of software development. Here you'll find a showcase of my projects, skills, and passion for technology. Feel free to explore and learn more about what I have to offer. If you're interested in collaboration or have any inquiries, don't hesitate to reach out. Let's connect and make great things happen together!</p>
        </div>
      </div>

          <div ref = {about}>
            <About />
          </div>
          <div ref = {tech}>
            <Tech/>
          </div>
          <div ref = {contact}>
          <Contact />
          </div> 

          <Footer />
    </div>
  );
  }

