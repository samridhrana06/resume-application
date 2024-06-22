import React, { useState } from 'react';
// import '../styles/PracticalExperience.css';

const PracticalExperience = ({ setExperience }) => {
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [mainResponsibilities, setMainResponsibilities] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [experienceEntries, setExperienceEntries] = useState([]);
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { companyName, positionTitle, mainResponsibilities, dateFrom, dateTo };
    const updatedEntries = [...experienceEntries, newEntry];
    setExperienceEntries(updatedEntries);
    setExperience(updatedEntries);
    setCompanyName('');
    setPositionTitle('');
    setMainResponsibilities('');
    setDateFrom('');
    setDateTo('');
    setIsEditing(false);
  };

  return (
    <div className="experience-info">
      <h2>Practical Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Position Title"
            value={positionTitle}
            onChange={(e) => setPositionTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Main Responsibilities"
            value={mainResponsibilities}
            onChange={(e) => setMainResponsibilities(e.target.value)}
            required
          />
          <input
            type="date"
            placeholder="From"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            required
          />
          <input
            type="date"
            placeholder="To"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          {experienceEntries.map((entry, index) => (
            <div key={index}>
              <p><strong>Company Name:</strong> {entry.companyName}</p>
              <p><strong>Position Title:</strong> {entry.positionTitle}</p>
              <p><strong>Main Responsibilities:</strong> {entry.mainResponsibilities}</p>
              <p><strong>From:</strong> {entry.dateFrom}</p>
              <p><strong>To:</strong> {entry.dateTo}</p>
            </div>
          ))}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PracticalExperience;
