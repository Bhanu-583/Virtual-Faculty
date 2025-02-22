import React, { useState } from 'react';
import syllabusPDF from "../../../assetss/syllabus/cse/411.pdf";  
import unit1PDF from "../../../assetss/Notes/cse/41/IOT/Unit-1.pdf"; 
import unit2PDF from "../../../assetss/Notes/cse/41/IOT/Unit-2.pdf";
import unit3PDF from "../../../assetss/Notes/cse/41/IOT/Unit-3.pdf";
import unit4PDF from "../../../assetss/Notes/cse/41/IOT/Unit-4.pdf";
import unit5PDF from "../../../assetss/Notes/cse/41/IOT/Unit-5.pdf";
import './Button.css'; // Custom button styles

const InternetOfThings = () => {
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
      <h3>Resources for Internet of Things (IoT):</h3>
      <button onClick={handleVideoClick} className="btn-shadow10">Video Lectures</button>
      <button onClick={handleSyllabusClick} className="btn-shadow10">Syllabus</button>
      <button onClick={handleNotesClick} className="btn-shadow10">Notes</button>

      {/* Show the PDF if syllabus is clicked */}
      {showPDF && (
        <div className="pdf-container">
          <h3>{currentPDF === syllabusPDF ? 'Syllabus for Internet of Things:' : 'Unit PDF'}</h3>
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
          <h3>Internet of Things Video Lectures:</h3>
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/videoseries?list=PLJSrGkRNEDAjLGSQiR5a4pOcIiHicPwgV&si=-OdsZwLEYIWVCHZj"
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
          <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Internet of Things Notes</h1>

          {/* Unit 1 */}
          <div className="unit-frame">
            <h2 style={{ fontSize: '24px' }}>Unit I</h2>
            <p>
              <strong>Introduction to IoT:</strong> Introduction to IoT, Architectural Overview, Design principles and needed capabilities, Basics of Networking, M2M and IoT Technology Fundamentals - Devices and gateways, Data management, Business processes in IoT, Everything as a Service (XaaS), Role of Cloud in IoT, Security aspects in IoT.
            </p>
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

          {/* Unit 2 */}
          <div className="unit-frame">
            <h2 style={{ fontSize: '24px' }}>Unit II</h2>
            <p>
              <strong>Elements of IoT:</strong> Hardware Components - Computing - Arduino, Raspberry Pi, ARM Cortex-A class processor, Embedded Devices – ARM Cortex-M class processor, Arm Cortex-M0 Processor Architecture, Block Diagram, Cortex-M0 Processor Instruction Set, ARM and Thumb Instruction Set.
            </p>
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

          {/* Unit 3 */}
          <div className="unit-frame">
            <h2 style={{ fontSize: '24px' }}>Unit III</h2>
            <p>
              <strong>IoT Application Development:</strong> Communication, IoT Applications, Sensing, Actuation, I/O interfaces. Software Components - Programming APIs (using Python/Node.js/Arduino) for Communication Protocols - MQTT, ZigBee, CoAP, UDP, TCP, Bluetooth.
            </p>
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

          {/* Unit 4 */}
          <div className="unit-frame">
            <h2 style={{ fontSize: '24px' }}>Unit IV</h2>
            <p>
              <strong>Bluetooth Smart Connectivity:</strong> Bluetooth overview, Bluetooth Key Versions, Bluetooth Low Energy (BLE) Protocol, Bluetooth Low Energy Architecture, PSoC4 BLE architecture and Component Overview.
            </p>
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

          {/* Unit 5 */}
          <div className="unit-frame">
            <h2 style={{ fontSize: '24px' }}>Unit V</h2>
            <p>
              <strong>IoT Case Studies:</strong> IoT case studies and mini projects based on Industrial Automation, Transportation, Agriculture, Healthcare, Home Automation.
            </p>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="download-icon" data-name="Layer 2" className="svg">
          <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
          <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
          <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
        </svg>
      </span>
    </button>
  );
};

export default InternetOfThings;
