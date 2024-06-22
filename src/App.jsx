import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
import Display from './components/Display';
// import './styles/App.css';

const App = () => {
  const [general, setGeneral] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <div className="app">
      <h1>CV Application</h1>
      <GeneralInfo onSubmit={setGeneral} />
      <EducationalExperience setEducation={setEducation} />
      <PracticalExperience setExperience={setExperience} />
      <Display general={general} education={education} experience={experience} />
    </div>
  );
};

export default App;
