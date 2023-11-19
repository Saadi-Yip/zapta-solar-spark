import React from "react";

const SireSection = () => {
  return (
    <section>
      <div class="container-fluid">
        <div class="row align-items-center sbir_row">
          <div class="col-md-5">
            <img src="/images/sbir.png" alt="" style={{ width: "100%" }} />
          </div>
          <div class="col-md-7 sbir-col">
            <h6 class="color-green">S.I.R.E</h6>
            <h2 class="color-dark">Smart Integrated Renewable Energy</h2>
            <p class="color-grey">
              S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo per
              la produzione, conversione e gestione dell'energia solare,
              studiato specificatamente per installazioni all'interno di
              condomini.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SireSection;
