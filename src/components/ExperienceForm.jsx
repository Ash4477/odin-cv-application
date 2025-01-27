import FormBox from "./FormBox";

const ExperienceForm = ({ addExperience, currentCvInfo, setCurrentCvInfo, activeStatus, setActiveStatus }) => {
    const formId = 2;

    const { companyName, role, startYear, endYear, description } = currentCvInfo.experienceInfo;

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
    };

    return(
        <FormBox
            formTitle="Exprience Details"
            activeStatus={activeStatus}
            setActiveStatus={setActiveStatus}
            activeFormId={formId}
        >
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
                    <input id="startdate" type="date" value={startYear} onChange={handleStartYearChange} required/>
                </div>
                
                <div className="input-box">
                    <label htmlFor="enddate">End Date (ignore if still working here)</label>
                    <input id="enddate" type="date" value={endYear} onChange={handleEndYearChange}/>
                </div>
                
                <div className="input-box">
                    <label>Responsibilities</label>
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

export default ExperienceForm;