import React, { useState, useEffect } from "react";
import "./Fashion.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FolderIcon from "@mui/icons-material/Folder";
import CommentIcon from "@mui/icons-material/Comment";

function Fashion() {
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
    <div className="con">
      <div className="fashion-Container">
        {newsData.map((article, index) => (
          <div key={index} className="main-story">
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
        ))}
      </div>
    </div>
  );
}

export default Fashion;
