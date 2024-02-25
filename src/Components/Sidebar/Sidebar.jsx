import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import TelegramIcon from "@mui/icons-material/Telegram";
import CloseIcon from "@mui/icons-material/Close";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
const  navigate = useNavigate()
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
            <a onClick={()=>{navigate("/")}} style={{cursor:"pointer"}}>
Home</a>
            </li>

            <li>
            <a onClick={()=>{navigate("/about")}} style={{cursor:"pointer"}}>
About</a>
            </li>
            <li>
            <a onClick={()=>{navigate("/contact")}} style={{cursor:"pointer"}}>
Contact</a>
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
                <input type="email" placeholder="Email Address" style={{ minWidth: '80%'}}/>
                <TelegramIcon
                  style={{ cursor: "pointer", fontSize: "1.8rem" }}
                />
              </div>
              <p style={{ padding: "5%" }}>
                Copyright ©2023 All rights reserved | This template is made with
                by Colorlib
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
