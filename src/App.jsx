import { useState } from 'react';
import PersonalDetailForm from './components/PersonalDetailForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import './styles/App.css';

function App() {
  const [currentCvInfo, setCurrentCvInfo] = useState({
    personalInfo: {
      name: 'Adil Feroze',
      number: '03120430315',
      email: 'adilferoze321@gmail.com',
      summary: 'I am a very good programmer',
    },
    educationInfo: {
      institution: '',
      startYear: '',
      endYear: '',
      description: ''
    },
    experienceInfo: {
      companyName: '',
      role: '',
      startYear: '',
      endYear: '',
      description: '',
    },
  });
  const [activeForm, setActiveForm] = useState(0);

  const educationsList = [];
  const experiencesList = [];

  const addEducation = (institution, startYear, endYear, description) => {
    educationsList.push({
        institution,
        startYear,
        endYear,
        description,
    });
  };

  const addExperience = (companyName,role, startYear, endYear, description) => {
    experiencesList.push({
        companyName,
        role,
        startYear,
        endYear,
        description,
    });
  };

  const handleFormFocus = (activeFormId) => {
    setActiveForm(activeFormId);
  };


  return (
    <>
      <div className='forms'>
        <PersonalDetailForm
            currentCvInfo={currentCvInfo}
            setCurrentCvInfo={setCurrentCvInfo}
            activeStatus={activeForm === 0 ? true : false}
            setActiveStatus={handleFormFocus}
        />
        <EducationForm
          addEducation={addEducation}
          currentCvInfo={currentCvInfo}
          setCurrentCvInfo={setCurrentCvInfo}
          activeStatus={activeForm === 1 ? true : false}
          setActiveStatus={handleFormFocus}
        />
        <ExperienceForm
          addExperience={addExperience}
          currentCvInfo={currentCvInfo}
          setCurrentCvInfo={setCurrentCvInfo}
          activeStatus={activeForm === 2 ? true : false}
          setActiveStatus={handleFormFocus}
        />
      </div>
      <section id="cv">
        <div className='cv-header'>
          <div>
            <h2>{currentCvInfo.personalInfo.name}</h2>
            <i>{currentCvInfo.personalInfo.number} | {currentCvInfo.personalInfo.email}</i>
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
