import React from 'react'

export default function Home() {
  return (
    <div>
      <section className="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">Feels the Fresh Business Perspective</h1>
              <p className="lead text-center fs-4 mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptatem velit beatae necessitatibus accusamus maxime voluptatum molestiae quisquam amet totam! Tenetur voluptate nulla magnam adipisci iste, ipsa asperiores culpa quidem.
              </p>
              <div className="buttons d-flex justify-content-center">
                <button className="btn btn-light me-4 rounded-pill px-4 py-2">Get Quote</button>
                <button className="btn btn-light rounded-pill px-4 py-2">Our Services</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
