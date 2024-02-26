import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Postdetails/Postdetails.css";

function Postdetails() {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    if (data) {
      setPostData(data);
      setLoading(false);
    } else {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }, [data]);

  return (
    <>
      <div className="SingleProduct-hero">
        <div className="SingleProduct-Container">
          <div className="SingleProduct">
            {loading ? (
              // Loader
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="loader"></div>
              </div>
            ) : (
              <>
                <h1 className="Heading">{postData?.title}</h1>
                <p> PublishDate - {postData?.publishdate}</p>

                <div className="travel-story">
                  <div className="main-img">
                    <img
                      src={postData?.thumbnail}
                      alt="Thumbnail"
                      className="image"
                    />
                  </div>
                  <div className="tarvel-item">
                    <h1>{postData.title}</h1>
                    <p>{postData.content}</p>
                    <div className="author-con">
                      <div className="author-imgdev">
                        <img
                          src={postData.thumbnail}
                          alt="Thumbnail"
                          id="author-image"
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Postdetails;
