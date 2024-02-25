import React, { useState, useEffect } from "react";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";
import CommentIcon from "@mui/icons-material/Comment";
import TelegramIcon from "@mui/icons-material/Telegram";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "../Home/Rightsidebar.css";
import Sidebar from "../../Sidebar/Sidebar";

function Home() {
  const [postData, setPostData] = useState(null);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=india&apiKey=43d30257fe1543b0bdcd40ac7bbe0c4c"
    )
      .then((response) => response.json())
      .then((data) =>
        setTimeout(() => {
          setPostData(data.articles);
        }, 2000)
      )
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="main-section">
        <Sidebar />

        <div className="travel-Container">
          <div className="travel-page">
            {postData ? (
          postData.map((postId,index) => (
                <div className="travel-story" key={index}>
                  <div className="main-img">
                    <img
                      src={postId.urlToImage}
                      alt="Thumbnail"
                      className="image"
                    />
                  </div>
                  <div className="tarvel-item">
                    <h1 style={{ paddingLeft: "2%" }}>
                      {" "}
                  {postId
                  .title
                }
                    </h1>
                    <p style={{ color: "grey" }}>
                      {" "}
                      {postId.
content
}
                    </p>
                    <div className="author-con">
                      <div className="author-imgdev">
                        <img
                          src={postId.urlToImage
                          }
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
                              {postId.
source.name
}
                            </span>
                          </strong>
                        </div>
                      </div>

                      <button
                        className="btn"
                        onClick={() => {
                          navigate("/Postdetails", {
                            state: { title:postId.title,tumbnail:postId.urlToImage,Content:postId.
                              content,publishdate:postId.publishedAt
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
              // Loader
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div class="loader"></div>
              </div>
            )}
          </div>
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
              {/* ... rest of your code ... */}
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
                  {/* ... add li elements for popular articles ... */}
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
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}
                >
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
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <input
                    placeholder="Enter your text..."
                    name="text"
                    type="text"
                    style={{
                      marginTop: "10%",
                      width: "80%",
                      marginLeft: "10%",
                    }}
                  ></input>
                  <button
                    className="button"
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
      </div>
    </>
  );
}

export default Home;
