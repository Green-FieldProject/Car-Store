import React, { useEffect, useState } from "react";
import Axios from "axios";
import Home from "./home";
import "../index.css";
var App = () => {
  const [car, setCar] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4000/api/car").then((res) => {
      setCar(res.data);
    });
  }, []);

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
    </div>
  );
};

export default App;
