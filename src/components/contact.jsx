import React from "react";
import Heading from "./global/heading";

const ContactUs = () => {
  return (
    <section className="mb-5">
      <div className="container">
        <img
          src="/images/texture.png"
          alt="texture"
          className="position-absolute mx-5"
          height={70}
        />
        <div className="text-center mb-5">
          <button className="btn btn-sm bg-8 px-3 py-2 text-white">
            Collegati al sole
          </button>
        </div>
        <Heading heading="CONTATTACI" />
        <div className="row mt-4 gap-3">
          <div className="col-md-4 col-10 m-auto p-3  border rounded-3">
            <div className="d-flex flex-column mt-lg-0">
              <div className="d-flex flex-column text-secondary gap-lg-4 gap-sm-3 gap-3 mb-3">
                <span className="d-flex gap-md-3 flex-column flex-md-row">
                  <span>
                    <img src="/images/location2.png" alt="" width={30} />
                  </span>
                  <span>
                    Leo dui fermentum tristique urna tellus eget amet aliquam.
                    Id vitae orci
                  </span>
                </span>

                <span className="d-flex gap-md-3 flex-column flex-md-row flex-column flex-md-row">
                  <span>
                    <img src="/images/email2.png" alt="" width={24} />
                  </span>
                  <span className="d-flex flex-column ">
                    <span>email@email.com</span>
                    <span>support@email.com</span>
                  </span>
                </span>
                <span className="d-flex gap-md-3 ">
                  <span>
                    <img src="/images/phone2.png" alt="" width={20} />
                  </span>
                  <span className="d-flex flex-column">
                    <span>+29 98595 8998</span>
                  </span>
                </span>
              </div>
              <div className="divider"></div>
              <span className="fs-6 mt-2">
                We Will get back to you within 24 hours. Or Call us Now
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="col-10 col-md-7 border rounded-3 m-auto">
            <div className="p-4 d-flex flex-column gap-3">
              <div className="d-flex flex-row gap-3  align-items-center">
                <span className="w-50">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-border w-100 px-3"
                  />
                </span>
                <span className="w-50">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-border w-100 px-3"
                  />
                </span>
              </div>
              <span className="w-100">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-border w-100 px-3"
                />
              </span>
              <span className="w-100">
                <textarea
                  rows="3"
                  placeholder="Message"
                  className="w-100 form-border p-2"
                ></textarea>
              </span>
              <span className="d-flex justify-content-end">
                <button className="btn btn-sm bg-8 text-white px-4">
                  SEND
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
