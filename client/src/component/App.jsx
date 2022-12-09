import React from "react";
import Home from "./home";
import Register from "./register"; 
import PostCar from "./postCar"; 
import Details from "./postDetail";
// import search.jsx from "./search"
import "../index.css";
import "../index";
import "bootstrap/dist/css/bootstrap.min.css";
import NavB from "./NavBar";
import Login from "./login";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute/privateRoute"

var App = () => {
  


  return (
    <>
     
      <Routes>
        <Route  path="/login" element={ <Login /> } />
        <Route  path="/register" element={ <Register /> } /> 
        <Route  path="/details" element={ <PrivateRoute>< Details  /> </PrivateRoute>  } /> 
   
        <Route index path="/" element={<PrivateRoute >  <NavB /><Home /></PrivateRoute>} />
        <Route  path="/posts" element={ <PrivateRoute ><PostCar/></PrivateRoute> } />
      
      <Routes>
        <Route  path="/login" element={ <Login /> } />
        <Route  path="/register" element={ <Register /> } />

        <Route index path="/" element={<PrivateRoute ><NavB /><Home/></PrivateRoute>} />
        <Route  path="/posts" element={ <PrivateRoute ><NavB /><PostCar/></PrivateRoute> } />
        <Route  path="/posts/:id" element={ <PrivateRoute ><div>fff</div></PrivateRoute> } />
      </Routes>
    </>
  );
};

export default App;
