import FormBox from "./FormBox";

const PersonalDetailForm = ({ currentCvInfo, activeStatus, setActiveStatus, setCurrentCvInfo }) => {
    const formId = 0;
    const { name, number, email, summary } = currentCvInfo.personalInfo;

    const handleNameChange = (e) => {
        setCurrentCvInfo({
            ...currentCvInfo,
            personalInfo: {
                ...currentCvInfo.personalInfo,
                name: e.target.value,
            },
        });
    };

    const handleEmailChange = (e) => {
        setCurrentCvInfo({
            ...currentCvInfo,
            personalInfo: {
                ...currentCvInfo.personalInfo,
                email: e.target.value,
            },
        });
    };

    const handleNumberChange = (e) => {
        setCurrentCvInfo({
            ...currentCvInfo,
            personalInfo: {
                ...currentCvInfo.personalInfo,
                number: e.target.value,
            },
        });
    };

    const handleSummaryChange = (e) => {
        setCurrentCvInfo({
            ...currentCvInfo,
            personalInfo: {
                ...currentCvInfo.personalInfo,
                summary: e.target.value,
            },
        });
    };

    const resetForm = () => {
        setCurrentCvInfo({
            ...currentCvInfo,
            personalInfo: {
                name: '',
                number: '',
                email: '',
                summary: '',
            }
        });
    };

    return(
        <FormBox 
            formTitle="Personal Details"  
            activeStatus={activeStatus} 
            setActiveStatus={setActiveStatus} 
            activeFormId={formId}
        >
            <form>
                <div className="input-box">
                    <label htmlFor="fullname-input">Full Name</label>
                    <input id="fullname-input" type="text" value={name} onChange={handleNameChange} required/>
                </div>
                
                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={email} onChange={handleEmailChange} required/>
                </div>
                
                <div className="input-box">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" type="number" value={number} onChange={handleNumberChange}/>
                </div>
                
                <div className="input-box">
                    <label>Summary</label>
                    <textarea value={summary} onChange={handleSummaryChange}/>
                </div>
                
                <div className="btn-box">
                    <input type="reset" value="Clear" onClick={resetForm}/>
                </div>
            </form>
        </FormBox>
    );
};

export default PersonalDetailForm;