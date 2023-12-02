import React, { useState, useEffect } from "react";
import "./Home.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FolderIcon from "@mui/icons-material/Folder";
import CommentIcon from "@mui/icons-material/Comment";
import "./Rightsaide.css";

function Home() {
  const [newsData, setNewsData] = useState([]);
  const [query, setQuery] = useState("india");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=43d30257fe1543b0bdcd40ac7bbe0c4c`
        );
        const data = await response.json();
        setNewsData(data.articles || []); // Ensure data.articles is defined or default to an empty array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [query]);
  return (
    <div className="main-Container">
      <div className="Home-Container">
      {
          newsData.map((article) => (
            <div key={article.id} className="main-story">
              <div className="main-img">
                <img src={article.urlToImage} alt="Thumbnail" />
              </div>
              <div className="Hero-item">
                <h1>{article.title}</h1>
                <div className="other-dates">
                  <p style={{ color: "#c3c7ca" }}>
                    <CalendarMonthIcon /> {article.publishedAt.slice(0, 10)}
                  </p>
                  <p>
                    <FolderIcon /> {article.source.name}
                  </p>
                  <p style={{ color: "#c3c7ca" }}>
                    <CommentIcon /> {article.commentsCount || 0} Comments
                  </p>
                </div>
                <p>{article.description}</p>
                <p style={{ cursor: "pointer", color: "#1eafed" }}>Read More</p>
              </div>
            </div>
          ))
       }
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
          {/* Add other components as needed */}
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
    <p onClick={() => setQuery("Fashion")}> Fashion</p>
    <span>(6)</span>
  </li>
  <hr />
  <li>
    <p onClick={() => setQuery("Technology")}> Technology</p>
    <span>(3)</span>
  </li>
  <hr />
  <li>
    <p onClick={() => setQuery("Travel")}> Travel</p>
    <span>(8)</span>
  </li>
  <hr />
  <li>
    <p onClick={() => setQuery("Food")}> Food</p>
    <span>(2)</span>
  </li>
  <hr />
  <li>
    <p onClick={() => setQuery("Photography")}> Photography</p>
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

export default Home;
