import FormBox from "./FormBox";

const ExperienceForm = ({ companyName, role, startYear, endYear, description, activeStatus, setActiveStatus }) => {
    const formId = 2;

    return(
        <FormBox
            formTitle="Exprience Details"
            activeStatus={activeStatus}
            setActiveStatus={setActiveStatus}
            activeFormId={formId}
        >
            <form>
                <div className="input-box">
                    <label htmlFor="institute-input">Institute Name</label>
                    <input id="institute-input" type="text" required />
                </div>
                
                <div className="input-box">
                    <label htmlFor="startdate">Start Date</label>
                    <input id="startdate" type="date" required/>
                </div>
                
                <div className="input-box">
                    <label htmlFor="enddate">End Date (ignore if still working here)</label>
                    <input id="enddate" type="date"/>
                </div>
                
                <div className="input-box">
                    <label>Responsibilities</label>
                    <textarea/>
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