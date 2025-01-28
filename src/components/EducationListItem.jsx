function EducationListItem({  institution, startYear, endYear, program, grade, description }) {
    return (
      <li>
        <div>
          <p>{institution}</p>
          <p>{startYear}-{endYear}</p>
        </div>
        <p><i>Program: </i>{program}, Grade: {grade}</p>
        <i>Description: </i>
        <p>{description}</p>
      </li>
    );
}

export default EducationListItem;