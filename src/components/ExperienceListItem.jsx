function ExperienceListItem({  companyName, role, startYear, endYear, description }) {
    return (
      <li>
        <div>
          <p>{role} at {companyName}</p>
          <p>{startYear}-{endYear}</p>
        </div>
        <i>Responsiblities: </i>
        <p>{description}</p>
      </li>
    );
}

export default ExperienceListItem;