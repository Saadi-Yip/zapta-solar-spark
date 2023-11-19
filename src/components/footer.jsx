import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
const Footer = ({ links }) => {
  return (
    <>
      <div className="subscribe py-4">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 d-flex  align-items-center text-white">
            <div className="content d-flex flex-column">
              <h4 className="fw-bold">Subscribe for Newsletter</h4>
              <p>
                Leo dui fermentum tristique urna tellus eget amet aliquam. Id
                vitae orci maecenas tortor odio
              </p>
            </div>
            <div className="d-flex justify-content-center rounded-3">
              <div className="input-group w-75  position-relative p-1">
                <input
                  type="email"
                  placeholder="Inserisci la tua email"
                  className="form-control border-0 px-3 py-2 fs-6 rounded-5"
                />
                <button
                  className="btn rounded-5 plane bg-8   text-white border-0  position-absolute end-0"
                  type="button"
                >
                  <FaTelegramPlane className="me-0" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer bg-footer pt-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 text-white mb-4 gap-4 gap-sm-0  ">
            {/* Logo */}
            <div className="d-flex flex-column ">
              <span className="mb-2">
                <img src="/images/logo.png" alt="" />
              </span>

              <p className="text-white">
                Leo dui fermentum tristique urna tellus eget amet aliquam. Id
                vitae orci maecenas tortor odio Leo dui fermentum tristique urna
                tellus eget amet aliquam.
              </p>
              <span>
                {Array.from({ length: 6 }, (_, index) => {
                  return <img src="/images/frey.png" alt="frey" />;
                })}
              </span>
            </div>

            {/* Quick Links */}
            <div className="d-flex flex-column ">
              <h5 className="fw-bold mb-4">Quick Links</h5>
              <div className="d-flex flex-column gap-2 ">
                {links.map((link, i) => {
                  return <div>{link.title}</div>;
                })}
              </div>
            </div>

            {/* Important Links */}
            <div className="d-flex flex-column mt-sm-4 mt-lg-0">
              <h5 className="fw-bold mb-4">Useful Links</h5>
              <div className="d-flex flex-column gap-1 mb-2">
                <span>Help Center</span>
                <span>Privacy Policy</span>
                <span>Terms & Condition</span>
                <span>FAQ</span>
              </div>
              <span className="fw-bold mt-lg-2 mb-lg-3">Documents</span>
              <span>Lindked here</span>
            </div>

            {/* About Us Information */}
            <div className="d-flex flex-column mt-sm-4 mt-lg-0">
              <h5 className="fw-bold mb-4">Contact Us</h5>
              <div className="d-flex flex-column gap-3">
                <span className="d-flex gap-md-3 flex-column flex-md-row">
                  <span>
                    <img src="/images/location.png" alt="" />
                  </span>
                  <p>
                    Leo dui fermentum tristique urna tellus eget amet aliquam.
                    Id vitae orci
                  </p>
                </span>

                <span className="d-flex gap-md-3 flex-column flex-md-row flex-column flex-md-row">
                  <span>
                    <img src="/images/email.png" alt="" />
                  </span>
                  <span className="d-flex flex-column ">
                    <span>email@email.com</span>
                    <span>support@email.com</span>
                  </span>
                </span>
                <span className="d-flex gap-md-3 ">
                  <span>
                    <img src="/images/phone.png" alt="" />
                  </span>
                  <span className="d-flex flex-column">
                    <span>+29 98595 8998</span>
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="divider"></div>
          <div className="d-flex justify-content-between text-white mt-2 align-items-center  py-3">
            <span>All Rights Reserved</span>
            <span className="d-flex social-links d-flex gap-3">
              <FaFacebook className="fs-4" />
              <FaLinkedin className="fs-4" />
              <FaTwitter className="fs-4" />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
