import React from 'react';
import './App.css';
import profileImage from './assets/saddam.jpg'; // Adjust the path

const Resume = () => {
  return (
    <div className="resume">
      <header className="resume-header">
        <div className="header-content">
          <div className="flex">
            <div className="profile-image">
              <img src={profileImage} alt="Saddam Husain" />
            </div>
            <div className="header-text">
              <h1>Saddam Husain</h1>
              <hr />
              <p><i className="fas fa-phone-alt"></i> Phone: (+91) 8562905797</p>
              <p><i className="fas fa-envelope"></i> Email: <a href="mailto:sh848811@gmail.com">sh848811@gmail.com</a></p>
              <p>City: Kanpur, Country: India</p>
            </div>
          </div>
        </div>
      </header>

      <div className="resume-body">
        {/* Left Column */}
        <div className="left-column">
          <section>
            <h2><i className="fas fa-user-tie"></i> Profile Summary</h2>
            <p>
              Full Stack Developer with expertise in <b>Java</b>, <b>Spring Boot</b>, <b>React.js</b>, and <b>MySQL</b>.
              Experienced in building dynamic web applications and integrating APIs. Eager to learn new technologies and continuously improve development processes.
            </p>
          </section>

          <section>
            <h2><i className="fas fa-cogs"></i> Key Skills</h2>
            <ul>
              <li>React.js</li>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>MySQL</li>
            </ul>
          </section>

          <section>
            <h2><i className="fas fa-laptop-code"></i> Projects</h2>
            <div>
              <h3>1. Code Execution System</h3>
              <p><strong>Technologies:</strong> React, Judge0 API</p>
              <p>
                Developed an online compiler for writing, compiling, and running code in multiple languages. Integrated Judge0 API for executing code and handling errors.
              </p>
              <a href="https://rce-system.netlify.app/">Link: </a>
            </div>

            <div>
              <h3>2. Attendance Management System</h3>
              <p><strong>Technologies:</strong> Java, Spring Boot, JSP, MySQL</p>
              <p>
                Developed a web application for college management, enabling teachers and students to manage attendance and courses. Features include attendance tracking and course management for both teachers and students.
              </p>
            </div>
          </section>

          <section>
            <h2><i className="fas fa-gamepad"></i> Hobbies</h2>
            <ul>
              <li>Gaming</li>
              <li>Gym</li>
              <li>Volleyball</li>
            </ul>
          </section>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <section>
            <h2><i className="fas fa-graduation-cap"></i> Education</h2>
            <ul>
              <li>MCA, 2025 - Dr. APJ Abdul Kalam Technical University, Lucknow</li>
              <li>B.Sc, 2022 - Chatrapati Sahuji Maharaj University</li>
            </ul>
          </section>
        </div>
      </div>

      <footer className="resume-footer">
        <p>
          <a href="https://www.linkedin.com/in/saddam-husain-839a93263" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </p>
        <p>
          <a href="https://wa.me/8562905797?text=Hello%20I%27d%20like%20to%20know%20more%20about%20your%20resume!" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i> Say hi..
          </a>
        </p>
        <p>
          <a href="https://github.com/saddam848811" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </p>
      </footer>
      <hr />
    </div>
  );
};

export default Resume;
