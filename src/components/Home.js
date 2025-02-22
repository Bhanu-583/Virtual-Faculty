import React, { useState } from "react";
import './Home.css'; // Import the CSS file for additional styling
import CloudComputing from '../../src/subjects/CSE/4-1/CloudComputing';
import EthicalHacking from "../../src/subjects/CSE/4-1/EthicalHacking";
import InternetOfThings from "../../src/subjects/CSE/4-1/InternetOfThings";
import DigitalCommunication from "../subjects/CSE/4-1/DigitalCommunication";
import DeepLearning from "../subjects/CSE/4-1/DeepLearning";
import ProjectWork from "../subjects/CSE/4-2/ProjectWork";
import DataWarehouseAndManagement from "../subjects/CSE/3-1/DataWarehouseAndManagement";
import DesignAndAnalysis from "../subjects/CSE/3-1/DesignAndAnalysis";
import ComputerNetworks from "../subjects/CSE/3-1/ComputerNetwork";
import DigitalLogicDesign from "../subjects/CSE/3-1/DigitalLogicDesign";
import ArtificialIntelligence from "../subjects/CSE/3-1/ArtificialIntelligencee";
import AdvancedDataStructures from "../subjects/CSE/2-1/AdvancedDataStructures";
import Java from "../subjects/CSE/2-1/Java";
import ComputerOrganization from "../subjects/CSE/2-1/ComputerOrganization.";
import MathematicsIII from "../subjects/CSE/2-1/MathematicsIII";

const Explore = () => {
  const [showDepartments, setShowDepartments] = useState(false);
  const [department, setDepartment] = useState(null);
  const [year, setYear] = useState(null);
  const [semester, setSemester] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [initial, setInitial] = useState(true);
  const [showInfo, setShowInfo] = useState(true);

  const departments = ["CSE", "CSM", "CSE [AI & ML]", "ECE"];
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
  const semesters = ["Semester 1", "Semester 2"];
  const subjects = {
    CSE: {
      "Semester 1": {
        "1st Year": ["Mathematics-I","Physics","C-Programming"],
        "2nd Year": ["Advance Data Structures","JAVA","Computer Organisation","Mathematics-III"],
        "3rd Year": ["Design & Analysis of Algorithms","Data Warehouse and Management","Computer Networks","Digital Logic Design","Artificial Intelligence"],
        "4th Year": ["Cloud Computing", "Ethical Hacking", "Internet of Things", "Digital Communications", "Deep Learning"]
      },
      "Semester 2": {
        "1st Year": ["Chemistry", "Electronics", "Python Programming"],
        "2nd Year": ["Advanced Circuits", "Signal Processing", "Software Engineering"],
        "3rd Year": ["Compilers", "AI", "Machine Learning"],
        "4th Year": ["Project Work"]
      }
    },
    CSM: {
      "Semester 1": {
        "1st Year": ["Maths for CSM", "Introduction to Computing", "Web Development"],
        "2nd Year": ["Database Systems", "Cloud Systems", "Data Mining"],
        "3rd Year": ["Advanced Algorithms", "Web Security", "Big Data"],
        "4th Year": ["Artificial Intelligence", "Natural Language Processing", "Cybersecurity"]
      },
      "Semester 2": {
        "1st Year": ["Discrete Mathematics", "Object-Oriented Programming", "Software Tools"],
        "2nd Year": ["Networks", "Operating Systems", "Machine Learning"],
        "3rd Year": ["Data Science", "Cryptography", "Cloud Technologies"],
        "4th Year": ["Capstone Project", "Blockchain Technology", "Quantum Computing"]
      }
    },
    "CSE [AI & ML]": {
      "Semester 1": {
        "1st Year": ["Mathematics for AI", "Python for AI", "Data Structures"],
        "2nd Year": ["AI Basics", "Deep Learning", "Data Science"],
        "3rd Year": ["Neural Networks", "Natural Language Processing", "Computer Vision"],
        "4th Year": ["Reinforcement Learning", "AI Ethics", "Advanced AI Techniques"]
      },
      "Semester 2": {
        "1st Year": ["Linear Algebra", "Statistics", "Algorithms for AI"],
        "2nd Year": ["Machine Learning", "AI Models", "Optimization"],
        "3rd Year": ["Generative Models", "Advanced Neural Networks", "AI in Robotics"],
        "4th Year": ["AI Capstone", "AI and Society", "AI Research Methods"]
      }
    },
    ECE: {
      "Semester 1": {
        "1st Year": ["Physics", "Electronics", "Signals"],
        "2nd Year": ["Circuit Theory", "Digital Logic Design", "Analog Circuits"],
        "3rd Year": ["Control Systems", "Communication Engineering", "VLSI Design"],
        "4th Year": ["Embedded Systems", "Wireless Communication", "Radar Systems"]
      },
      "Semester 2": {
        "1st Year": ["Semiconductors", "Communication Systems", "Embedded Programming"],
        "2nd Year": ["Microprocessors", "Electromagnetic Theory", "Signals and Systems"],
        "3rd Year": ["Antennas", "Optical Communication", "Satellite Systems"],
        "4th Year": ["IoT Systems", "5G Networks", "Advanced VLSI Design"]
      }
    }
  };

  const goBack = () => {
    if (selectedSubject) {
      setSelectedSubject(null);
    } else if (semester) {
      setSemester(null);
    } else if (year) {
      setYear(null);
    } else if (department) {
      setDepartment(null);
    } else if (showDepartments) {
      setShowDepartments(false);
      setInitial(true); // Show the initial button again
      setShowInfo(true); // Show the info section again
    }
  };

  const startExploring = () => {
    setInitial(false);
    setShowDepartments(true);
    setShowInfo(false);
  };

  return (
    <div className="explore-container">
      <h1 className="main-heading">Welcome to Virtual Faculty – Your Ultimate Academic Resource Hub!</h1>

      {/* Information section */}
      {showInfo && (
        <div className={`info-section ${!showInfo ? "hidden" : ""}`}>
          <p>
            No matter what year or semester you’re in, Virtual Faculty has you covered! Our platform provides comprehensive PDFs and video lectures tailored to your exact curriculum. From beginner to advanced topics, we’ve organized everything by semester, so you can easily find the materials you need. Whether you're studying for exams, revising concepts, or exploring new subjects, Virtual Faculty is your go-to solution for quality academic resources.
          </p>
          <p>
            Join us today and get instant access to a wealth of knowledge, right at your fingertips! Let us help you succeed on your academic journey!
          </p>
        </div>
      )}

      {/* Initial button to start selection */}
      {initial && (
        <button onClick={startExploring} className="btn-shadow10">
          Let's Dive!
        </button>
      )}

      {/* Display selected department, year, semester, and subject in a laptop frame */}
      {(department || year || semester || selectedSubject) && (
        <div className="laptop-frame">
          <div className="screen">
            {department && <p>Selected Department: {department}</p>}
            {year && <p>Selected Year: {year}</p>}
            {semester && <p>Selected Semester: {semester}</p>}
            {selectedSubject && <p>Selected Subject: {selectedSubject}</p>}
          </div>
        </div>
      )}

      {/* Department selection */}
      {showDepartments && !department && (
        <div>
          <h3 style={{ fontSize: '22px', textAlign: 'center', marginBottom: '20px' }}>Select Department:</h3>
          {departments.map((dept) => (
            <button key={dept} onClick={() => setDepartment(dept)} className="btn-shadow10">
              {dept}
            </button>
          ))}
        </div>
      )}

      {/* Year selection */}
      {department && !year && (
        <div>
          <h3 style={{ fontSize: '22px', textAlign: 'center', marginBottom: '20px' }}>Select Year:</h3>
          {years.map((yr) => (
            <button key={yr} onClick={() => setYear(yr)} className="btn-shadow10">
              {yr}
            </button>
          ))}
        </div>
      )}

      {/* Semester selection */}
      {year && !semester && (
        <div>
          <h3 style={{ fontSize: '22px', textAlign: 'center', marginBottom: '20px' }}>Select Semester:</h3>
          {semesters.map((sem) => (
            <button key={sem} onClick={() => setSemester(sem)} className="btn-shadow10">
              {sem}
            </button>
          ))}
        </div>
      )}

      {/* Subject selection */}
      {semester && year && department && !selectedSubject && (
        <div>
          <h3 style={{ fontSize: '22px', textAlign: 'center', marginBottom: '20px' }}>Select Subject:</h3>
          {subjects[department][semester][year].map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className="btn-shadow10"
            >
              {sub}
            </button>
          ))}
        </div>
      )}
{/* Render the selected subject component */}
{selectedSubject === "Cloud Computing" && <CloudComputing />}
{selectedSubject === "Ethical Hacking" && <EthicalHacking />}
{selectedSubject === "Internet of Things" && <InternetOfThings />}
{selectedSubject === "Digital Communications" && <DigitalCommunication />}
{selectedSubject === "Deep Learning" && <DeepLearning />}
{selectedSubject === "Project Work" && <ProjectWork />}
{selectedSubject === "Data Warehouse and Management" && <DataWarehouseAndManagement />}
{selectedSubject === "Design & Analysis of Algorithms" && <DesignAndAnalysis />}
{selectedSubject === "Computer Networks" && <ComputerNetworks />}
{selectedSubject === "Digital Logic Design" && <DigitalLogicDesign />}
{selectedSubject === "Artificial Intelligence" && <ArtificialIntelligence />}
{selectedSubject === "Advance Data Structures" && <AdvancedDataStructures />}
{selectedSubject === "JAVA" && <Java />}
{selectedSubject === "Computer Organisation" && <ComputerOrganization />}
{selectedSubject === "Mathematics-III" && <MathematicsIII />}



      {/* Go Back button */}
      {(showDepartments || department || year || semester || selectedSubject) && (
        <button onClick={goBack} className="btn-shadow10">
          Go Back
        </button>
      )}
    </div>
  );
};

export default Explore;
