import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import TelegramIcon from "@mui/icons-material/Telegram";
import CloseIcon from "@mui/icons-material/Close";
import "./sidebar.css";
import Home from "../Pages/Home/Home";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <div className="top_section">
          <div className="bars">
            {isOpen ? (
              <CloseIcon onClick={toggle} className="menubtn" />
            ) : (
              <MenuIcon onClick={toggle} className="menubtn" />
            )}
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/fashion">Fashion</a>
            </li>
            <li>
              <a href="/travel">Travel</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="footer">
          <h1 className="heading">
            Andrea <span>Moore</span>
          </h1>
          <div>
            <form>
              <h3>Subscribe for newsletter</h3>
              <div className="form-email">
                <input type="email" placeholder="Email Address" />
                <TelegramIcon
                  style={{ cursor: "pointer", fontSize: "1.8rem" }}
                />
              </div>
              <p style={{ padding: "5%" }}>
                Copyright ©2023 All rights reserved | This template is made
                with by Colorlib
              </p>
            </form>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
