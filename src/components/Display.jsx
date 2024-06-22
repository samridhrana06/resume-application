import React from 'react';
// import '../styles/Display.css';

const Display = ({ general, education, experience }) => {
  return (
    <div className="display-section">
      <div className="general-info">
        <h2>General Information</h2>
        <p><strong>Name:</strong> {general.name}</p>
        <p><strong>Email:</strong> {general.email}</p>
        <p><strong>Phone:</strong> {general.phone}</p>
      </div>

      <div className="education-info">
        <h2>Educational Experience</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <p><strong>School Name:</strong> {edu.schoolName}</p>
            <p><strong>Title of Study:</strong> {edu.titleOfStudy}</p>
            <p><strong>Date of Study:</strong> {edu.dateOfStudy}</p>
          </div>
        ))}
      </div>

      <div className="experience-info">
        <h2>Practical Experience</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <p><strong>Company Name:</strong> {exp.companyName}</p>
            <p><strong>Position Title:</strong> {exp.positionTitle}</p>
            <p><strong>Main Responsibilities:</strong> {exp.mainResponsibilities}</p>
            <p><strong>From:</strong> {exp.dateFrom}</p>
            <p><strong>To:</strong> {exp.dateTo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
