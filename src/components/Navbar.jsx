import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./../style/navbar.css";
export default function Navbar() {
  const [active, setActive] = useState("about");
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActive("");
    if (path === "/resume") setActive("resume");
    if (path === "/blog") setActive("blog");
    if (path === "/contact") setActive("contact");
    if (path === "/portfolio") setActive("portfolio");
  }, [location.pathname]);

  return (
    <>
      {/* <!--
  - #NAVBAR
--> */}
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to={"/"}>
              <button
                className={
                  active === "" ? "navbar-link active" : "navbar-link"
                }
                data-nav-link>
                Apropos
              </button>
            </Link>
          </li>

          <li className="navbar-item">
            <Link to={"/resume"}>
              <button
                className={
                  active === "resume" ? "navbar-link active" : "navbar-link"
                }
                data-nav-link>
                Resume
              </button>
            </Link>
          </li>

          <li className="navbar-item">
            <Link to={"/portfolio"}>
              <button
                className={
                  active === "portfolio" ? "navbar-link active" : "navbar-link"
                }
                data-nav-link>
                Projets
              </button>
            </Link>
          </li>

          {/* <li className="navbar-item">
            <Link to={"/blog"}>
              <button
                className={
                  active === "blog" ? "navbar-link active" : "navbar-link"
                }
                data-nav-link>
                Blog
              </button>
            </Link>
          </li> */}

          <li className="navbar-item">
            <Link to={"/contact"}>
              <button
                className={
                  active === "contact" ? "navbar-link active" : "navbar-link"
                }
                data-nav-link>
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
