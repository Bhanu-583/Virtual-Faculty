import React, { useState } from 'react';
import syllabusPDF from "../../../assetss/syllabus/cse/411.pdf"; 
import unit1PDF from "../../../assetss/Notes/cse/31/daa/UNIT-1.pdf"; 
import unit2PDF from "../../../assetss/Notes/cse/31/daa/UNIT-2.pdf";
import unit3PDF from "../../../assetss/Notes/cse/31/daa/UNIT-3.pdf";
import unit4PDF from "../../../assetss/Notes/cse/31/daa/UNIT-4.pdf";
import unit5PDF from "../../../assetss/Notes/cse/31/daa/UNIT-5.pdf";

import './Button.css'; // Custom button styles

const DesignAndAnalysis = () => {
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
      <h3 style={{ fontSize: '22px', textAlign: 'center', marginBottom: '20px' }}>Resources for Design and Analysis of Algorithms:</h3>
      <button onClick={handleVideoClick} className="btn-shadow10">Video Lectures</button>
      <button onClick={handleSyllabusClick} className="btn-shadow10">Syllabus</button>
      <button onClick={handleNotesClick} className="btn-shadow10">Notes</button>

      {/* Show the PDF if syllabus is clicked */}
      {showPDF && (
        <div className="pdf-container">
          <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>{currentPDF === syllabusPDF ? 'Syllabus for Design and Analysis of Algorithms:' : 'Unit PDF'}</h1>
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
          <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Design and Analysis of Algorithms Video Lectures:</h1>
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/videoseries?list=PLmAmHQ-_5ySx5Pov1ZJmHebsVuiBvUflf"
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
          <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Design and Analysis of Algorithms Notes</h1>

          <div className="unit-frame">
            <h2 style={{ fontSize: '24px' }}>Unit 1</h2>
            <p>Introduction: Algorithm Definition, Algorithm Specification, performance Analysis, Performance measurement, Asymptotic notation, Randomized Algorithms. Sets & Disjoint set union: introduction, union and find operations.</p>
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
            <p>Divide and Conquer: General Method, Defective chessboard, Binary Search, finding the maximum and minimum, Merge sort, Quick sort. The Greedy Method: The general Method, container loading, knapsack problem, Job sequencing with deadlines, minimum-cost spanning Trees.</p>
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
            <p>Dynamic Programming: The general method, multistage graphs, All pairs-shortest paths, singlesource shortest paths: general weights, optimal Binary search trees, 0/1 knapsack, reliability Design, The traveling salesperson problem, matrix chain multiplication.</p>
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
            <p>Backtracking: The General Method, The 8-Queens problem, sum of subsets, Graph coloring, Hamiltonian cycles, knapsack problem. Branch and Bound: FIFO Branch-and-Bound, LC Branch-and-Bound, 0/1 Knapsack problem, Traveling salesperson problem.</p>
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
            <p>NP-Hard and NP-Complete problems: Basic concepts, Cook’s Theorem. String Matching: Introduction, String Matching-Meaning and Application, Native String Matching Algorithm, Rabin-Karp Algorithm, Knuth-Morris-Pratt Automata, Tries, Suffix Tree.</p>
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
          <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a          a1.25,1.25,0,0,1,1.767-1.767l6.75,6.75a.748.748,0,0,0,1.059,0l6.75-6.75a1.25,1.25,0,1,1,1.767,1.767l-6.75,6.75A3.189,3.189,0,0,1,17.5,22.693Z"></path>
          <path d="M28.75,32.813h-22.5A6.25,6.25,0,0,1,0,26.563v-2.5A6.25,6.25,0,0,1,6.25,17.813a1.25,1.25,0,1,1,0,2.5,3.75,3.75,0,0,0-3.75,3.75v2.5a3.75,3.75,0,0,0,3.75,3.75h22.5a3.75,3.75,0,0,0,3.75-3.75v-2.5a3.75,3.75,0,0,0-3.75-3.75,1.25,1.25,0,1,1,0-2.5,6.25,6.25,0,0,1,6.25,6.25v2.5A6.25,6.25,0,0,1,28.75,32.813Z"></path>
        </svg>
      </span>
    </button>
  );
};

export default DesignAndAnalysis;

