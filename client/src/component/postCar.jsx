import React, { useState } from "react";
import axios from "axios";
import "../index.css";

const PostCar = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");

  const add = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:4000/api/car",
        {
          name: name,
          description: description,
          imageUrl: imageUrl,
          price: price,
        },
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => console.log("posted"));
  };


  return (
    <body className="postPage">
      <div className="box">
        <form>
          <span className="text-center">Post</span>
          <div className="input-container">
            <input
              type="text"
              placeholder="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="image Url"
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <center>       
            <button
              className="btn"
              onClick={() => {
                add();
              }}
            >
              Post Your Car
            </button>
          </center>
        </form>
      </div>
    </body>
  );
};

export default PostCar;
