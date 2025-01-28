import { FaTrash, FaEdit, FaPlus } from "react-icons/fa"
import FormBox from "./FormBox";

const EducationForm = ({ educationsList, addEducation, deleteEducation, currentCvInfo, setCurrentCvInfo, activeStatus, setActiveStatus }) => {    
    const formId = 1;
    const {  isActive, institution, startYear, endYear, program, grade, description } = currentCvInfo.educationInfo;

    const handleNameChange = (e) => {
        setCurrentCvInfo({
            ...currentCvInfo,
            educationInfo: {
                ...currentCvInfo.educationInfo,
                institution: e.target.value,
            },
        });
    };
    const handleStartYearChange = (e) => {
        setCurrentCvInfo({
            ...currentCvInfo,
            educationInfo: {
                ...currentCvInfo.educationInfo,
                startYear: e.target.value,
            },
        });
    };
    const handleProgramChange = (e) => {
        setCurrentCvInfo({
            ...currentCvInfo,
            educationInfo: {
                ...currentCvInfo.educationInfo,
                program: e.target.value,
            },
        });
    };
    const handleGradeChange = (e) => {
        setCurrentCvInfo({
            ...currentCvInfo,
            educationInfo: {
                ...currentCvInfo.educationInfo,
                grade: e.target.value,
            },
        });
    };
    const handleEndYearChange = (e) => {
        setCurrentCvInfo({
            ...currentCvInfo,
            educationInfo: {
                ...currentCvInfo.educationInfo,
                endYear: e.target.value,
            },
        });
    };
    const handleDescriptionChange = (e) => {
        setCurrentCvInfo({
            ...currentCvInfo,
            educationInfo: {
                ...currentCvInfo.educationInfo,
                description: e.target.value,
            },
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        deactivateForm();
        addEducation(institution, startYear, endYear, program, grade, description);
        setCurrentCvInfo({
            ...currentCvInfo,
            educationInfo: {
                isActive: false,
                institution: '',
                program: '',
                grade: '',
                startYear: '',
                endYear: '',
                description: ''
              },
        });
    };

    const activateForm = () => {
        setCurrentCvInfo({
            ...currentCvInfo,
            educationInfo: {
                ...currentCvInfo.educationInfo,
                isActive: true,
            },
        });
    };

    const deactivateForm = () => {
        setCurrentCvInfo({
            ...currentCvInfo,
            educationInfo: {
                ...currentCvInfo.educationInfo,
                isActive: false,
            },
        });
    };

    const editEducation = (itemIndex) => {
        const editItem = educationsList[itemIndex];
        deleteEducation(itemIndex);
        setCurrentCvInfo({
            ...currentCvInfo,
            educationInfo: {
                isActive: true,
                institution: editItem.institution, 
                startYear: editItem.startYear,
                endYear: editItem.endYear,
                program: editItem.program,
                grade: editItem.grade,
                description: editItem.description,
            }
        });
    };

     const resetForm = () => {
        setCurrentCvInfo({
            ...currentCvInfo,
            educationInfo: {
                isActive: true,
                institution: '',
                program: '',
                grade: '',
                startYear: '',
                endYear: '',
                description: ''
              },
        });
    };

    return(
        <FormBox 
            formTitle="Education Details"
            activeStatus={activeStatus}
            setActiveStatus={setActiveStatus} 
            activeFormId={formId}
        >
            { isActive ? (
                <form onSubmit={submitForm}>
                <div className="input-box">
                    <label htmlFor="institute-input">Institute Name</label>
                    <input id="institute-input" type="text" value={institution} onChange={handleNameChange} required />
                </div>
                
                <div className="input-box">
                    <label htmlFor="prog-input">Program/Degree</label>
                    <input id="prog-input" type="text" value={program} onChange={handleProgramChange} required />
                </div>
                
                <div className="input-box">
                    <label htmlFor="grade-input">Grade</label>
                    <input id="grade-input" type="text" value={grade} onChange={handleGradeChange} required />
                </div>
                
                <div className="input-box">
                    <label htmlFor="startdate">Start Date</label>
                    <input id="startdate" type="number" value={startYear} onChange={handleStartYearChange} required/>
                </div>
                
                <div className="input-box">
                    <label htmlFor="enddate">End Date (ignore if still working here)</label>
                    <input id="enddate" type="number" value={endYear} onChange={handleEndYearChange}/>
                </div>
                
                <div className="input-box">
                    <label>Description</label>
                    <textarea value={description} onChange={handleDescriptionChange}/>
                </div>
                
                <div className="btn-box">
                    <input type="submit" value="Save"/>
                    <input type="reset" value="Clear" onClick={resetForm}/>
                </div>
            </form>
            ) : (
                <>
                   <ul>
                    {educationsList.map((edu,idx) => (
                        <li className="edit-button-box" style={{ listStyle: "none" }} key={`${edu.institution}+${idx}`}>
                            <h4>{edu.institution}</h4>
                            <span>
                                <button onClick={() => deleteEducation(idx)}><FaTrash size={18}/></button>
                                <button onClick={() => editEducation(idx)}><FaEdit size={18}/></button>
                            </span>
                        </li>
                    ))}
                   </ul>
                    <button
                        className="add-button"
                        onClick={activateForm}
                    >
                        <FaPlus/> <p>Add Education</p>
                    </button>
                </>
            ) }
        </FormBox>
    );
};

export default EducationForm;