import React from "react";
import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import "./../style/contact.css";
export default function Contact() {
  return (
    <>
      <article className="contact active">
        <header>
          <h2 className="h2 article-title">Localisation </h2>
        </header>

        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.712710239557!2d-3.9576731267962417!3d5.307446678969219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ec2dc7baad53%3A0x45bba9aea88b79f!2sHopital%20Du%20Quartier%20Divo!5e0!3m2!1sfr!2snl!4v1697244725991!5m2!1sfr!2snl"
              width="400"
              height="300"
              loading="lazy"></iframe>
          </figure>
        </section>
        <section className="contact-form">
          <h3 className="h3 form-title">Laissez Moi un message!</h3>
          <form action="#" className="form" data-form>
            <div className="input-wrapper">
              <input
                type="text"
                name="fullname"
                className="form-input"
                placeholder="Nom & Prenom"
                required
                data-form-input
              />

              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Addresse Email"
                required
                data-form-input
              />
            </div>

            <textarea
              name="message"
              className="form-input"
              placeholder="Message ...................................."
              required
              data-form-input></textarea>

            <button className="form-btn" type="submit" disabled data-form-btn>
              <ion-icon name="paper-plane"></ion-icon>
              <span>Envoyer</span>
            </button>
          </form>
        </section>
      </article>
    </>
  );
}
