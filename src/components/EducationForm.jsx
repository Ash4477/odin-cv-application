import FormBox from "./FormBox";

const EducationForm = ({ addEducation, currentCvInfo, setCurrentCvInfo, activeStatus, setActiveStatus }) => {
    const formId = 1;

    const {  institution, startYear, endYear, program, grade, description } = currentCvInfo.educationInfo;

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
        addEducation(institution, startYear, endYear, description);
    };
    
    return(
        <FormBox 
            formTitle="Education Details"
            activeStatus={activeStatus}
            setActiveStatus={setActiveStatus} 
            activeFormId={formId}
        >
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
                    <input id="startdate" type="date" value={startYear} onChange={handleStartYearChange} required/>
                </div>
                
                <div className="input-box">
                    <label htmlFor="enddate">End Date (ignore if still working here)</label>
                    <input id="enddate" type="date" value={endYear} onChange={handleEndYearChange}/>
                </div>
                
                <div className="input-box">
                    <label>Description</label>
                    <textarea value={description} onChange={handleDescriptionChange}/>
                </div>
                
                <div className="btn-box">
                    <input type="submit" value="Save"/>
                    <input type="reset" value="Clear"/>
                </div>
            </form>
        </FormBox>
    );
};

export default EducationForm;