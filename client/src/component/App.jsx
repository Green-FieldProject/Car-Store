import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../index"
var App = () => {
  const [car, setcar] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4000/api/car").then((res) => {
      setcar(res.data)
      console.log(car);
      console.log("hello")
    });
  },[]);

  return (
    
    <div>
      
    <div className="headerImg"></div>
      <center><h1>Car-Store</h1></center>
     
    </div>
  );
};

export default App;
