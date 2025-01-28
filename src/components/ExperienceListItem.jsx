function ExperienceListItem({  companyName, role, startYear, endYear, description }) {
    return (
      <li>
        <div>
          <p>{role}</p>
          <p>{companyName}</p>
          <p>{startYear}-{endYear}</p>
        </div>
        <i>Description: </i>
        <p>{description}</p>
      </li>
    );
}

export default ExperienceListItem;