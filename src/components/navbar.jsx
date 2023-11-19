import React, { useState } from "react";
import { FaEnvelope, FaHamburger } from "react-icons/fa";

const Navbar = ({ links }) => {
  // State to manage the active link
  const [activeLink, setActiveLink] = useState("Home");

  // Function to set the active link
  const handleSetActiveLink = (link) => {
    console.log(activeLink, link);
    setActiveLink(link);
  };

  return (
    <>
      {/* First Navbar */}
      <nav className="navbar pt-2">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="/images/logo 1.png"
              alt="Logo"
              className="d-inline-block align-top"
            />
          </a>
          <div className="align-items-center d-md-flex d-none">
            <div className="me-5">
              <img src="/images/phone2.png" alt="" width={18} />
              <span className="ms-3">0203 519 4420</span>
            </div>
            <div className="me-5">
              <FaEnvelope className="text1" />
              <span className="ms-3">info@solarinnovatio.com</span>
            </div>
            <a href="#contact" className="btn text-white btn-sm bg-8 ">
              Contact Us
            </a>
          </div>
          <button
            className="navbar-toggler d-md-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="bg-7">
              <FaHamburger className="text1" />
            </span>
          </button>
        </div>
      </nav>
      <div className="divider"></div>
      {/* Second Navbar */}
      <nav className="navbar pb-2 d-md-flex d-none">
        <div className="container">
          <div className="navbar-nav d-flex justify-content-between w-100 flex-row">
            {links.map((link, index) => (
              <a
                key={index}
                className={` text4 nav-link ${
                  activeLink === link.title ? "active" : ""
                }`}
                href={link.url}
                onClick={() => handleSetActiveLink(link.title)}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <div className="collapse navbarToggleExternalContent py-2">
        <div className="container text-center">
          {links.map((link, index) => (
            <a
              key={index}
              className={`text4 nav-link ${
                activeLink === link.title ? "active" : ""
              }`}
              href={link.url}
              onClick={() => handleSetActiveLink(link.title)}
            >
              {link.title}
            </a>
          ))}
          <div className="mt-3">
            <span className="ms-3">0203 519 4420</span>
          </div>
          <div className="mt-3">
            <span className="ms-3">info@solarinnovatio.com</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
