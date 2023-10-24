import React from "react";
import "./../style/profile.css";
import CV from "./../doc/CV.pdf";
export default function Profile() {
  const activeLink = () => {
    const showActive = document.querySelector("[data-sidebar]");
    showActive.classList.toggle("active");
  };
  return (
    <>
      <aside className="sidebar" data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src="./../images/diara.jpeg"
              alt="Diarassouba Mamadou"
              width="80"
            />
          </figure>
          <div className="info-content text-center">
            <h1 className="name" title="Diarassouba Mamadou">
              Diarassouba Mamadou
            </h1>
            <p className="title">Developpeur Web FullStack</p>
            <p className="title download">
              <a
                href={CV}
                target="_blank"
                style={{
                  backgroundColor: "#a9cc8d", // Couleur de fond du bouton
                  color: "#FFF", // Couleur du texte du bouton
                  padding: "8px 16px", // Espacement intérieur du bouton
                  borderRadius: "4px", // Coins arrondis du bouton
                  textDecoration: "none",
                }}>
                Télécharger CV
              </a>
            </p>
          </div>

          <button
            className="info_more-btn"
            onClick={() => activeLink()}
            data-sidebar-btn>
            <span>Mes Contatcts</span>
            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:couda.dm@gmail.com" className="contact-link">
                  couda.dm@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+2250747185291" className="contact-link">
                  +225 07 4718-5291
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime="1982-06-23">December 30, 2023</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Localisation</p>

                <address>Koumassi, Abidjan, Côte d'Ivoire</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon
                  className="socials-icons"
                  name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon
                  className="socials-icons"
                  name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon
                  className="socials-icons"
                  name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
