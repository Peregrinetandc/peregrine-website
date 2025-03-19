const ValueItem = ({ icon, title, description }) => (
  <li>
    <span className="list-icon">
      <i className={icon}></i>
    </span>
    <strong>{title}:</strong> {description}
  </li>
);

export default ValueItem;