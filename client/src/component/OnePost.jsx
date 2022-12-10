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

export default function OnePost({ element ,stal }) {  

  console.log(stal);

  // const [price,setPrice] = useState('')


// var del=(id)=>{
//     axios.delete(`http://localhost:4000/api/car/${id}`)
//     .then((res)=>{
//       console.log("tfaskhet")
//     })
//     .catch(err=>{console.log(err)
//   })
//   window.location.reload(false)
//   }   
  
  
//  var update=(id)=> {
//   axios.put(`http://localhost:4000/api/car/${id}`,{price})
//     .then((res)=>{
//       console.log("hello")
//     })
//     .catch(err=>{console.log(err)
//   })
//   window.location.reload(false)
  
//   }
 
  const navigate = useNavigate()


  const Nav =() => {
   navigate(`/details`)
  }
 


console.log(element.imageUrl )
  return ( 
    <MDBCol>
    <MDBCard>
      <MDBCardImage
        src={element.imageUrl || "https://img.freepik.com/free-vector/modern-blue-urban-adventure-suv-vehicle-illustration_1344-205.jpg?w=2000"}
        alt='...'
        position='top'
      />
      <MDBCardBody>
        <MDBCardTitle>{element.name}</MDBCardTitle>
        <MDBCardText>
         {element.price} DT
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
 
  );
}