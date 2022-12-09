import OnePost from "./OnePost";
import { useState, useEffect } from "react";
import { Navbar, Nav, Form, Container, Button } from "react-bootstrap";
import Axios from "axios";
import SearchList from "./search";

var Home = ({data}) => {
  const [searchField, setSearchField] = useState("");
  const filtredData = data.filter(
    name => {
      return (
        name.name
        .toLowerCase()
        .includes(searchField.toLowerCase()) 
      );
    }
  )
  const handleChange = e => {
    setSearchField(e.target.value);
  };
  function searchList() {
    return (
      <div>
        <SearchList filtredData={filtredData} />
      </div>
    );
  }
  return (
    <div>
      <div>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange = {handleChange}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </div>
      {searchList()}
    
    </div>
  );
};

export default Home;
