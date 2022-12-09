import axios from "axios";
import React, {useState}from "react";  
import { Link, useNavigate } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit'; 

export default function OnePost({ element }) {  
  const [price,setPrice] = useState('')


var del=(id)=>{
    axios.delete(`http://localhost:4000/api/car/${id}`)
    .then((res)=>{
      console.log("tfaskhet")
    })
    .catch(err=>{console.log(err)
  })
  window.location.reload(false)
  }   
  
  
 var update=(id)=> {
  axios.put(`http://localhost:4000/api/car/${id}`,{price})
    .then((res)=>{
      console.log("hello")
    })
    .catch(err=>{console.log(err)
  })
  window.location.reload(false)
  
  }
 
  const navigate = useNavigate()


  const Nav =() => {

    
  
  
   
    navigate("/details")
  }
 



  return ( 
   
   <center>
    <MDBCard className="home" style={{ maxWidth: '600px' ,padding: '10px' ,maxHeight : "10" }}> 
    <MDBRow className='g-0'> 
    <center>
      <MDBCol md='8'> 
    <MDBCardImage src= {element.imageUrl} position='top' alt='...' /> 
    </MDBCol >  
    <MDBCol md='8'>
    <MDBCardBody>
      <MDBCardTitle onClick={()=>{ Nav()}} >{element.name}</MDBCardTitle>
      <MDBCardText>{element.description}</MDBCardText> 
      <MDBCardText>{element.price} DT</MDBCardText> 
      <input className="input2" placeholder="price" type="number" id="quantity" name="quantity" min="1" max="10" onChange={(e)=>{ setPrice(e.target.value)}} />
      
      <MDBBtn  onClick={()=>{update(element._id)}}>Update</MDBBtn> 
      <button className="delete"  onClick={()=>{del(element._id)}}>Delete</button> 
    </MDBCardBody>  
    </MDBCol>
    </center>
    </MDBRow>
  </MDBCard> 
  </center>
  );
}

  