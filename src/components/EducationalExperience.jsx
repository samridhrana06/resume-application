import React, { useState } from 'react';
// import '../styles/EducationalExperience.css';

const EducationalExperience = ({ setEducation }) => {
  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [dateOfStudy, setDateOfStudy] = useState('');
  const [educationEntries, setEducationEntries] = useState([]);
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { schoolName, titleOfStudy, dateOfStudy };
    const updatedEntries = [...educationEntries, newEntry];
    setEducationEntries(updatedEntries);
    setEducation(updatedEntries);
    setSchoolName('');
    setTitleOfStudy('');
    setDateOfStudy('');
    setIsEditing(false);
  };

  return (
    <div className="education-info">
      <h2>Educational Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="School Name"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Title of Study"
            value={titleOfStudy}
            onChange={(e) => setTitleOfStudy(e.target.value)}
            required
          />
          <input
            type="date"
            placeholder="Date of Study"
            value={dateOfStudy}
            onChange={(e) => setDateOfStudy(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          {educationEntries.map((entry, index) => (
            <div key={index}>
              <p><strong>School Name:</strong> {entry.schoolName}</p>
              <p><strong>Title of Study:</strong> {entry.titleOfStudy}</p>
              <p><strong>Date of Study:</strong> {entry.dateOfStudy}</p>
            </div>
          ))}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EducationalExperience;
