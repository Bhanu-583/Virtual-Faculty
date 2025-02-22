import React, { useState } from 'react';
import syllabusPDF from "../../../assetss/syllabus/cse/411.pdf"; 
import unit1PDF from "../../../assetss/Notes/cse/21/ads/UNIT-1.pdf"; 
import unit2PDF from "../../../assetss/Notes/cse/21/ads/UNIT-2.pdf";
import unit3PDF from "../../../assetss/Notes/cse/21/ads/UNIT-3.pdf";
import unit4PDF from "../../../assetss/Notes/cse/21/ads/UNIT-4.pdf";
import unit5PDF from "../../../assetss/Notes/cse/21/ads/UNIT-5.pdf";

import './Button.css'; // Custom button styles

const AdvancedDataStructures = () => {
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
      <h3 style={{ fontSize: '22px', textAlign: 'center', marginBottom: '20px' }}>Resources for Advanced Data Structures:</h3>
      <button onClick={handleVideoClick} className="btn-shadow10">Video Lectures</button>
      <button onClick={handleSyllabusClick} className="btn-shadow10">Syllabus</button>
      <button onClick={handleNotesClick} className="btn-shadow10">Notes</button>

      {/* Show the PDF if syllabus is clicked */}
      {showPDF && (
        <div className="pdf-container">
          <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>{currentPDF === syllabusPDF ? 'Syllabus for Advanced Data Structures:' : 'Unit PDF'}</h1>
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
          <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Advanced Data Structures Video Lectures:</h1>
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/videoseries?list=PLBhIctyfOJgCw7YDJ5MZQgce2LK-j9N1M"
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
          <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Advanced Data Structures Notes</h1>

          <div className="unit-frame">
            <h2 style={{ fontSize: '24px' }}>Unit 1</h2>
            <p>Introduction to Algorithm Analysis, Space and Time Complexity analysis, Asymptotic Notations. AVL Trees – Creation, Insertion, Deletion operations and Applications. B-Trees – Creation, Insertion, Deletion operations and Applications.</p>
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
            <p>Heap Trees (Priority Queues) – Min and Max Heaps, Operations and Applications. Graphs – Terminology, Representations, Basic Search and Traversals, Connected Components, Biconnected Components, applications. Divide and Conquer: Quick Sort, Merge Sort, Strassen’s matrix multiplication, Convex Hull.</p>
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
            <p>Greedy Method: Job Sequencing with deadlines, Knapsack Problem, Minimum cost spanning trees, Single Source Shortest Paths. Dynamic Programming: All pairs shortest paths, Single Source Shortest Paths, Optimal Binary Search Trees, 0/1 Knapsack, String Editing, Travelling Salesperson problem.</p>
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
            <p>Backtracking: 8-Queens Problem, Sum of Subsets problem, Graph Coloring, 0/1 Knapsack Problem. Branch and Bound: 0/1 Knapsack Problem, Travelling Salesperson problem.</p>
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
            <p>NP Hard and NP Complete Problems: Basic Concepts, Cook’s theorem. NP Hard Graph Problems: Clique Decision Problem (CDP), Chromatic Number Decision Problem (CNDP), Traveling Salesperson Decision Problem (TSP). NP Hard Scheduling Problems: Scheduling Identical Processors, Job Shop Scheduling.</p>
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
          <path d="M17.5,22.693a3.189,3.189,0,0,1-2.131-.832L3.264,12.761a1.25,1.25,0,1,1,1.662-1.869L17.033,20.2a.7.7,0,0,0,.935,0L29.865,10.892a1.25,1.25,0,1,1,1.662,1.869L19.63,21.861A3.189,3.189,0,0,1,17.5,22.693Z"></path>
          <path d="M29.75,34.062H5.25A3.189,3.189,0,0,1,2.062,30.875V21.875a1.25,1.25,0,0,1,2.5,0v9A.688.688,0,0,0,5.25,31.562H29.75a.688.688,0,0,0,.688-.688V21.875a1.25,1.25,0,0,1,2.5,0v9A3.189,3.189,0,0,1,29.75,34.062Z"></path>
        </svg>
      </span>
    </button>
  );
};

export default AdvancedDataStructures;
