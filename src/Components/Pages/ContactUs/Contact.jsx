import React from "react";
import "./Contact.css";
import Sidebar from "../../Sidebar/Sidebar";

function Contact() {
  return (
    <>
      <div className="main-section">
        <Sidebar />
        <div>
          <h2 id="contact-hading">Contact Information</h2>
          <div className="Contact-information">
            <div className="Con-info">
              Address: 198 West 21th Street, Suite 721 New York NY 10016
            </div>
            <div className="Con-info">Phone: + 1235 2355 98</div>
            <div className="Con-info">Email: info@yoursite.com</div>
            <div className="Con-info">Website yoursite.com</div>
          </div>

          <div className="contact-form">
            <div style={{ padding: "3%" }}>
              <form className="form">
                <div className="input-container">
                  {/* <label htmlFor="name">Name:</label> */}
                  <input type="text" id="name" placeholder="Enter Name" />
                  <span></span>
                </div>
                <div className="input-container">
                  {/* <label htmlFor="email">Email:</label> */}
                  <input type="email" id="email" placeholder="Enter email" />
                  <span></span>
                </div>
                <div className="input-container">
                  {/* <label htmlFor="subject">Subject:</label> */}
                  <input type="text" id="subject" placeholder="Subject" />
                </div>
                <div className="input-container" >
                  {/* <label htmlFor="message">Message:</label> */}
                  <textarea id="message" placeholder="Message" ></textarea>
                </div>
                <button
                  type="submit"
                  className="submit"
                  style={{ margin: "auto" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
