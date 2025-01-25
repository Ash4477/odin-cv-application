import { useState } from 'react';
import './styles/App.css';
import PersonalDetailForm from './components/PersonalDetailForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';

function App() {

  return (
    <>
      <div className='forms'>
        <PersonalDetailForm />
        <EducationForm />
        <ExperienceForm />
      </div>
      <section id="cv"></section>
    </>
  )
}

export default App
