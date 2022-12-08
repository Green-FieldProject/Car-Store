import React  from "react";
import { Navbar, Nav, Form, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const logoutStyle = {
  position: "absolute",
  right: "-100px",
  width: "200px",
  height: "120px",
 
  
}; 
const postStyle={ 
  position: "absolute",
  left: "800px",
  width: "200px",
  height: "120px",
} 
const navStyle = { 
  position: "absolute",
  right: "170px",
  width: "250px",
  height: "40px",
}


const NavB =() => {

  const navigate = useNavigate()

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
            style={{ maxHeight: "150px"}}
            navbarScroll
          >
            <Link to="/">
             <span  >Home</span> 
            </Link>
            <Link to="/posts">
               <span style={postStyle}>Post</span> 
            </Link>
            <Link to="/login">
               <span style={logoutStyle}  onClick={handelLogOut}>logout</span > 
               </Link>
          </Nav>
          <Form className="d-flex"  style={navStyle}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}


export default NavB