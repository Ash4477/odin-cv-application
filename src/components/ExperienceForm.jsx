import { FaTrash, FaEdit, FaPlus } from "react-icons/fa"
import FormBox from "./FormBox";

const ExperienceForm = ({ experiencesList, addExperience, deleteExperience, currentCvInfo, setCurrentCvInfo, activeStatus, setActiveStatus }) => {
    const formId = 2;

    const { isActive, companyName, role, startYear, endYear, description } = currentCvInfo.experienceInfo;

    const handleNameChange = (e) => {
        setCurrentCvInfo({
            ...currentCvInfo,
            experienceInfo: {
                ...currentCvInfo.experienceInfo,
                companyName: e.target.value,
            },
        });
    };

    const handleRoleChange = (e) => {
        setCurrentCvInfo({
            ...currentCvInfo,
            experienceInfo: {
                ...currentCvInfo.experienceInfo,
                role: e.target.value,
            },
        });
    };

    const handleStartYearChange = (e) => {
        setCurrentCvInfo({
            ...currentCvInfo,
            experienceInfo: {
                ...currentCvInfo.experienceInfo,
                startYear: e.target.value,
            },
        });
    };

    const handleEndYearChange = (e) => {
        setCurrentCvInfo({
            ...currentCvInfo,
            experienceInfo: {
                ...currentCvInfo.experienceInfo,
                endYear: e.target.value,
            },
        });
    };

    const handleDescriptionChange = (e) => {
        setCurrentCvInfo({
            ...currentCvInfo,
            experienceInfo: {
                ...currentCvInfo.experienceInfo,
                description: e.target.value,
            },
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        addExperience(companyName,role, startYear, endYear, description);
        deactivateForm();
        setCurrentCvInfo({
            ...currentCvInfo,
              experienceInfo: {
                isActive: false,
                companyName: '',
                role: '',
                startYear: '',
                endYear: '',
                description: '',
              },
        });
    };

    const activateForm = () => {
        setCurrentCvInfo({
            ...currentCvInfo,
            experienceInfo: {
                ...currentCvInfo.experienceInfo,
                isActive: true,
            },
        });
    };

    const deactivateForm = () => {
        setCurrentCvInfo({
            ...currentCvInfo,
            experienceInfo: {
                ...currentCvInfo.experienceInfo,
                isActive: false,
            },
        });
    };

    const editExperience = (itemIndex) => {
        const editItem = experiencesList[itemIndex];
        deleteExperience(itemIndex);
        setCurrentCvInfo({
            ...currentCvInfo,
            experienceInfo: {
                isActive: true,
                companyName: editItem.companyName, 
                startYear: editItem.startYear,
                endYear: editItem.endYear,
                role: editItem.role,
                description: editItem.description,
            }
        });
    };

    const resetForm = () => {
        setCurrentCvInfo({
            ...currentCvInfo,
              experienceInfo: {
                isActive: true,
                companyName: '',
                role: '',
                startYear: '',
                endYear: '',
                description: '',
              },
        });
    };

    return(
        <FormBox
            formTitle="Exprience Details"
            activeStatus={activeStatus}
            setActiveStatus={setActiveStatus}
            activeFormId={formId}
        >
            { isActive ? (
                <form onSubmit={submitForm}>
                <div className="input-box">
                    <label htmlFor="institute-input">Job Title</label>
                    <input id="institute-input" type="text" value={role} onChange={handleRoleChange} required />
                </div>

                <div className="input-box">
                    <label htmlFor="institute-input">Company Name</label>
                    <input id="institute-input" type="text" value={companyName} onChange={handleNameChange} required />
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
                    <label>Responsibilities</label>
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
                    {experiencesList.map((exp,idx) => (
                        <li className="edit-button-box" style={{ listStyle: "none" }} key={`${exp.role}+${idx}`}>
                            <h4>{exp.role}</h4>
                            <span>
                                <button onClick={() => deleteExperience(idx)}><FaTrash size={18}/></button>
                                <button onClick={() => editExperience(idx)}><FaEdit size={18}/></button>
                            </span>
                        </li>
                    ))}
                    </ul>
                    <button
                        className="add-button"
                        onClick={activateForm}
                    >
                        <FaPlus/> <p>Add Experience</p>
                    </button>
                </>
            ) }

        </FormBox>
    );
};

export default ExperienceForm;