import React from "react";
import "./About.css";
import Sidebar from "../../Sidebar/Sidebar";

function About() {
  return (
    <>
      <div className="main-section">
        <Sidebar />
        <div className="About-container">
          <div>
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPMYZxD4A9bKx3SywWppjTjN5eyXZr6M4-f2ckeOVVGFh2xwazt0txJhMnt-GGBwNj8EZWopKNCIve_bRJXlfB9kYxO0KlxG3_VKGRxGAVG-Txwih4OlTXolWZm5t_OGMQ7kDJuKjr04zoVJEhl7tWC_OOTUmFosHzL5toYMa9PhKvHJOojeiPXY73_kh8/w503-h726/Screenshot%202023-12-02%20100334.png"
              alt="About-image"
              className="About-image"
            ></img>
          </div>
          <div className="About">
            <div className="about-item">
              <h1 style={{ fontSize: "3rem", fontWeight: "900" }}>
                I'm{" "}
                <span style={{ color: "#1eafed", fontWeight: "900" }}>
                  Andrea Moore{" "}
                </span>
                a Scotish Blogger & Explorer
              </h1>
              <p style={{ lineHeight: 1.5 }}>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
