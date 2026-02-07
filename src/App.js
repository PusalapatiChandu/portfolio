import React, { useState, useEffect } from 'react';
import './App.css';

import profileImg from './assets/profile.jpg';

import about1 from './assets/about1.jpg';
import about2 from './assets/about2.jpg';
import project1 from './assets/project1.jpeg';
import project2 from '././assets/project2.webp';


function App() {
   const titles = [
    "Software Engineer",
    "Web Developer",

  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
  }, 2000);
  return () => clearInterval(interval);
}, [titles.length]);


  return (

    <div className="container">
      <nav className="navbar">
        <div className="logo">Pusalapati Chandu</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
<section className="hero-section">
  <div className="text">
    <h1>Hello, I'm <span className="highlight-blue">Pusalapati Chandu</span></h1>
     <p className="animated-title">
              A passionate <span className="highlight-purple">{titles[currentTitleIndex]}</span> focused on Full Stack Developer.
            </p>
<p className="id-code"></p>
    <div className="buttons">
      <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
        Hire Me
      </button>
      <a href="/resume.pdf" download>
        <button>Download Resume</button>
      </a>
    </div>
  </div>

  <div className="profile">
    <img src={profileImg} alt="Profile" />
    <div className="badge cgpa">9.42 CGPA</div>
    <div className="badge expert">Web</div>
  </div>
</section>


      <section className="about-section" id="about">
        <h2>About Me</h2>
        <p className="subheading">Know more about my background and passions</p>
        <div className="about-content">
          <div className="about-images">
            <img src={about1} alt="Project work" />
            <img src={about2} alt="Lab session" />
          </div>
          <div className="about-text">
            <p>To prove myself dedicated, worthful and energetic as an engineer in a progressive 
organization that gives me scope to apply my knowledge and skills and a highly motivated 
and hardworking individual looking for a responsible role in a reputable organization. </p>
            <div className="about-lists">
              <ul>
                <li>🎓 B.E in CSE-AI (Saveetha School of Engineering)</li>
                <li>🏆 College Topper</li>
                <li>💡 Web Developer</li>
              </ul>
              <ul>
                <li>📄 10+ Certificates</li>
                <li>🧪 Workshop</li>
                <li>🔬 2 Profesional Certificates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <h2>My Projects</h2>
        <p>A showcase of my technical projects and innovations</p>
        <div className="projects-grid">
          <div className="project-card">
            <img src={project1} alt="Tensile Strength" />
            <h3>Tensile Strength Prediction of Sisal-Psyllium Hybrid Composites Using SVM and RF</h3>
            <p>To create composite samples, sisal fibers and psyllium filler were mixed with epoxy resin. 
Standardized tensile testing was then performed, and machine learning modeling utilizing SVM 
and RF algorithms was used to forecast tensile strength. </p>
            <div className="tech-used">
              <span>Performance</span><span>Tensile Strength</span>
            </div>
            <div className="project-footer">
              <span>Duration: 6 months</span>
              <button className="view-details-btn"></button>
            </div>
          </div>
          <div className="project-card">
            <img src={project2} alt="Network Performance" />
            <h3>Network Performance Prediction for Server Allocation Using Linear Regression vs. KNN</h3>
            <p>Designed and implemented a machine learning-based model to accurately predict network 
performance for efficient server resource allocation. Utilized and compared Linear Regression 
and K-Nearest Neighbors (KNN) algorithms to analyze performance metrics. The approach 
resulted in improved prediction accuracy and optimized resource utilization in server 
environments. </p>
            <div className="tech-used">
              <span>Server</span><span>Performance</span><span>Resource Allocation</span>
            </div>
            <div className="project-footer">
              <span>Duration: 4 months</span>
              <button className="view-details-btn"></button>
            </div>
          </div>
          </div>
      </section>


  {/* SKILLS SECTION */}
      <div id="skills" className="skills-section">
        <h2>Skills</h2>
        <p>What I Bring to the Table</p>
        <div className="skills-grid">
          <div className="skill-box">
            <h3>Full Stact Developer</h3>
            <div className="skill">HTML <span>90%</span></div>
            <div className="skill-bar"><div className="skill-fill" style={{width: '90%'}}></div></div>
            <div className="skill">CSS<span>85%</span></div>
            <div className="skill-bar"><div className="skill-fill" style={{width: '85%'}}></div></div>
            <div className="skill">Java Script  <span>75%</span></div>
            <div className="skill-bar"><div className="skill-fill" style={{width: '75%'}}></div></div>
              <div className="skill">SQL  <span>85%</span></div>
            <div className="skill-bar"><div className="skill-fill" style={{width: '85%'}}></div></div>
            <div className="skill">PHP  <span>80%</span></div>
            <div className="skill-bar"><div className="skill-fill" style={{width: '80%'}}></div></div>
            <div className="skill">JSP  <span>70%</span></div>
            <div className="skill-bar"><div className="skill-fill" style={{width: '70%'}}></div></div>
          </div>

          <div className="skill-box">
            <h3>Skills</h3>
            <div className="skill">C Programming <span>80%</span></div>
            <div className="skill-bar"><div className="skill-fill" style={{width: '80%'}}></div></div>
            <div className="skill">C++  <span>85%</span></div>
            <div className="skill-bar"><div className="skill-fill" style={{width: '85%'}}></div></div>
            <div className="skill">Data Structures and DBMS. <span>70%</span></div>
            <div className="skill-bar"><div className="skill-fill" style={{width: '70%'}}></div></div>
          
          <div className="skill">Python <span>80%</span></div>
            <div className="skill-bar"><div className="skill-fill" style={{width: '80%'}}></div></div>
          <div className="skill">Java<span>85%</span></div>
            <div className="skill-bar"><div className="skill-fill" style={{width: '85%'}}></div></div>
          </div>
        </div>
      </div>

     <section className="experience-section" id="experience">
  <h2>My Experience</h2>
  <p>Key roles and internships that shaped my journey in Web Development</p>
  <div className="timeline">
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-date">Jun 2025 - Aug 2025</div>
      <div className="timeline-content">
        <h3>Intern - Full Stack Developer</h3>
        <p>
         Developed and maintained responsive web applications using React.js and Node.js.
        </p>
      </div>
    </div>
   
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-date">Oct 2024</div>
      <div className="timeline-content">
        <h3>Workshop- Gen AI</h3>
        <p>
          Conducted hands-on workshops on Generative AI tools and concepts for beginners.
Helped 100+ students create their first AI-based projects using tools like ChatGPT and image generators.
        </p>
      </div>
    </div>
  </div>
</section>


      <section className="education-section" id="education">
  <h2>Academic Excellence</h2>
  <p>My educational foundation and academic achievements that shaped my technical expertise.</p>

  <div className="education-card">
    <div className="edu-header">
      <div>
        🎓 <strong>B.E in CSE-AI</strong>
        <div className="edu-institute">Saveetha School of Engineering</div>
        <div className="edu-badges">
          <span className="badge-cgpa">⭐ CGPA: 9.42/10 (CSE-AI)</span>
        </div>
      </div>
      <div className="edu-date">2023 – 2027</div>
    </div>
    <p>Currently pursuing undergraduate studies in Computer Science and Engineering with a specialization in Artificial Intelligence.</p>
  </div>

  <div className="education-card">
    <div className="edu-header">
      <div>
        🎓 <strong>BIEAP   </strong>
        <div className="edu-institute">Sri Pratibha Junior College, Ongole
</div>
        <div className="edu-badges">
          <span className="badge-cgpa">📘 Percentage: 97.1%</span>
        </div>
      </div>
      <div className="edu-date">2021 – 2023</div>
    </div>
    <p>Completed intermediate education with a focus on Mathematics, Physics, and Chemistry (MPC), building a strong foundation in analytical and problem-solving skills.</p>
  </div>
</section>

<section className="ready-section">
  <h2>Ready for New Opportunities</h2>
  <p>
    I’m always excited to take on new challenges and contribute to innovative projects. Let’s
    discuss how my experience can benefit your team.
  </p>
  <div className="cta-buttons">
    <button
      className="btn-primary"
      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
    >
      🔗 Let’s Connect
    </button>

    <button
      className="btn-outline"
      onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
    >
      📂 View Projects
    </button>
  </div>
</section>

<section className="contact-section" id="contact">
  <h2>Get In Touch</h2>
  <p>Feel free to contact me for any questions or opportunities</p>
  <div className="contact-grid">
    
    {/* Contact Info */}
    <div className="contact-card">
      <h3>📬 Contact Information</h3>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:pusalapatichandu17@gmail.com">pusalapatichandu17@gmail.com</a></li>
        <li><strong>Phone:</strong> +91 9110520794  <br /><small>Available 9 AM – 8 PM IST</small></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pusalapati-chandu-9569a32ba/">linkedin.com/in/pusalapati-chandu-9569a32ba/</a></li>
       
      </ul>
      <div className="notification-box">✅ Instant Notifications Enabled</div>
    </div>

    {/* Message Form */}
    <div className="contact-card">
      <h3>📨 Send a Message</h3>
      <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
  {/* 🔐 Your Web3Forms Access Key */}
  <input type="hidden" name="access_key" value="85684a71-2c11-47df-8d30-30f5b6ccc1f9" />

  {/* ✅ Working redirect URL */}
  <input type="hidden" name="redirect" value="https://web3forms.com/success" />

  <input type="text" name="name" placeholder="Full Name *" required />
  <input type="email" name="email" placeholder="Email Address *" required />
  <input type="text" name="subject" placeholder="Subject" />
  <textarea name="message" placeholder="Message *" required></textarea>

  <button type="submit" className="btn-submit">🚀 Send Message</button>
</form>



      <div className="message-note">
        <small>
          🔔 Messages are sent via multiple services to ensure you receive instant notifications.
          You can also email me directly at <strong>pusalapatichandu17@gmail.com</strong>.
        </small>
      </div>
    </div>
  </div>
</section>


 {/* ✅ FOOTER SECTION */}
    <footer className="site-footer">
  <div className="footer-grid">
    
    {/* Footer About */}
    <div className="footer-about">
      <p>I'm a CSE-AI student interested in web development and building smart applications.</p>
      <div className="footer-icons">
        <a href="mailto:pusalapatichandu17@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">📧</a>
        <a href="https://www.linkedin.com/in/pusalapati-chandu-9569a32ba/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">🔗</a>
        <a href="tel:+919110520794" aria-label="Phone">📞</a>
        <a href="https://github.com/PusalapatiChandu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">💻</a>
      </div>
    </div>

    {/* Footer Links */}
    <div className="footer-links">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    {/* Footer Contact */}
    <div className="footer-contact">
      <ul>
        <li>📧 <a href="mailto:pusalapatichandu17@gmail.com">pusalapatichandu17@gmail.com</a></li>
        <li>📱 <a href="tel:+919110520794">+91 9110520794</a></li>
        <li>🔗 <a href="https://www.linkedin.com/in/pusalapati-chandu-9569a32ba/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li>💻 <a href="https://github.com/PusalapatiChandu" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </div>

  </div>
  <p className="footer-bottom">© 2025 Pusalapati Chandu. All rights reserved.</p>
</footer>

    </div>
  );
}



export default App;
