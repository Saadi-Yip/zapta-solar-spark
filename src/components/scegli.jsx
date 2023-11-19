import React from "react";
import Heading from "./global/heading";

function Scegli({ data }) {
  console.log(data);
  return (
    <section className="mb-5">
      <Heading heading="Scegli il tuo SIRE" />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {data.map((item, i) => {
            return (
              <div className="col" key={i}>
                <div className="card border-0 shadow-color">
                  <img class="card-img-top" src={item.image} alt={item.title} />
                  <div class="card-body ">
                    <h5 class="card-title text1 fs-4">{item.title}</h5>
                    <div className="list-group1">
                      {item.listData1.map((list1, index) => {
                        return (
                          <div key={index} className="text2 d-flex gap-4">
                            <span>
                              <img
                                src={"/images/listIcon.png"}
                                alt="icon"
                                width={12}
                                height={9}
                              />
                            </span>
                            <p className="list_data">{list1}</p>
                          </div>
                        );
                      })}
                    </div>

                    <h4 className="fs-6 fw-bold mb-2">CONSIGLIATO PER:</h4>
                    <div className="d-flex gap-4">
                      <div className="d-flex flex-column gap-2 mb-2">
                        <span className="bg-7 p-2 rounded-full text-center">
                          <img
                            src="/images/battery.png"
                            alt="/"
                            height={40}
                            style={{ maxHeight: "40px" }}
                          />
                        </span>
                        <p>Devices</p>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <span className="bg-7 p-2 rounded-full text-center">
                          <img src="/images/family.png" alt="/" height={40} />
                        </span>
                        <p>Family</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <h5 className="dtitle">{item.title2}</h5>
                      <span>
                        <img src={"/images/arrow_down.png"} alt="" />
                      </span>
                    </div>
                    <div className="list-group1">
                      {item.listData2.map((list1, index) => {
                        return (
                          <div key={index} className="text2 d-flex gap-4">
                            <span>
                              <img
                                src={"/images/markerr.png"}
                                alt=""
                                height={9}
                              />
                            </span>
                            <p className="list_data">{list1}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Scegli;
