import React,{useState} from "react";
import { Navbar, Nav, Form, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Home from "./home.jsx";
const NavB =({props}) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()
  
  const handleChange = e => {
    setSearch(e.target.value);
  };

const handelLogOut = () => {
 localStorage.removeItem("token")
  navigate("/login")
}
  return (
    <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/">
             <h3>Home</h3> 
            </Link>
            <Link to="/posts">
               <h3>Post</h3> 
            </Link>
            <Link to="/login">
               <h4 onClick={handelLogOut}>logout</h4> 
               </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}


export default NavB