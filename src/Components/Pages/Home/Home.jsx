import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import "./Home.css";
import "./Rightsidebar.css";

function Home() {
  const [postData, setPostData] = useState(null);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=india&apiKey=43d30257fe1543b0bdcd40ac7bbe0c4c"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Data from API:", data);
        if (data && data.articles) {
          setPostData(data.articles);
        } else {
          setPostData([]);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="main-section">
        <Sidebar />
        <div className="travel-Container">
          <div className="travel-page">
            {postData && postData.length > 0 ? (
              postData.map((post, index) => (
                <div className="travel-story" key={index}>
                  <div className="main-img">
                    <img
                      src={post.urlToImage}
                      alt="Thumbnail"
                      className="image"
                    />
                  </div>
                  <div className="tarvel-item">
                    <h1 style={{ paddingLeft: "2%" }}>{post.title}</h1>
                    <p style={{ color: "grey" }}>{post.content}</p>
                    <div className="author-con">
                      <div className="author-imgdev">
                        <img
                          src={post.urlToImage}
                          alt="Thumbnail"
                          id="author-image"
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "65%",
                          alignItems: "center",
                          justifyContent: "space-between",
                          paddingTop: "1.5%",
                        }}
                      >
                        <div style={{ marginLeft: "2%", marginBottom: "3%" }}>
                          <p style={{ textAlign: "start" }}>Written by</p>
                          <strong
                            style={{ color: "black", fontSize: "1.1rem" }}
                          >
                            Publish:
                            <span style={{ color: "#b3b3b3" }}>
                              {post.source.name}
                            </span>
                          </strong>
                        </div>
                      </div>
                      <button
                        className="btn"
                        onClick={() => {
                          navigate("/Postdetails", {
                            state: {
                              title: post.title,
                              thumbnail: post.urlToImage,
                              content: post.content,
                              publishdate: post.publishedAt,
                            },
                          });
                        }}
                      >
                        Continue Reading
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="loader"></div>
              </div>
            )}
          </div>
          <RightSidebar setQuery={setQuery} />
        </div>
      </div>
    </>
  );
}

function RightSidebar({ setQuery }) {
  return (
    <div className="RightSide-container">
      <div className="container-aside">
        <div className="input-field">
          <input
            className="aside-input"
            name="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a keyword and hit enter..."
            type="search"
          />
        </div>
        <div className="categories-container">
          <h2 className="categories-heading">Categories</h2>
          <ul className="categories-list">
            <li>
              <p onClick={() => setQuery("Fashion")}> Fashion</p>
              <span>(6)</span>
            </li>
            <li>
              <p onClick={() => setQuery("Technology")}> Technology</p>
              <span>(3)</span>
            </li>
            <li>
              <p onClick={() => setQuery("Travel")}> Travel</p>
              <span>(8)</span>
            </li>
            <li>
              <p onClick={() => setQuery("Food")}> Food</p>
              <span>(2)</span>
            </li>
            <li>
              <p onClick={() => setQuery("Photography")}> Photography</p>
              <span>(4)</span>
            </li>
          </ul>
        </div>
        <div className="popular-articles">
          <h2 className="categories-heading">Popular Articles</h2>
          <ul className="categories-list">
            {/* Render popular articles here */}
          </ul>
        </div>
        <div>
          <h2 className="categories-heading">Tag Cloud</h2>
          <div className="tag-cloud">
            <button>ANIMALS</button>
            <button>HUMANE</button>
            <button>PEOPLE</button>
            <button>CAT</button>
            <button>DOG</button>
            <button>LEAVES</button>
            <button>FOOD</button>
          </div>
        </div>
        <div className="newsletter">
          <h2 className="categories-heading">Newsletter</h2>
          <p>Subscribe to our newsletter for updates</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
