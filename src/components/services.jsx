import React from "react";
import Heading from "./global/heading";
function Services({ serviceData }) {
  return (
    <section className="mb-5">
      <img src="/images/texture.png" alt="Texture" className="texture-image" />
      <div className="container">
        <Heading heading="Chi Siamo" />
        <div className="d-flex align-items-center justify-content-center flex-column text3">
          <p className="text-center">
            Solar Innovatio è una PMI innovativa italiana specializzata nella
            progettazione e realizzazione di sistemi fotovoltaici intelligenti.
            Solar Innovatio unisce alla decennale esperienza maturata nel
            panorama italiano nell'ambito delle soluzioni fotovoltaiche un
            approccio ingegneristico, innovativo, digitale alla principale fonte
            di energia rinnovabile.
          </p>
        </div>

        <div className="mt-5 pt-5" style={{ paddingTop: "80px" }}>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {serviceData?.map((item, i) => {
              return (
                <div key={i} className="col">
                  <div className="card service-card bg-7 border-0">
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.title}
                    />
                    <div
                      className="card-body text-center"
                      style={{ marginTop: "-80px" }}
                    >
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text" style={{ fontSize: "14px" }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1 d-flex a justify-conter-center">
            <h4 className="comments text-center">
              Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una
              componente di una soluzione ingegneristica più completa che
              comprende sensoristiche avanzate e l'integrazione con i sistemi
              domotici di casa.
            </h4>
          </div>
          <h5 className="text1 text-center">- Christian Testoni -</h5>
        </div>
      </div>
    </section>
  );
}

export default Services;
