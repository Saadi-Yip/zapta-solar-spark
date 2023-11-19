import React from "react";

function HeroSection() {
  const sectionStyle = {
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(/images/hero.png), lightgray 50% / cover no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const headingStyle = {
    color: "white",
    fontWeight: "700",
  };

  const paragraphStyle = {
    color: "white",
    lineHeight: "1.5", // Adjust line-height to control the space between lines
    margin: "0 auto", // Center the paragraph text
    fontSize: "1.2rem",
    textAling: "center",
  };

  return (
    <section className="p-5 text-center rounded-3" style={sectionStyle}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <h1 className="mb-3" style={headingStyle}>
              Il tuo accesso al sole
            </h1>
            <h3 style={paragraphStyle}>
              Sistemi fotovoltaici intelligenti ad uso residenziale, anche in
              assenza di tetto. La tua fonte d'energia, gratuita e sostenibile
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
