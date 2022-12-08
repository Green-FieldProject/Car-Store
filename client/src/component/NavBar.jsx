import React  from "react";
import { Navbar, Nav, Form, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


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
          <Navbar.Brand >Car Town</Navbar.Brand>
          <Navbar.Toggle  />
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
             
               <h3 onClick={handelLogOut}>logout</h3> 
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="button" variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}


export default NavB