import React, { useState } from 'react';
import syllabusPDF from "../../../assetss/syllabus/cse/411.pdf"; // Reuse syllabus if it's the same for all subjects
import unit1PDF from "../../../assetss/Notes/cse/31/dwdm/UNIT-1.pdf"; 
import unit2PDF from "../../../assetss/Notes/cse/31/dwdm/UNIT-2.pdf";
import unit3PDF from "../../../assetss/Notes/cse/31/dwdm/UNIT-3.pdf";
import unit4PDF from "../../../assetss/Notes/cse/31/dwdm/UNIT-4.pdf";
import unit5PDF from "../../../assetss/Notes/cse/31/dwdm/UNIT-5.pdf";

import './Button.css'; // Custom button styles

const DataWarehouseAndManagement = () => {
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
      <h3 style={{ fontSize: '22px', textAlign: 'center', marginBottom: '20px' }}>Resources for Data Warehouse and Data Management:</h3>
      <button onClick={handleVideoClick} className="btn-shadow10">Video Lectures</button>
      <button onClick={handleSyllabusClick} className="btn-shadow10">Syllabus</button>
      <button onClick={handleNotesClick} className="btn-shadow10">Notes</button>

      {/* Show the PDF if syllabus is clicked */}
      {showPDF && (
        <div className="pdf-container">
          <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Syllabus for Data Warehouse and Data Management:</h1>
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
          <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Data Warehouse and Data Management Video Lectures:</h1>
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/videoseries?list=PL06g_pc9cPAjYqaLnLKmwDrZiiHtPp9FU"
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
          <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Data Warehouse and Data Management Notes</h1>

          <div className="unit-frame">
            <h2 style={{ fontSize: '24px' }}>Unit 1</h2>
            <p>Data Warehousing and Online Analytical Processing: Data Warehouse: Basic concepts, Data Warehouse Modelling: Data Cube and OLAP, Data Warehouse Design and Usage, Data Warehouse Implementation, Introduction: Why and What is data mining, What kinds of data need to be mined and patterns can be mined, Which technologies are used, Which kinds of applications are targeted.</p>
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
            <p>Data Pre-processing: An Overview, Data Cleaning, Data Integration, Data Reduction, Data Transformation and Data Discretization.</p>
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
            <p>Classification: Basic Concepts, General Approach to solving a classification problem, Decision Tree Induction: Attribute Selection Measures, Tree Pruning, Scalability and Decision Tree Induction, Visual Mining for Decision Tree Induction.</p>
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
            <p>Association Analysis: Problem Definition, Frequent Item set Generation, Rule Generation: Confident Based Pruning, Rule Generation in Apriori Algorithm, Compact Representation of frequent item sets, FP-Growth Algorithm.</p>
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
            <p>Cluster Analysis: Overview, Basics and Importance of Cluster Analysis, Clustering techniques, Different Types of Clusters; K-means: The Basic K-means Algorithm, K-means Additional Issues, Bi-secting K Means.</p>
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
          <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.081,6.08a.688.688,0,0,0,.966,0l6.081-6.08a1.249,1.249,0,0,1,1.767,1.767L19.762,21.757A3.189,3.189,0,0,1,17.5,22.693Z"></path>
          <path d="M30.625,33.625H4.375a3.75,3.75,0,0,1-3.75-3.75V21.875a1.25,1.25,0,0,1,2.5,0V29.875a1.25,1.25,0,0,0,1.25,1.25H30.625a1.25,1.25,0,0,0,1.25-1.25V21.875a1.25,1.25,0,0,1,2.5,0V29.875A3.75,3.75,0,0,1,30.625,33.625Z"></path>
        </svg>
      </span>
    </button>
  );
};

export default DataWarehouseAndManagement;
