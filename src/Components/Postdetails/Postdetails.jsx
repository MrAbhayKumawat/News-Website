import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Postdetails/Postdetails.css";

function Postdetails() {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const apiurl = `https://andremoore-97bcb-default-rtdb.firebaseio.com/AndreMoore/${location.state.Postid}.json`;

  console.log(postData)
  useEffect(() => {
    fetch(apiurl)
      .then((response) => response.json())
      .then((data) => {
        setPostData(data);
          setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [apiurl]);

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
                <h1 className="Heading">{postData?.Title}</h1>
                <p> PublishDate - {postData?.PublishDate}</p>
               
                  <div className="travel-story" key={location.state.Postid}>
                    <div className="main-img">
                      <img
                        src={postData.postImage}
                        alt="Thumbnail"
                        className="image"
                      />
                    </div>
                    <div className="tarvel-item">
                      <h1>{postData.Title}</h1>
                      <p>{postData.Content}</p>
                      <div className="author-con">
                        <div className="author-imgdev">
                          <img
                            src={postData.postImage}
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
