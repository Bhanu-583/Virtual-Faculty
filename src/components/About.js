import React, { useState } from 'react';
import './About.css';

const Home = () => {
  const [iframeUrl, setIframeUrl] = useState(''); // State to hold the URL

  const handleLinkClick = (url) => {
    setIframeUrl(url); // Set the iframe URL based on the button clicked
  };

  return (
    <div className="home-container">
      <nav className="nav">
        <ul>
          <li><a href="#" onClick={() => handleLinkClick('/results')}>Results</a></li>
          <li><a href="#" onClick={() => handleLinkClick('https://bvcr.edu.in/courses-offered/')}>Programs Offered</a></li>
          <li><a href="#" onClick={() => handleLinkClick('https://bvcr.edu.in/examinations/autonomous/notifications')}>Notifications</a></li>
          <li><a href="#" onClick={() => handleLinkClick('https://bvcr.edu.in/admissions/')}>Admissions</a></li>
          <li><a href="#" onClick={() => handleLinkClick('https://bvcr.edu.in/placements/')}>Placements</a></li>
          <li><a href="#" onClick={() => handleLinkClick('https://bvcr.edu.in/library/')}>Central Library</a></li>
          <li><a href="#" onClick={() => handleLinkClick('https://bvcr.edu.in/grievance/')}>Student Grievance Form</a></li>
        </ul>
      </nav>

      <main className="main">
        {iframeUrl === '' ? (
          <>
            <h2>Welcome to BVC College of Engineering (Autonomous)</h2>
            <p>BVC Group of Institutions is set by our visionary founder...</p>
            <p>The campuses are eco-friendly, well-lit, ventilated, and conducive to learning...</p>
            <p>We are approved by AICTE, New Delhi, and affiliated with JNTU, Kakinada...</p>
          </>
        ) : (
          <iframe
            src={iframeUrl}
            title="Content Viewer"
            style={{ width: '100%', height: '600px', border: 'none' }}
          />
        )}
      </main>
    </div>
  );
};

export default Home;
