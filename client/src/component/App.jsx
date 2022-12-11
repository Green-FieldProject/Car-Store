import React, { useEffect, useState } from "react";
import Home from "./home";
import Register from "./register";
import PostCar from "./postCar";
import Details from "./postDetail";
// import search.jsx from "./search"
import "../index.css";
import "../index";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import NavB from "./NavBar";
import Login from "./login";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./privateRoute/privateRoute";
import MyAdds from "./myAdds";

var App = () => {
  const [car, setCar] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4000/api/car").then((res) => {
      setCar(res.data);
      console.log(car);
    });
  }, []);

  return (
    <div className="mainApp">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/details/:id"
          element={
            <PrivateRoute>
              <NavB />
              <Details />
            </PrivateRoute>
          }
        />

        <Route
          index
          path="/"
          element={
            <PrivateRoute>
              {" "}
              <NavB />
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/posts"
          element={
            <PrivateRoute>
              <NavB />
              <PostCar />
            </PrivateRoute>
          }
        />

        <Route
          path="/myadds"
          element={
            <PrivateRoute>
              <NavB />
              <MyAdds />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
