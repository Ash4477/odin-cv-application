import FormBox from "./FormBox";

const PersonalDetailForm = ({ name, number, email, bio, activeStatus, setActiveStatus }) => {
    const formId = 0;
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
                    <input id="fullname-input" type="text" required />
                </div>
                
                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" required/>
                </div>
                
                <div className="input-box">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" type="number"/>
                </div>
                
                <div className="input-box">
                    <label>Summary</label>
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

export default PersonalDetailForm;