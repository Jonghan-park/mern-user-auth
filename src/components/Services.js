import React from 'react'

export default function Services() {
  return (
    <div>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Our Services</h3>
              <h1 className="display-6 text-center mb-4">Our <b>Awesome</b> Services</h1>
              <hr className='w-25 mx-auto' />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
