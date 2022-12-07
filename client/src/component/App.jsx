
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Home from "./home";
import "../index.css";
import "../index";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from "./NavBar";
import Login from "./login";


var App = () => {
  const [car, setCar] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4000/api/car").then((res) => {
      setCar(res.data);

      setCar(res.data);
      console.log(car);
      // console.log("hello")
    });
  }, []);

  return (
    <div>
      <NavB/>
      
    <h2>
    <login onClcik={} />
    </h2>

      <h3>
        <Home car={car} />
      </h3>
    </div>
  );
};

export default App;
