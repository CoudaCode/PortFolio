import React, { useEffect, useState } from "react";
import "./../style/portfolio.css";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const handleSelectClick = () => {
    setIsSelectOpen(!isSelectOpen);
  };
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <article className="portfolio active">
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">
          <ul className="filter-list">
            <li className="filter-item">
              <button
                className={`filter-btn ${
                  activeCategory === "all" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("all")}>
                All
              </button>
            </li>

            <li className="filter-item">
              <button
                className={`filter-btn ${
                  activeCategory === "web-design" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("web-design")}>
                Web design
              </button>
            </li>

            <li className="filter-item">
              <button
                className={`filter-btn ${
                  activeCategory === "applications" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("applications")}>
                Applications
              </button>
            </li>

            <li className="filter-item">
              <button
                className={`filter-btn ${
                  activeCategory === "web-development" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("web-development")}>
                Web development
              </button>
            </li>
          </ul>

          <div className="filter-select-box">
            <button
              className="filter-select"
              onClick={handleSelectClick}
              data-select>
              <div className="select-value" data-select-value>
                Select category
              </div>

              <div className="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>
            </button>

            <ul className="select-list">
              <li className="select-item">
                {/* <button data-select-item>All</button> */}
              </li>
              <li className="select-item">
                <button data-select-item>Web design</button>
              </li>

              <li className="select-item">
                <button data-select-item>Applications</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web development</button>
              </li>
            </ul>
          </div>

          <ul className="project-list">
            {/* Remarquez la modification de la classe du project-item ici pour afficher ou masquer en fonction de la catégorie active */}
            <li
              className={`project-item ${
                activeCategory === "web-development" || activeCategory === "all"
                  ? "active"
                  : ""
              }`}
              data-filter-item
              data-category="web development">
              <a href="https://iacc-gestion.vercel.app" target="_blanc">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img
                    src="./../images/project-1.jpg"
                    alt="finance"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Finance</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>

            {/* Vous pouvez répéter le modèle pour d'autres projets */}
          </ul>
        </section>
      </article>
    </>
  );
}
