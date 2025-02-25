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
              <p>City: Kanpur (208014), State: Uttar Pradesh, Country: India</p>
            </div>
          </div>
        </div>
      </header>

      <div className="resume-body">
        
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
            <h2><i className="fas fa-cogs"></i> Key Skills</h2>
            <ul>
              <li><strong>Programming Languages:</strong> Java</li>
              <li><strong>Technologies Learning:</strong> React, Spring Boot</li>
              <li><strong>Skills:</strong> HTML, CSS, JavaScript</li>
              <li><strong>Miscellaneous:</strong> MySQL, Mongo DB, JDBC, Servlet</li>
            </ul>
          </section>

          <section>
            <h2><i className="fas fa-laptop-code"></i> Projects</h2>
            <h3>1. Fire-Chat-Live</h3>
            <p><strong>Technologies:</strong> React.js, Firebase, CSS</p>
            <p>Developed a real-time chat application that allows users to chat instantly using their Gmail ID for authentication. This app ensures smooth communication with a simple and user-friendly interface. Features include:</p>
            <ul>
              <li>Real-time messaging: Chat with friends or anyone instantly.</li>
              <li>Sign-in with Gmail: Users can sign in easily using their Gmail account.</li>
              <li>Message history: All chats are saved, and users can access them anytime.</li>
              <li>Simple, user-friendly interface: Clean and intuitive design for seamless experience.</li>
              <li>Firebase integration for backend: Uses Firebase for authentication, storing messages, and more.</li>
              <li>Responsive design: The app works across different devices with responsive styling.</li>
            </ul>
            <p><a href="https://fire-chat-live.onrender.com/">Project-link</a></p>

            <h3>2. Attendance Management System</h3>
            <p><strong>Technologies:</strong> Java, Spring Boot, JSP, MySQL</p>
            <p>Developed a web application for college attendance management, enabling teachers and students to manage attendance and courses. Features include:</p>
            <ul>
              <li>Teacher and Student can individually login and register an account.</li>
              <li>Teacher and Student profiles to perform various actions.</li>
              <li>Teachers can take attendance for registered students in respective courses.</li>
              <li>Teachers can view class records and individual student attendance records.</li>
              <li>Teachers can add and delete courses according to respective semesters and subjects.</li>
              <li>Students can track their attendance and fines imposed from their profile.</li>
            </ul>
            <p><a href="https://youtu.be/Df2xBrzsqb4?si=tIBuZ-F8rkQ-GDc_">Project-link</a></p>

            <h3>3. Code Execution System</h3>
            <p><strong>Technologies:</strong> ReactJS, Judge0 API</p>
            <p>Developed an online compiler for writing, compiling, and running code in multiple programming languages. Features include:</p>
            <ul>
              <li>Support for executing code in Java, JavaScript, Python, and C.</li>
              <li>Source code is sent to a back-end external API named Judge0 for execution.</li>
              <li>Integrated Judge0 API for executing code and handling errors.</li>
              <li>Execution results are returned to the front-end, displaying the output to the user.</li>
            </ul>
            <p><a href="https://rce-system.netlify.app/">Project-link</a></p>

            <h3>4. Quiz App from TestLine</h3>
            <p><strong>Technologies:</strong> React.js, Node.js, CSS, Axios</p>
            <p>Developed a dynamic quiz application that allows users to take quizzes, track their score, and view a summary of their performance with time. Features include:</p>
            <ul>
              <li>Dynamic question display with a timer for each question.</li>
              <li>Real-time score tracking with a final summary page after the quiz.</li>
              <li>Progress bar to visually track quiz completion in real-time.</li>
              <li>Badges earned based on quiz performance, visible on the user's profile.</li>
              <li>Backend integration with Node.js to handle and serve quiz data.</li>
              <li>Custom styling to enhance user experience with responsive design.</li>
              <li>API integration using Axios to fetch questions and submit answers to the backend.</li>
            </ul>
            <p><a href="https://quizgame-testline-frontend.onrender.com/">Project-link</a></p>

            <h3>5. Student Details Form</h3>
            <p><strong>Technologies:</strong> HTML, CSS, JS, OpenCage API</p>
            <p>Developed a full-stack online user-friendly interface with the following features:</p>
            <ul>
              <li>Student's state is automatically filled based on the respective city using the OpenCage API.</li>
              <li>Student's current age is automatically calculated while entering the birth date.</li>
              <li>All the information is stored in the database with the help of back-end from the front-end.</li>
            </ul>
            <p><a href="https://students-details-form.netlify.app/">Project-link</a></p>
          </section>

          <section>
            <h2><i className="fas fa-gamepad"></i> Hobbies</h2>
            <ul>
              <li>Gaming</li>
              <li>Gymnast</li>
              <li>Gym</li>
            </ul>
          </section>
        </div>

        {/* Right Column */}
        {/* You can remove or use this section as needed */}
        <div className="right-column"></div>
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
