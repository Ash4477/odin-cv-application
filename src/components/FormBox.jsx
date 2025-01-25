import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const FormBox = ({ children, formTitle }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const handleCollapseBox = () => {
        setIsCollapsed(!isCollapsed);
    };

  return (
    
    <section className="form-box">
        <div>
            <h2>{formTitle}</h2> 
            <button onClick={handleCollapseBox}>{isCollapsed ? <FaAngleUp size={20}/> : <FaAngleDown size={20}/>}</button>
        </div>
        { isCollapsed && children}
    </section>
  )
}

export default FormBox