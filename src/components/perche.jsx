import React from "react";
import Heading from "./global/heading";

const PercheSection = ({ percheData, percheData2 }) => {
  return (
    <section className="mb-5 text-center">
      <Heading heading="Perchè S.I.R.E." />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {percheData?.map((item, i) => {
            return (
              <div key={i} className="col">
                <div
                  className="card pt-4 shadow-color border-0 d-flex flex-column justify-content-center align-items-center"
                  style={{
                    height: "294px",
                  }}
                >
                  <img
                    src={item.image}
                    className=""
                    alt={item.title}
                    style={{
                      objectFit: "cover",
                      width: "50px",
                      margin: "auto",
                    }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{item.title}</h5>
                    <p className="card-text " style={{ fontSize: "14px" }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-7">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 pb-4 d-flex row-cols-md-3 row-cols-lg-4  g-4 mt-5 bg-7">
            {percheData2?.map((item, i) => {
              return (
                <div key={i} className="col">
                  <div
                    className="card shadow-sm px-3 pb-3 border-0 text-center d-flex justify-content-start align-items-center "
                    style={{ height: "130px" }}
                  >
                    <img
                      src={item.icon}
                      alt={item.icon}
                      width="30px"
                      height={30}
                      className="mb-3 mt-3"
                    />
                    {item.value && (
                      <h4 className="text2 fw-bold">{item.value}</h4>
                    )}
                    <p className="text2">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PercheSection;
