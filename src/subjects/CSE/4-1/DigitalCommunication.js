import React, { useState } from 'react';
import syllabusPDF from "../../../assetss/syllabus/cse/411.pdf"; 
import unit1PDF from "../../../assetss/Notes/cse/41/dc/Unit-1.pdf"; 
import unit2PDF from "../../../assetss/Notes/cse/41/dc/Unit-2.pdf";
import unit3PDF from "../../../assetss/Notes/cse/41/dc/Unit-3.pdf";
import unit4PDF from "../../../assetss/Notes/cse/41/dc/Unit-4.pdf";
import unit5PDF from "../../../assetss/Notes/cse/41/dc/Unit-5.pdf";
import './Button.css'; // Make sure this file is correctly linked and has no conflicting styles

const DigitalCommunication = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showPDF, setShowPDF] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [currentPDF, setCurrentPDF] = useState(null);
  const [selectedUnitPDF, setSelectedUnitPDF] = useState(null);

  // Function to handle syllabus button click
  const handleSyllabusClick = () => {
    setShowPDF(true);
    setShowVideo(false);
    setShowNotes(false);
    setCurrentPDF(syllabusPDF);
  };

  // Function to handle notes button click
  const handleNotesClick = () => {
    setShowNotes(true);
    setShowVideo(false);
    setShowPDF(false);
  };

  // Function to handle video button click
  const handleVideoClick = () => {
    setShowVideo(true);  // Show video lectures
    setShowPDF(false);   // Hide PDFs
    setShowNotes(false); // Hide notes
  };

  // Handle the unit PDF download and view
  const handleUnitDownload = (pdf) => {
    setSelectedUnitPDF(pdf);
  };

  return (
    <div>
      <h3>Resources for Digital Communication:</h3>
      
      {/* Video Lectures Button */}
      <button onClick={handleVideoClick} className="btn-shadow10">Video Lectures</button>
      
      {/* Syllabus Button */}
      <button onClick={handleSyllabusClick} className="btn-shadow10">Syllabus</button>
      
      {/* Notes Button */}
      <button onClick={handleNotesClick} className="btn-shadow10">Notes</button>

      {/* Display PDF (Syllabus) */}
      {showPDF && (
        <div className="pdf-container">
          <h3>{currentPDF === syllabusPDF ? 'Syllabus for Digital Communication:' : 'Unit PDF'}</h3>
          <iframe
            src={currentPDF}
            width="100%"
            height="600px"
            title="PDF Viewer"
          ></iframe>
          <button onClick={() => setShowPDF(false)} className="btn-shadow10">Close PDF</button>
        </div>
      )}

      {/* Display Video Lectures */}
      {showVideo && (
        <div className="video-container">
          <h3>Digital Communication Video Lectures:</h3>
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/videoseries?list=PLXOYj6DUOGrr-O76Jv2JVc7PsjM80RkeS"
            title="YouTube Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button onClick={() => setShowVideo(false)} className="btn-shadow10">Close Video</button>
        </div>
      )}

      {/* Display Notes */}
      {showNotes && (
        <div className="notes-container">
          <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Digital Communication Notes</h1>

          <div className="unit-frame">
            <h2 style={{ fontSize: '24px' }}>Unit 1</h2>
            <p>PULSE DIGITAL MODULATION: Elements of digital communication systems, advantages of digital communication systems, Elements of PCM: Sampling, Quantization & Coding, Quantization error, Companding in PCM systems. Differential PCM systems(DPCM). Delta modulation, its draw backs, adaptive delta modulation, comparison of PCM and DM systems, noise in PCM and DM systems.</p>
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
            <h2 style={{ fontSize: '24px' }}>Unit 2</h2>
            <div><p>DIGITAL MODULATION TECHNIQUES: Introduction, ASK, FSK, PSK, DPSK, DEPSK, QPSK, M-ary PSK, ASK, FSK, similarity of BFSK and BPSK.</p></div>
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
            <h2 style={{ fontSize: '24px' }}>Unit 3</h2>
            <p>DATA TRANSMISSION: Base band signal receiver, probability of error, the optimum filter, matched filter, probability of error using matched filter, coherent reception, non-coherent detection of FSK, calculation of error probability of ASK, BPSK, BFSK, QPSK.</p>
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
            <h2 style={{ fontSize: '24px' }}>Unit 4</h2>
            <p>INFORMATION THEORY: Discrete messages, concept of amount of information and its properties. Average information, Entropy and its properties. Information rate, Mutual information and its properties.</p>
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
            <h2 style={{ fontSize: '24px' }}>Unit 5</h2>
            <p>LINEAR BLOCK CODES: Introduction, Matrix description of Linear Block codes, Error detection and error correction capabilities of Linear block codes, Hamming codes, Binary cyclic codes, Algebraic structure, encoding, syndrome calculation, BCH Codes. CONVOLUTION CODES: Introduction, encoding of convolution codes, time domain approach, transform domain approach. Graphical approach: state, tree and trellis diagram decoding using Viterbi algorithm.</p>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" className="svg">
          <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
          <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.749-6.749a1.249,1.249,0,0,1,1.768,1.767l-6.75,6.751A3.189,3.189,0,0,1,17.5,22.693Z"></path>
          <path d="M29.688,33.125H5.312a4.063,4.063,0,0,1-4.062-4.062V22.817a1.25,1.25,0,0,1,2.5,0v6.246A1.562,1.562,0,0,0,5.312,30.625H29.688a1.562,1.562,0,0,0,1.562-1.562V22.817a1.25,1.25,0,0,1,2.5,0v6.246A4.063,4.063,0,0,1,29.688,33.125Z"></path>
        </svg>
      </span>
    </button>
  );
};

export default DigitalCommunication;
