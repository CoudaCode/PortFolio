import "./../style/about.css";
import TestimonialItem from "../components/TestimonialItem";
import Service from "../components/Service";
export default function About() {
  const spokenLanguages = [
    { language: "French", level: "Fluent" },
    { language: "English", level: "Advanced" },
    { language: "Spanish", level: "Intermediate" },
    { language: "German", level: "Beginner" },
  ];
  const interests = ["Musique", "Basketball", "Mangas", "Jeux vidéos"];
  const advantages = ["Disponible", "Assidu", "Autodidacte", "Attentif"];
  const service = [
    {
      title: "Web Design",
      content:
        " Conception d'interfaces utilisateur esthétiques et fonctionnelles.",
      imgService: "./../images/icon-design.svg",
    },
    {
      title: "Web Development",
      content:
        " Création de sites web professionnels, du front-end au back-end.",
      imgService: "./../images/icon-dev.svg",
    },
  ];
  return (
    <>
      <article className="about active">
        <header>
          <h2 className="h2 article-title">A propos de Moi</h2>
        </header>
        <section className="about-text">
          <p>
            Je suis un développeur web passionné à la recherche de nouvelles
            opportunités pour travailler sur des projets passionnants et
            innovants. Je me spécialise dans le développement web full stack et
            la création d'expériences utilisateur exceptionnelles.
          </p>
        </section>
        {/* <!--
    - service
  --> */}
        <section className="service">
          <h3 className="h3 service-title">Mes services</h3>

          <ul className="service-list">
            {service.map((elem, index) => (
              <Service
                key={index}
                content={elem.content}
                title={elem.title}
                imgService={elem.imgService}
              />
            ))}
          </ul>
        </section>
        <section className="interests-section">
          <div className="interests-box">
            <h3>Intérêts</h3>
            <ul>
              {interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
          <div className="advantages-box">
            <h3>Atouts</h3>
            <ul>
              {advantages.map((advantage, index) => (
                <li key={index}>{advantage}</li>
              ))}
            </ul>
          </div>
          <div className="languages-box">
            <h3>Langues parlées</h3>
            <ul>
              {spokenLanguages.map((language, index) => (
                <li key={index}>
                  {language.language} - Niveau : {language.level}
                </li>
              ))}
            </ul>
          </div>
        </section>  
      </article>
    </>
  );
}
