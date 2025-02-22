import React, { useState } from 'react';
import syllabusPDF from "../../../assetss/syllabus/cse/411.pdf"; 
import unit1PDF from "../../../assetss/Notes/cse/21/math3/UNIT-1.pdf"; 
import unit2PDF from "../../../assetss/Notes/cse/21/math3/UNIT-2.pdf";
import unit3PDF from "../../../assetss/Notes/cse/21/math3/UNIT-3.pdf";
import unit4PDF from "../../../assetss/Notes/cse/21/math3/UNIT-4.pdf";
import unit5PDF from "../../../assetss/Notes/cse/21/math3/UNIT-5.pdf";

import './Button.css'; // Custom button styles

const MathematicsIII = () => {
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
      <h3 style={{ fontSize: '22px', textAlign: 'center', marginBottom: '20px' }}>Resources for Mathematics-III:</h3>
      <button onClick={handleVideoClick} className="btn-shadow10">Video Lectures</button>
      <button onClick={handleSyllabusClick} className="btn-shadow10">Syllabus</button>
      <button onClick={handleNotesClick} className="btn-shadow10">Notes</button>

      {/* Show the PDF if syllabus is clicked */}
      {showPDF && (
        <div className="pdf-container">
          <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Syllabus for Mathematics-III</h1>
          <iframe
            src={currentPDF}
            width="100%"
            height="600px"
            title="PDF Viewer"
          ></iframe>
          <button onClick={() => setShowPDF(false)} className="btn-shadow10">Close PDF</button>
        </div>
      )}

       {/* Provide a clickable link for video lectures */}
       {showVideo && (
        <div className="video-container">
          <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Mathematics-III Video Lectures:</h1>
          <a
            href="https://www.youtube.com/playlist?list=PLeIE3weEKo4YJlipa7UAw20xC_ZsnWyLw"
            target="_blank"
            rel="noopener noreferrer"
            className="video-link"
          >
            Click here to watch the Mathematics-III video lectures on YouTube
          </a>
          <button onClick={() => setShowVideo(false)} className="btn-shadow10">Close Video</button>
        </div>
      )}
      {/* Show Notes when the Notes button is clicked */}
      {showNotes && (
        <div className="notes-container">
          <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Mathematics-III Notes</h1>

          <div className="unit-frame">
            <h2 style={{ fontSize: '24px' }}>Unit 1: Mathematical Logic</h2>
            <p>Propositional Calculus, Connectives, Well Formed Formulas, Truth Tables, Tautologies, Equivalence, Duality Law, Predicate Calculus, Variables and Quantifiers, Inference Theory for Predicate Calculus.</p>
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
            <h2 style={{ fontSize: '24px' }}>Unit 2: Set Theory</h2>
            <p>Operations on Sets, Principle of Inclusion-Exclusion, Relations, Equivalence, Lattice and its Properties, Partial Ordering, Hasse Diagrams, Functions: Bijective, Inverse, Recursive Functions.</p>
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
            <h2 style={{ fontSize: '24px' }}>Unit 3: Combinatorics and Recurrence Relations</h2>
            <p>Permutations, Combinations, Binomial and Multinomial Theorems, Generating Functions, Recurrence Relations, Characteristic Roots Method, Solving Recurrence Relations.</p>
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
            <h2 style={{ fontSize: '24px' }}>Unit 4: Graph Theory</h2>
            <p>Graph Theory Basics, Eulerian and Hamiltonian Graphs, Adjacency and Incidence Matrices, Isomorphic Graphs, Paths and Circuits, Applications of Graph Theory.</p>
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
            <h2 style={{ fontSize: '24px' }}>Unit 5: Multi Graphs</h2>
            <p>Multigraphs, Bipartite and Planar Graphs, Euler’s Theorem, Graph Colouring, Spanning Trees, Prim’s and Kruskal’s Algorithms, BFS and DFS Spanning Trees.</p>
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
          <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.249,1.249,0,1,1,1.767,1.767l-6.751,6.751A3.189,3.189,0,0,1,17.5,22.693Z"></path>
          <path d="M28.437,33.811H6.563A4.314,4.314,0,0,1,2.25,29.5V22.937a1.25,1.25,0,0,1,2.5,0V29.5a1.815,1.815,0,0,0,1.813,1.813H28.437A1.815,1.815,0,0,0,30.25,29.5V22.937a1.25,1.25,0,0,1,2.5,0V29.5A4.314,4.314,0,0,1,28.437,33.811Z"></path>
        </svg>
      </span>
    </button>
  );
};

export default MathematicsIII;
