import ExperItem from "../components/ExpeItem";
import EducItem from "../components/EducItem";
import SkilsItem from "../components/SkilsItem"; // Importez le composant SkilsItem
import "./../style/resume.css";

export default function Resume() {
  const Education = [
    {
      title: "NaN Digital Academy (Not A Number)",
      timeBegin: "janvier 2023",
      timeEnd: "present",
      description: "formation en Developpement Web Javascript",
    },
    {
      title: "Universite Virtuelle De Côte D'Ivoire - UVCI",
      timeBegin: "janvier 2022",
      timeEnd: "present",
      description:
        "Etudiant en Developpement d'Applications et e-Service (DAS)",
    },
    {
      title: "Lycée Moderne De Guiglo - LMG",
      timeBegin: "2018",
      timeEnd: "2021",
      description: "Obtention du baccalauréat Serie C",
    },
  ];

  const Experience = [
    {
      title: "Developper FullStack",
      timeBegin: "janvier 2023",
      timeEnd: "present",
      description: "Réalisation d'une plateforme de gestion de personnel",
    },
  ];

  const frontendSkills = [
    {
      language: "HTML",
      shieldImg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      language: "CSS",
      shieldImg:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      language: "Bootstrap",
      shieldImg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      language: "Tailwind CSS",
      shieldImg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      language: "Javascript",
      shieldImg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      language: "ReactJs",
      shieldImg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      language: "Vue Js",
      shieldImg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
  ];

  const backendSkills = [
    {
      language: "NodeJs",
      shieldImg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      language: "MONGODB",
      shieldImg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      language: "Java",
      shieldImg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      language: "MySQL",
      shieldImg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ];
  const versionningSkills = [
    {
      language: "Git",
      shieldImg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      language: "GitHub",
      shieldImg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      language: "GitLab",
      shieldImg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    },
  ];
  const desingSkills = [
    {
      language: "Canva",
      shieldImg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    },
    {
      language: "Figma",
      shieldImg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ];
  const adminSkills = [
    {
      language: "Linux",
      shieldImg:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
  ];

  const bureautiqueSkills = [
    {
      language: "Microsoft Word",
      shieldImg:
        "https://img.shields.io/badge/node.js-green?style=for-the-badge&logo=node.js",
    },
    {
      language: "Microsoft Excel",
      shieldImg:
        "https://img.shields.io/badge/mongodb-green?style=for-the-badge&logo=mongodb",
    },
    {
      language: "Microsoft PowerPoint",
      shieldImg:
        "https://img.shields.io/badge/linux-orange?style=for-the-badge&logo=linux",
    },
  ];
  return (
    <>
      <article className="resume active">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 className="h3">Education</h3>
          </div>
          <ol className="timeline-list">
            {Education.map((item, index) => (
              <EducItem
                key={index}
                title={item.title}
                timeBegin={item.timeBegin}
                timeEnd={item.timeEnd}
                description={item.description}
              />
            ))}
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            {Experience.map((item, index) => (
              <ExperItem
                key={index}
                title={item.title}
                description={item.description}
                timeBegin={item.timeBegin}
                timeEnd={item.timeEnd}
              />
            ))}
          </ol>
        </section>

        <section className="skills">
          <h3 className="h3 skills-title">Mes Compétences</h3>

          <div className="skills-categories">
            <div className="skills-category">
              <h4 className="h4 category-title">Frontend</h4>
              <ul
                className="skills-list content-card"
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                {frontendSkills.map((skill, index) => (
                  // eslint-disable-next-line react/jsx-key
                  <SkilsItem
                    key={index}
                    logoImg={skill.shieldImg}
                    language={skill.language}
                  />
                ))}
              </ul>
            </div>

            <div className="skills-category">
              <h4 className="h4 category-title">Backend et Base de données</h4>
              <ul
                className="skills-list content-card"
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                {backendSkills.map((skill, index) => (
                  <SkilsItem
                    key={index}
                    logoImg={skill.shieldImg}
                    language={skill.language}
                  />
                ))}
              </ul>
            </div>
            <div className="skills-category">
              <h4 className="h4 category-title">Versionnement</h4>
              <ul
                className="skills-list content-card"
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                {versionningSkills.map((skill, index) => (
                  <SkilsItem
                    key={index}
                    logoImg={skill.shieldImg}
                    language={skill.language}
                  />
                ))}
              </ul>
            </div>
            <div className="skills-category">
              <h4 className="h4 category-title">Administration Système</h4>
              <ul
                className="skills-list content-card"
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                {adminSkills.map((skill, index) => (
                  <SkilsItem
                    key={index}
                    logoImg={skill.shieldImg}
                    language={skill.language}
                  />
                ))}
              </ul>
            </div>
            <div className="skills-category">
              <h4 className="h4 category-title">Conception graphique</h4>
              <ul
                className="skills-list content-card"
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                {desingSkills.map((skill, index) => (
                  <SkilsItem
                    key={index}
                    logoImg={skill.shieldImg}
                    language={skill.language}
                  />
                ))}
              </ul>
            </div>
            
          </div>
        </section>
      </article>
    </>
  );
}
