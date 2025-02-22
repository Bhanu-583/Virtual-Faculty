import React, { useState } from 'react';
import syllabusPDF from "../../../assetss/syllabus/cse/411.pdf";  
import unit1PDF from "../../../assetss/Notes/cse/41/EH/Unit-1.pdf"; 
import unit2PDF from "../../../assetss/Notes/cse/41/EH/Unit-2.pdf";
import unit3PDF from "../../../assetss/Notes/cse/41/EH/Unit-3.pdf";
import unit4PDF from "../../../assetss/Notes/cse/41/EH/Unit-4.pdf";
import unit5PDF from "../../../assetss/Notes/cse/41/EH/Unit-5.pdf";
import './Button.css'; // Custom button styles

const EthicalHacking = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showPDF, setShowPDF] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [currentPDF, setCurrentPDF] = useState(null);
  const [selectedUnitPDF, setSelectedUnitPDF] = useState(null);

  const handleSyllabusClick = () => {
    setShowPDF(true);
    setShowVideo(false);
    setShowNotes(false);
    setCurrentPDF(syllabusPDF);
  };

  const handleNotesClick = () => {
    setShowNotes(true);
    setShowVideo(false);
    setShowPDF(false);
  };

  const handleVideoClick = () => {
    setShowVideo(true);
    setShowPDF(false);
    setShowNotes(false);
  };

  const handleUnitDownload = (pdf) => {
    setSelectedUnitPDF(pdf);
  };

  return (
    <div>
      <h3>Resources for Ethical Hacking:</h3>
      <button onClick={handleVideoClick} className="btn-shadow10">Video Lectures</button>
      <button onClick={handleSyllabusClick} className="btn-shadow10">Syllabus</button>
      <button onClick={handleNotesClick} className="btn-shadow10">Notes</button>

      {/* Show the PDF if syllabus is clicked */}
      {showPDF && (
        <div className="pdf-container">
          <h3>{currentPDF === syllabusPDF ? 'Syllabus for Ethical Hacking:' : 'Unit PDF'}</h3>
          <iframe
            src={currentPDF}
            width="100%"
            height="600px"
            title="PDF Viewer"
          ></iframe>
          <button onClick={() => setShowPDF(false)} className="btn-shadow10">Close PDF</button>
        </div>
      )}

      {/* Show the video if the video button is clicked */}
      {showVideo && (
        <div className="video-container">
          <h3>Ethical Hacking Video Lectures:</h3>
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/videoseries?list=PL7AT7LU4byRKMBCEWpeZ4QOd2VWvdIHXU&si=c7uudPxZrDIclYOK"
            title="YouTube Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button onClick={() => setShowVideo(false)} className="btn-shadow10">Close Video</button>
        </div>
      )}

      {/* Show Notes when the Notes button is clicked */}
      {showNotes && (
        <div className="notes-container">
          <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Ethical Hacking Notes</h1>

          <div className="unit-frame">
            <h2 style={{ fontSize: '24px' }}>Unit I</h2>
            <p>Introduction to Hacking: Hacking, Types and phases of hacking, Introduction to Ports & Protocols: Ports, Protocols, Primary Network Types, Virtualization & Introduction to Kali Linux: Virtualization, Virtualization software, supported platforms, Introduction to Penetration Testing: Penetration test, Categories and Types of Penetration tests, Structure of Penetration Test Report.</p>
            <div className="download-button-container">
              <DownloadButton onClick={() => handleUnitDownload(unit1PDF)} />
            </div>
            {selectedUnitPDF === unit1PDF && (
              <iframe
                src={unit1PDF}
                width="100%"
                height="400px"
                title="Unit 1 PDF"
                style={{ marginTop: '20px' }}
              ></iframe>
            )}
          </div>

          <div className="unit-frame">
            <h2 style={{ fontSize: '24px' }}>Unit II</h2>
            <p>Footprinting: Footprinting, Types, Using ping and ns Lookup commands in Windows command line, Scanning: Scanning, Basics of Scanning, Basic Techniques of Scanning, Enumerating DNS using dns enum, Performing flag scan using hping3.</p>
            <div className="download-button-container">
              <DownloadButton onClick={() => handleUnitDownload(unit2PDF)} />
            </div>
            {selectedUnitPDF === unit2PDF && (
              <iframe
                src={unit2PDF}
                width="100%"
                height="400px"
                title="Unit 2 PDF"
                style={{ marginTop: '20px' }}
              ></iframe>
            )}
          </div>

          <div className="unit-frame">
            <h2 style={{ fontSize: '24px' }}>Unit III</h2>
            <p>Hacking into System: System Hacking, Password Cracking, Default password databases, Manual and Automated Password Cracking, Process of System Hacking, Using Keyloggers, Trojans & Backdoors: Trojans, Working of Trojan, Infection Techniques, Attack, Lifecycle and Classification of Virus, Worms, Virus Construction Kit.</p>
            <div className="download-button-container">
              <DownloadButton onClick={() => handleUnitDownload(unit3PDF)} />
            </div>
            {selectedUnitPDF === unit3PDF && (
              <iframe
                src={unit3PDF}
                width="100%"
                height="400px"
                title="Unit 3 PDF"
                style={{ marginTop: '20px' }}
              ></iframe>
            )}
          </div>

          <div className="unit-frame">
            <h2 style={{ fontSize: '24px' }}>Unit IV</h2>
            <p>Sniffing, Packet Analysis & Session Hijacking: Sniffing, Packet Analysis, Types of Sniffing, Active and Passive Sniffing Techniques, Session Hijacking, Social Engineering: Social Engineering, Process, Identity Theft, Human and Computer Based Social Engineering Techniques, Phishing Process, Types of Phishing Attacks, Social Engineering Toolkit (SET).</p>
            <div className="download-button-container">
              <DownloadButton onClick={() => handleUnitDownload(unit4PDF)} />
            </div>
            {selectedUnitPDF === unit4PDF && (
              <iframe
                src={unit4PDF}
                width="100%"
                height="400px"
                title="Unit 4 PDF"
                style={{ marginTop: '20px' }}
              ></iframe>
            )}
          </div>

          <div className="unit-frame">
            <h2 style={{ fontSize: '24px' }}>Unit V</h2>
            <p>Cryptography: Cryptography, Digital Signature, Hash Functions, Steganography: Steganography Process, watermarking, Steganography Methods and Attacks, Steganography tools, Vulnerability Assessment: Vulnerability, The Open Web Application Security Project (OWASP), Prevention, Damn Vulnerable Web Application (DVWA), installation and testing of DVWA.</p>
            <div className="download-button-container">
              <DownloadButton onClick={() => handleUnitDownload(unit5PDF)} />
            </div>
            {selectedUnitPDF === unit5PDF && (
              <iframe
                src={unit5PDF}
                width="100%"
                height="400px"
                title="Unit 5 PDF"
                style={{ marginTop: '20px' }}
              ></iframe>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const DownloadButton = ({ onClick }) => {
  return (
    <button className="button" type="button" onClick={onClick}>
      <span className="button__text">Download</span>
      <span className="button__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" className="svg">
          <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
          <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
          <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
        </svg>
      </span>
    </button>
  );
};

export default EthicalHacking;
