const TeamMember = ({ name, title, imageSrc, bio, linkedinUrl }) => (
  <div className="team-member">
    <img src={imageSrc} alt={name} className="team-image" />
    <h3>{name}</h3>
    <p className="team-title">{title}</p>
    <p className="team-bio">{bio}</p>
    <ul className="ceo-social">
      <li>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
      {/* Add other social media links as needed */}
    </ul>
  </div>
);

export default TeamMember;