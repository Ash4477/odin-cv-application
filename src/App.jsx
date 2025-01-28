import { useState } from 'react';
import PersonalDetailForm from './components/PersonalDetailForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import EducationListItem from './components/EducationListItem';
import ExperienceListItem from './components/ExperienceListItem';
import './styles/App.css';

function App() {
  const [currentCvInfo, setCurrentCvInfo] = useState({
    isActive: false,
    personalInfo: {
      name: 'Adil Feroze',
      number: '03120430315',
      email: 'adilferoze321@gmail.com',
      summary: 'I am a very good programmer',
    },
    educationInfo: {
      institution: '',
      program: '',
      grade: '',
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

  const addEducation = (institution, startYear, endYear, program, grade, description) => {
    educationsList.push({
        institution,
        startYear,
        endYear,
        program,
        grade,
        description,
    });
  };

  const addExperience = (companyName, role, startYear, endYear, description) => {
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
            {educationsList.map(edu => (
              <EducationListItem
                institution={edu.institution}
                startYear={edu.startYear}
                endYear={edu.endYear}
                program={edu.program}
                grade={edu.grade}
                description={edu.description}
              />
            ))}
            { currentCvInfo.isActive && <EducationListItem
                institution={currentCvInfo.educationInfo.institution}
                startYear={currentCvInfo.educationInfo.startYear}
                endYear={currentCvInfo.educationInfo.endYear}
                program={currentCvInfo.educationInfo.program}
                grade={currentCvInfo.educationInfo.grade}
                description={currentCvInfo.educationInfo.description}
            /> }
          </ul>
        </div>
        <div className='cv-info'>
          <h3>Experiences:</h3>
          <ul>
          { experiencesList.map(exp => (
              <ExperienceListItem
                companyName={exp.companyName}
                role={exp.role}
                startYear={exp.startYear}
                endYear={exp.endYear}
                description={exp.description}
              />
            )) }
            { currentCvInfo.isActive &&  
              <ExperienceListItem
                companyName={currentCvInfo.experienceInfo.companyName}
                role={currentCvInfo.experienceInfo.role}
                startYear={currentCvInfo.experienceInfo.startYear}
                endYear={currentCvInfo.experienceInfo.endYear}
                description={currentCvInfo.experienceInfo.description}
              /> }
          </ul>
        </div>
      </section>
    </>
  )
}

export default App
