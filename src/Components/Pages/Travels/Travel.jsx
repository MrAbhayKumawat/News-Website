import React, { useState, useEffect } from "react";
import "./Travel.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FolderIcon from "@mui/icons-material/Folder";
import CommentIcon from "@mui/icons-material/Comment";
import TelegramIcon from "@mui/icons-material/Telegram";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "../Home/Rightsaide.css";

function Travel() {
  const [newsData, setNewsData] = useState([]);
  const [query, setQuery] = useState("india");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=43d30257fe1543b0bdcd40ac7bbe0c4c`
        );
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="travel-Container">
      <div className="travel-page">
        {query ? (
          newsData.map((article, index) => (
            <div key={index} className="travel-story">
              <div className="main-img">
                <img
                  src={article.urlToImage}
                  alt="Thumbnail"
                  className="image"
                />
              </div>
              <div className="tarvel-item">
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <div className="author-con">
                  <div className="author-imgdev">
                    <img
                      src={article.urlToImage}
                      alt="Thumbnail"
                      id="author-image"
                    />
                  </div>
                  <div style={{ marginLeft: "2%" }}>
                    <p style={{ textAlign: "start" }}>Written by</p>
                    <strong style={{ color: "black", fontSize: "1.1rem" }}>
                      {article.source.name}{" "}
                      <span style={{ color: "#b3b3b3" }}>
                        {article.publishedAt.slice(0, 10)}
                      </span>
                    </strong>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "1.5%",
                  }}
                >
                  <strong>
                    {" "}
                    <FavoriteBorderIcon
                      style={{ fontSize: "1.8rem", marginTop: "2%" }}
                    />
                    &nbsp;{" "}
                    <CommentIcon
                      style={{ fontSize: "1.8rem", marginTop: "2%" }}
                    />
                    &nbsp;{" "}
                    <TelegramIcon
                      style={{ fontSize: "1.8rem", marginTop: "2%" }}
                    />
                    &nbsp;
                  </strong>

                  <button className="btn">Continue Reading</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Data is Loading.....</p>
        )}
      </div>
      <div className="RightSide-container">
        <div className="container-aside">
          <div className="input-field">
            <input
              className="input"
              name="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a keyword and hit enter..."
              type="search"
            />
          </div>
          <div className="categories-container">
            <h2
              className="categories-heading"
              style={{
                paddingLeft: "4.5%",
                fontStyle: "italic",
                color: "rgb(70 68 68 / 80%)",
                letterSpacing: "1.5px",
              }}
            >
              Categories
            </h2>
            <ul className="categories-list">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setQuery("Fashion");
                  }}
                >
                  Fashion
                </a>
                <span>(6)</span>
              </li>
              <hr />
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setQuery("Technology");
                  }}
                >
                  Technology
                </a>
                <span>(3)</span>
              </li>
              <hr />
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setQuery("Travel");
                  }}
                >
                  Travel
                </a>
                <span>(8)</span>
              </li>
              <hr />
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setQuery("Food");
                  }}
                >
                  Food
                </a>
                <span>(2)</span>
              </li>
              <hr />
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setQuery("Photography");
                  }}
                >
                  Photography
                </a>
                <span>(4)</span>
              </li>
              <hr />
            </ul>
          </div>
          <div className="popular-articles">
            <h2
              style={{
                paddingLeft: "4.5%",
                fontStyle: "italic",
                color: "rgb(70 68 68 / 80%)",
                letterSpacing: "1.5px",
              }}
            >
              Popular Articles
            </h2>
            <ul className="categories-list">
              <li>
                <a href="#">NA</a>
                <span>(0)</span>
              </li>
              <hr />
              <li>
                <a href="#">NA</a>
                <span>(0)</span>
              </li>
              <hr />
              <li>
                <a href="#">NA</a>
                <span>(0)</span>
              </li>
              <hr />
              <li>
                <a href="#">NA</a>
                <span>(0)</span>
              </li>
              <hr />
              <li>
                <a href="#">NA</a>
                <span>(0)</span>
              </li>
              <hr />
            </ul>
          </div>
          <div>
            <h2
              style={{
                paddingLeft: "4.5%",
                fontStyle: "italic",
                color: "rgb(70 68 68 / 80%)",
                letterSpacing: "1.5px",
              }}
            >
              Tag Cloud
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.8rem",
                  padding: "1rem",
                }}
              >
                <button>ANIMALS</button>
                <button>HUMANE</button>
                <button>PEOPLE</button>
                <button>CAT</button>
                <button>DOG</button>
                <button>LEAVES</button>
                <button>FOOD</button>
              </div>
            </div>
            <div className="new-later">
              <h2
                style={{
                  paddingLeft: "4.5%",
                  fontStyle: "italic",
                  fontWeight: "normal",
                  color: "rgb(255, 255, 255)",
                  paddingTop: "2.5%",
                }}
              >
                NewsLater
              </h2>
              <p
                style={{
                  paddingLeft: "4.5%",
                  fontStyle: "italic",
                  width: "70%",
                  fontSize: "20px",
                  fontWeight: "normal",
                  color: "rgb(255, 255, 255)",
                  paddingTop: "2.5%",
                }}
              >
                Far far away, behind the word mountains, far from the countries
                Vokalia
              </p>
              <input
                placeholder="Enter your text..."
                className="input"
                name="text"
                type="text"
                style={{ marginLeft: "8.5%", marginTop: "10%" }}
              ></input>
              <button
                class="button"
                style={{
                  width: "80%",
                  fontSize: "1rem",
                  marginLeft: "10%",
                  marginTop: "5%",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Travel;
