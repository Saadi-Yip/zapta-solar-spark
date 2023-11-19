import React, { useState } from "react";
import Heading from "./global/heading";

const Faq = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="my-5">
      <div className="container">
        <img
          src="/images/texture.png"
          alt="Texture"
          className="texture-image2"
        />
        <Heading heading="Frequently Asked Questions" />
        <div id="accordion">
          {faqData?.map((item, index) => (
            <div
              className={`card faq_card border-0 bg-white m-3 shadow-color ${
                activeIndex === index ? "faq-active" : ""
              }`}
              key={index}
            >
              <div
                className={`card-header border-0 bg-white ${
                  activeIndex === index ? "faq-active" : ""
                }`}
                id={`heading${index}`}
              >
                <h5 className="mb-0">
                  <button
                    className="btn"
                    data-toggle="collapse"
                    data-target={`#collapse${index}`}
                    aria-expanded={activeIndex === index}
                    aria-controls={`collapse${index}`}
                    onClick={() => handleToggle(index)}
                  >
                    {activeIndex === index ? "-" : "+"}
                  </button>
                  <span className="ml-2">{item.question}</span>
                </h5>
              </div>

              <div
                id={`collapse${index}`}
                className={`collapse ${
                  activeIndex === index ? "show" : ""
                } px-3 `}
                aria-labelledby={`heading${index}`}
                data-parent="#accordion"
              >
                <p className="card-body fs-6">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
