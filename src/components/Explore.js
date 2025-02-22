import React, { useState } from "react";

const Explore = () => {
  const [department, setDepartment] = useState(null);
  const [year, setYear] = useState(null);
  const [semester, setSemester] = useState(null);

  const departments = ["CSE", "ECE"];
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
  const semesters = ["Semester 1", "Semester 2"];
  const subjects = {
    "Semester 1": ["Maths", "Physics", "Programming"],
    "Semester 2": ["Data Structures", "Circuits", "Algorithms"]
  };

  return (
    <div>
      <h2>Explore Courses</h2>
      
      {!department && (
        <div>
          <h3>Select Department:</h3>
          {departments.map((dept) => (
            <button key={dept} onClick={() => setDepartment(dept)}>
              {dept}
            </button>
          ))}
        </div>
      )}

      {department && !year && (
        <div>
          <h3>Select Year:</h3>
          {years.map((yr) => (
            <button key={yr} onClick={() => setYear(yr)}>
              {yr}
            </button>
          ))}
        </div>
      )}

      {year && !semester && (
        <div>
          <h3>Select Semester:</h3>
          {semesters.map((sem) => (
            <button key={sem} onClick={() => setSemester(sem)}>
              {sem}
            </button>
          ))}
        </div>
      )}

      {semester && (
        <div>
          <h3>Subjects for {semester}:</h3>
          <ul>
            {subjects[semester].map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        </div>
      )}

      {department && <button onClick={() => setDepartment(null)}>Go Back</button>}
    </div>
  );
};

export default Explore;
