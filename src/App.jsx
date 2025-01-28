import { useState } from 'react';
import PersonalDetailForm from './components/PersonalDetailForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import EducationListItem from './components/EducationListItem';
import ExperienceListItem from './components/ExperienceListItem';
import './styles/App.css';

function App() {
  const [educationsList, setEducationsList] = useState([]);
  const [experiencesList, setExperiencesList] = useState([]);
  const [currentCvInfo, setCurrentCvInfo] = useState({
    personalInfo: {
      name: 'John Doe',
      number: '+92123456789',
      email: 'johndoe@gmail.com',
      summary: 'I am a very good programmer',
    },
    educationInfo: {
      isActive: false,
      institution: '',
      program: '',
      grade: '',
      startYear: '',
      endYear: '',
      description: ''
    },
    experienceInfo: {
      isActive: false,
      companyName: '',
      role: '',
      startYear: '',
      endYear: '',
      description: '',
    },
  });
  const [activeForm, setActiveForm] = useState(0);

  const addEducation = (institution, startYear, endYear, program, grade, description) => {
    setEducationsList(prev => [...prev, { institution, program, grade, startYear, endYear, description }]);
  };

  
  const deleteEducation = (itemIndex) => {
    setEducationsList(prev => prev.filter((item, idx) => idx != itemIndex));
  };

  const addExperience = (companyName, role, startYear, endYear, description) => {
    setExperiencesList(prev => [...prev, {
      companyName,
      role,
      startYear,
      endYear,
      description,
  }]);
  };

  const deleteExperience = (itemIndex) => {
    setExperiencesList(prev => prev.filter((item, idx) => idx != itemIndex));
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
          educationsList={educationsList}
          addEducation={addEducation}
          deleteEducation={deleteEducation}
          currentCvInfo={currentCvInfo}
          setCurrentCvInfo={setCurrentCvInfo}
          activeStatus={activeForm === 1 ? true : false}
          setActiveStatus={handleFormFocus}
        />
        <ExperienceForm
          experiencesList={experiencesList}
          addExperience={addExperience}
          deleteExperience={deleteExperience}
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
            {educationsList.map((edu, idx) => (
              <EducationListItem
                key={`${edu.institution}+${idx}`}
                institution={edu.institution}
                startYear={edu.startYear}
                endYear={edu.endYear}
                program={edu.program}
                grade={edu.grade}
                description={edu.description}
              />
            ))}
            { currentCvInfo.educationInfo.isActive && <EducationListItem
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
          { experiencesList.map((exp, idx) => (
              <ExperienceListItem
                key={`${exp.institution}+${idx}`}
                companyName={exp.companyName}
                role={exp.role}
                startYear={exp.startYear}
                endYear={exp.endYear}
                description={exp.description}
              />
            )) }
            { currentCvInfo.experienceInfo.isActive &&  
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
