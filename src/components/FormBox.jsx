import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const FormBox = ({ children, formTitle, activeStatus, setActiveStatus, activeFormId }) => {

  const handleIsCollapsed = () => {
    if (activeStatus === true) {
      setActiveStatus(-1);
    } else {
      setActiveStatus(activeFormId);
    }
  };

  return (
    <section className="form-box">
        <div>
            <h2>{formTitle}</h2> 
            <button onClick={handleIsCollapsed}>
              {activeStatus ? <FaAngleUp size={20}/> : <FaAngleDown size={20}/>}
            </button>
        </div>
        { activeStatus && children}
    </section>
  )
}

export default FormBox