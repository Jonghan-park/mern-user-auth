import React from "react";
import service_data from "../data/service_data";

export default function Services() {
  return (
    <div>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Our Services</h3>
              <h1 className="display-6 text-center mb-4">
                Our <b>Awesome</b> Services
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            {service_data.map((service) => {
              const { id, class_name, title, contents } = service;
              return (
                <div className="col-md-4" key={id}>
                  <div className="card p-3">
                    <div className="card-body text-center">
                      <i className={class_name}></i>
                      <h5 className="card-title mb-3 fs-4 fw-bold">{title}</h5>
                      <p className="card-text lead">{contents}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
