import React from "react";

export default function Login() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1 className="display-4">Welcome Back</h1>
            <p className="lead">Enter Your Credentials To Login</p>
            <h5>OR</h5>
            <NavLink
              to="/register"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            ></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
