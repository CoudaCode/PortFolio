export default function SkilsItem({ language, logoImg }) {
  return (
    <li className="skills-item">
      <div className="title-wrapper">
        <img
          src={logoImg}
          alt={language}
          style={{ width: "50px", height: "50px" }}
        />
      </div>
    </li>
  );
}
