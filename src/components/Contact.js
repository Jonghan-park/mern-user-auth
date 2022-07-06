import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Contact() {
  const navigate = useNavigate();

  const [msg, setMsg] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Inputs
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setMsg({ ...msg, [name]: value });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Object Destructuring
    // Store Object Data into Variables
    const { name, email, message } = msg;
    try {
      // It is Submitted on port 3000 by default
      // Which is front end but we need to submit it on backend
      // which is on port 5000. so we need proxy
      const res = await fetch("/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (res.status === 400 || !res) {
        window.alert("Message Not Sent. Try again later");
      } else {
        window.alert("Message sent");
        // Use useNavigate instead of using useHistory
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have Some <b>Question?</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="/assets/contact.png" alt="contact" className="w-75" />
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label for="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="John Smith"
                    name="name"
                    value={msg.name}
                    onChange={handleInput}
                  />
                </div>
                <div class="mb-3">
                  <label for="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="name@example.com"
                    name="email"
                    value={msg.email}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-3">
                  <label for="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    name="message"
                    value={msg.message}
                    onChange={handleInput}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary">
                  Send Message<i className="fa fa-paper-plane ms-2 "></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
