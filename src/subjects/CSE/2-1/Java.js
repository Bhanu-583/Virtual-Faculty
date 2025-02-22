import React, { useState } from 'react';
import syllabusPDF from "../../../assetss/syllabus/cse/411.pdf"; 
import unit1PDF from "../../../assetss/Notes/cse/21/java/UNIT-1.pdf"; 
import unit2PDF from "../../../assetss/Notes/cse/21/java/UNIT-2.pdf";
import unit3PDF from "../../../assetss/Notes/cse/21/java/UNIT-3.pdf";
import unit4PDF from "../../../assetss/Notes/cse/21/java/UNIT-4.pdf";
import unit5PDF from "../../../assetss/Notes/cse/21/java/UNIT-5.pdf";

import './Button.css'; // Custom button styles

const Java = () => {
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
      <h3 style={{ fontSize: '22px', textAlign: 'center', marginBottom: '20px' }}>Resources for Java:</h3>
      <button onClick={handleVideoClick} className="btn-shadow10">Video Lectures</button>
      <button onClick={handleSyllabusClick} className="btn-shadow10">Syllabus</button>
      <button onClick={handleNotesClick} className="btn-shadow10">Notes</button>

      {/* Show the PDF if syllabus is clicked */}
      {showPDF && (
        <div className="pdf-container">
          <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>{currentPDF === syllabusPDF ? 'Syllabus for Java:' : 'Unit PDF'}</h1>
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
    <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Java Video Lectures:</h1>
    
    {/* YouTube Playlist Iframe */}
    <iframe
      width="100%"
      height="400px"
      src="https://www.youtube.com/embed/videoseries?list=PL5Rc9H5eTGY5MJYZix569VHzzV1raWWsd"
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
          <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Java Notes</h1>

          <div className="unit-frame">
            <h2 style={{ fontSize: '24px' }}>Unit 1</h2>
            <p>Object Oriented Programming: Basic concepts, Principles, Program Structure in Java:
Introduction, Writing Simple Java Programs, Elements or Tokens in Java Programs, Java
Statements, Command Line Arguments, User Input to Programs, Escape Sequences Comments,
Programming Style.Data Types, Variables, and Operators: Introduction, Data Types in Java, Declaration of
Variables, Data Types, Type Casting, Scope of Variable Identifier, Literal Constants, Symbolic
Constants, Formatted Output with printf() Method, Static Variables and Methods, Attribute
Final, Introduction to Operators, Precedence and Associativity of Operators, Assignment
Operator ( = ), Basic Arithmetic Operators, Increment (++) and Decrement (- -) Operators,
Ternary Operator, Relational Operators, Boolean Logical Operators, Bitwise Logical Operators.
Control Statements: Introduction, if Expression, Nested if Expressions, if–else Expressions,
Ternary Operator?:, Switch Statement, Iteration Statements, while Expression, do–while Loop,
for Loop, Nested for Loop, For–Each for Loop, Break Statement, Continue Statement.</p>
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
            <p>Classes and Objects: Introduction, Class Declaration and Modifiers, Class Members,
Declaration of Class Objects, Assigning One Object to Another, Access Control for Class
Members, Accessing Private Members of Class, Constructor Methods for Class, Overloaded
Constructor Methods, Nested Classes, Final Class and Methods, Passing Arguments by Value
and by Reference, Keyword this.
Methods: Introduction, Defining Methods, Overloaded Methods, Overloaded Constructor
Methods, Class Objects as Parameters in Methods, Access Control, Recursive Methods, Nesting
of Methods, Overriding Methods, Attributes Final and Static.</p>
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
            <p>Arrays: Introduction, Declaration and Initialization of Arrays, Storage of Array in Computer
Memory, Accessing Elements of Arrays, Operations on Array Elements, Assigning Array to
Another Array, Dynamic Change of Array Size, Sorting of Arrays, Search for Values in Arrays,
Class Arrays, Two-dimensional Arrays, Arrays of Varying Lengths, Three-dimensional Arrays,
Arrays as Vectors.
Inheritance: Introduction, Process of Inheritance, Types of Inheritances, Universal Super Class-
Object Class, Inhibiting Inheritance of Class Using Final, Access Control and Inheritance,
Multilevel Inheritance, Application of Keyword Super, Constructor Method and Inheritance,
Method Overriding, Dynamic Method Dispatch, Abstract Classes, Interfaces and Inheritance.
Interfaces: Introduction, Declaration of Interface, Implementation of Interface, Multiple
Interfaces, Nested Interfaces, Inheritance of Interfaces, Default Methods in Interfaces, Static
Methods in Interface, Functional Interfaces, Annotations.</p>
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
            <p>Packages and Java Library: Introduction, Defining Package, Importing Packages and Classes
into Programs, Path and Class Path, Access Control, Packages in Java SE, Java.lang Package and
its Classes, Class Object, Enumeration, class Math, Wrapper Classes, Auto-boxing and Autounboxing,
Java util Classes and Interfaces, Formatter Class, Random Class, Time Package, Class
Instant (java.time.Instant), Formatting for Date/Time in Java, Temporal Adjusters Class,
Temporal Adjusters Class.Exception Handling: Introduction, Hierarchy of Standard Exception Classes, Keywords throws
and throw, try, catch, and finally Blocks, Multiple Catch Clauses, Class Throwable, Unchecked
Exceptions, Checked Exceptions.
Java I/O and File: Java I/O API, standard I/O streams, types, Byte streams, Character streams,
Scanner class, Files in Java</p>
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
            <p>string Handling in Java: Introduction, Interface Char Sequence, Class String, Methods for
Extracting Characters from Strings,Comparison, Modifying, Searching; Class String Buffer.
Multithreaded Programming: Introduction, Need for Multiple Threads Multithreaded
Programming for Multi-core Processor, Thread Class, Main Thread-Creation of New Threads,
Thread States, Thread Priority-Synchronization, Deadlock and Race Situations, Inter-thread
Communication - Suspending, Resuming, and Stopping of Threads.
Java Database Connectivity: Introduction, JDBC Architecture, Installing MySQL and MySQL
Connector/J, JDBC Environment Setup, Establishing JDBC Database Connections, ResultSet
Interface
Java FX GUI: Java FX Scene Builder, Java FX App Window Structure, displaying text and
image, event handling, laying out nodes in scene graph, mouse events </p>
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
          <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.818.818,0,0,0,.814.814H31.436a.818.818,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
        </svg>
      </span>
    </button>
  );
};

export default Java;
