import React from "react";
import Home from "./home";
import Register from "./register"; 
import PostCar from "./postCar";
import "../index.css";
import "../index";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import NavB from "./NavBar";
import Login from "./login";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute/privateRoute"

import { useState, useEffect } from "react";
var App = () => {
    const [car, setCar] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4000/api/car").then((res) => {
      setCar(res.data);
      console.log(car);
    });
  }, []);

return (
    <>
      <NavB />
      <Routes>
        <Route  path="/login" element={ <Login /> } />
        <Route  path="/register" element={ <Register /> } />

        <Route index path="/" element={<PrivateRoute ><Home data={car}/></PrivateRoute>} />
        <Route  path="/posts" element={ <PrivateRoute ><PostCar/></PrivateRoute> } />
        <Route  path="/posts/:id" element={ <PrivateRoute ><div>fff</div></PrivateRoute> } />
      </Routes>
    </>
  );
}

export default App;
