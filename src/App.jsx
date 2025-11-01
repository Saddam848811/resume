import React from 'react';
import './App.css';
import profileImage from './assets/saddam.jpg'; // Adjust the path

const Resume = () => {
  return (
    <div className="resume">
      <header className="resume-header">
        <section>   <div className="header-content flex">
          <div className="profile-image">
            <img src={profileImage} alt="Saddam Husain" />
          </div>
          <div className="header-text">
            <h1>Saddam Husain</h1>
            <hr />
            <div className="contact-info">
              <p><i className="fas fa-phone-alt"></i> (+91) <b>8562905797</b></p>
              <p><i className="fas fa-envelope"></i> <a href="mailto:sh848811@gmail.com">sh848811@gmail.com</a></p>
              <p><i className="fas fa-map-marker-alt"></i><b>NOIDA, Uttar Pradesh, India</b> </p>
            </div>
          </div>
        </div></section>
     
      </header>

       <section>
            <h2><i className="fas fa-briefcase"></i> Experience</h2>
            <h3>Ameyaa NXT  - <span className="role">Full Stack Intern</span></h3>
            <p><strong>Duration:</strong> June 2025 - Sep 2025</p>
            <p><strong>Skills & Technologies:</strong> Docker, GitHub Actions, CI/CD, VPS Deployment, SSH, Spring Boot, React.js, Tailwind CSS, PostgreSQL, Redis, Wagmi, Ethers.js, Web3, Blockchain Transactions</p>
            <ul>
              <li>Containerized frontend and backend applications using Docker and automated deployments to a VPS via GitHub Actions and SSH.</li>
              <li>Compose and implemented CI/CD pipelines to build and push images to Docker Hub and to VPS.</li>
              <li>Integrated Smart Contracts with React.js to enable MetaMask wallet connection, token purchases, and faucet claiming features.</li>
              <li>Implemented a Redis-based nonce-locking mechanism to ensure secure blockchain transactions and prevent duplicate nonce usage.</li>
              <li>Developed a full-stack web application with user authentication, authorization, and RESTful APIs for user and admin operations.</li>
              {/* <li>Designed and managed PostgreSQL schemas for data persistence and implemented Spring Security for secure access control.</li> */}
            </ul>
<hr />
            <h3>Proceedit - <span className="role">Full Stack Intern</span></h3>
            <p><strong>Duration:</strong> 26th Jan 2025 - May 2025</p>
            <p><strong>Project Name:</strong> CTI Smart-Trading / Model Prediction, Proceed-IT Web Services</p>
            <p><strong>Skills:</strong> AI/ML models (Basics), PostgreSQL, Flutter-flow</p>
            <ul>
              <li>Refactored Python code-base and machine learning models to improve performance and accuracy.</li>
              <li>Managed and maintained PostgreSQL databases, including creating schemas, tables, and writing queries.</li>
              <li>Worked on Proceed-IT web services to design intuitive and scalable UI components using Flutter-flow.</li>
              <li>Utilized Jira to manage tasks, update work logs, track progress, and collaborate with the team in an Agile environment.</li>
            </ul>
          </section>


<section>
            <h2><i className="fas fa-cogs"></i> Key Skills</h2>
            <ul>
              <li><strong>Programming Languages:</strong> Java, JavaScript</li>
              <li><strong>Technologies:</strong> React, Spring Boot, Fast API</li>
              <li><strong>Skills:</strong> AWS, Git, Docker</li>
            </ul>
          </section>

      <div className="resume-body flex">
        <div className="left-column">
          <section>
            <h2><i className="fas fa-graduation-cap"></i> Education</h2>
            <ul className="education-list">
              <li className="education-item">
                <span className="course-name">Master of Computer Applications (MCA) - Dr. Virendra Swaroop Institute of Computer Studies</span>
                <span className="course-details">Aug 2023 - Jun 2025 | CGPA: 8.50/10.0</span>
              </li>
              <li className="education-item">
                <span className="course-name">HSC (Maths) - Dr. Soney Lal Patel, India</span>
                <span className="course-details">March 2006 - May 2018</span>
              </li>
            </ul>
          </section>

          

         
         <section>
  <h2><i className="fas fa-laptop-code"></i> Projects</h2>

  <h3>1. Fire-Chat-Live</h3>
  <p><strong>Technologies:</strong> React.js, Firebase, CSS</p>
  <ul>
    <li>Real-time messaging: Chat with friends or anyone instantly.</li>
    <li>Sign-in with Gmail: Users can sign in easily using their Gmail account.</li>
    <li>Message history: All chats are saved, and users can access them anytime.</li>
  </ul>
  <p><a href="https://fire-chat-live.onrender.com/">Project-link</a></p>
<hr />
  <h3>2. Attendance Management System</h3>
  <p><strong>Technologies:</strong> Java, Spring Boot, JSP, MySQL</p>
  <ul>
    <li>Developed a web app enabling teachers and students to manage attendance and courses.</li>
    <li>Implemented teacher/student login, attendance tracking, and course management features.</li>
  </ul>
  <p><a href="https://youtu.be/Df2xBrzsqb4?si=tIBuZ-F8rkQ-GDc_">Project-link</a></p>
<hr />
  <h3>3. Code Execution System</h3>
  <p><strong>Technologies:</strong> ReactJS, Judge0 API</p>
  <ul>
    <li>Developed an online compiler supporting Java, JS, Python, and C using Judge0 API.</li>
    <li>Handled code execution requests and displayed outputs dynamically.</li>
  </ul>
  <p><a href="https://rce-system.netlify.app/">Project-link</a></p>

  {/* <h3>4. Quiz App from TestLine</h3>
  <p><strong>Technologies:</strong> React.js, Node.js, CSS, Axios</p>
  <ul>
    <li>Built a dynamic quiz app with timer, progress bar, score tracking, and badge system.</li>
    <li>Integrated backend with Node.js and APIs using Axios.</li>
  </ul>
  <p><a href="https://quizgame-testline-frontend.onrender.com/">Project-link</a></p> */}

  {/* <h3>5. Student Details Form</h3>
  <p><strong>Technologies:</strong> HTML, CSS, JS, OpenCage API</p>
  <ul>
    <li>Auto-fills state based on city using OpenCage API.</li>
    <li>Automatically calculates age from birth date.</li>
    <li>Stores form data securely in the database.</li>
  </ul>
  <p><a href="https://students-details-form.netlify.app/">Project-link</a></p> */}
</section>

        </div>
      </div>

      {/* <footer className="resume-footer">
        <p>© 2025 Saddam Husain</p>
      </footer> */}
    </div>
  );
};

export default Resume;
