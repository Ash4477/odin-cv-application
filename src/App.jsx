import { useState } from 'react';
import PersonalDetailForm from './components/PersonalDetailForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import './styles/App.css';

function App() {
  const [currentCvInfo, setCurrentCvInfo] = useState({
    personalInfo: {
      name: 'Adil Feroze',
      phoneNumber: '03120430315',
      email: 'adilferoze321@gmail.com',
      summary: 'I am a very good programmer',
    },
    educationInfo: {

    },
    experienceInfo: {},
  });
  const [activeForm, setActiveForm] = useState(1);

  function handleFormFocus(activeFormId) {
    setActiveForm(activeFormId);
  };

  return (
    <>
      <div className='forms'>
        <PersonalDetailForm activeStatus={activeForm === 0 ? true : false} setActiveStatus={handleFormFocus}/>
        <EducationForm activeStatus={activeForm === 1 ? true : false} setActiveStatus={handleFormFocus}/>
        <ExperienceForm activeStatus={activeForm === 2 ? true : false} setActiveStatus={handleFormFocus}/>
      </div>
      <section id="cv">
        <div className='cv-header'>
          <div>
            <h2>{currentCvInfo.personalInfo.name}</h2>
            <i>{currentCvInfo.personalInfo.phoneNumber} | {currentCvInfo.personalInfo.email}</i>
            <p>{currentCvInfo.personalInfo.summary}</p>
          </div>
          <span className='design-pad'></span>
        </div>
        <div className='cv-info'>
          <h3>Education:</h3>
          <ul>
            <li>
              <div>
                <p>COMSATS</p>
                <p>2022-2025</p>
              </div>
              <i>Program: BSCS, Grade: A+</i>
            </li>
          </ul>
          <ul>
            <li>
              <div>
                <p>COMSATS</p>
                <p>2022-2025</p>
              </div>
              <i>Program: BSCS, Grade: A+</i>
            </li>
          </ul>
        </div>
        <div className='cv-info'>
          <h3>Experiences:</h3>
          <ul>
            <li>
              <div>
                <p>COMSATS</p>
                <p>2022-2025</p>
              </div>
              <i>Program: BSCS, Grade: A+</i>
            </li>
          </ul>
          <ul>
            <li>
              <div>
                <p>COMSATS</p>
                <p>2022-2025</p>
              </div>
              <i>Program: BSCS, Grade: A+</i>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default App
