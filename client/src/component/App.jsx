import React, { useEffect, useState } from "react";
import Axios from "axios";
import Home from "./home";
import "../index.css";
import "../index"
var App = () => {
  const [car, setCar] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4000/api/car").then((res) => {
      setCar(res.data);
   
      setCar(res.data)
      console.log(car);
      // console.log("hello")
    });
  },[car]);

  return (
    <div>
      <div className="headerImg"></div>
      <center>
        <h1>Car-Store</h1>
      </center>
      <center>
        <h3>
          <Home car={car} />
        </h3>
      </center>
      
    <div className="headerImg"></div>
      <center><h1>Car-Store</h1></center>
     
    </div>
  );
};

export default App;
