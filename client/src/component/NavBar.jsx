import React  from "react";
import { Navbar, Nav, Form, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const logoutStyle = {
  position: "absolute",
  right: "-100px",
  width: "200px",
  height: "120px",
  fontSize: "1.5em",
  color:"black"
 
  
}; 

const homeStyle = {
  position: "absolute",
  left: "300px",
  width: "200px",
  height: "120px",
  fontSize: "1.5em",
  color:"black"
 
  
}; 
const postStyle={ 
  position: "absolute",
  left: "1000px",
  width: "200px",
  height: "120px",
  fontSize: "1.5em",
  color:"black"
} 
const navStyle = { 
  position: "absolute",
  right: "170px",
  width: "250px",
  height: "40px",
  fontSize: "1.5em"
}


const NavB =() => {

  const navigate = useNavigate()

const handelLogOut = () => {
 localStorage.removeItem("token")
  navigate("/login")
}

  return (
    <div style={{width:"100vw", maxWidth:"100vw"}}>
      <Navbar bg="light" variant={"light"} expand="lg" >
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "150px"}}
            navbarScroll
          >
            <img className="ima"  src="https://scontent.xx.fbcdn.net/v/t1.15752-9/318188190_584284990200398_3120553344828726772_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=r1o70u4eQHAAX-zx-M7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQfCgbEXLQM8ZuPZt2Xtj_pRJSMtZskQPuvc71sbWowAg&oe=63BA8B2E" alt="" />
            <Link  to="/">
             <span style={homeStyle} >Home</span> 
            </Link>
            <Link  to="/posts">
               <span style={postStyle}>Post</span> 
            </Link>
            <Link  to="/login">
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