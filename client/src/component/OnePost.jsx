import axios from "axios";
import React, {useState}from "react"; 
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

 



  return ( 
   <center>
    <MDBCard style={{ maxWidth: '600px' ,padding: '10px' ,maxHeight : "10" }}> 
    <MDBRow className='g-0'> 
    <MDBCol md='8'> 
    <MDBCardImage src= {element.imageUrl} position='top' alt='...' /> 
    </MDBCol >  
    <MDBCol md='8'>
    <MDBCardBody>
      <MDBCardTitle>{element.name}</MDBCardTitle>
      <MDBCardText>{element.description}</MDBCardText> 
      <MDBCardText>{element.price} DT</MDBCardText> 
      <input className="input2" placeholder="price" type="number" id="quantity" name="quantity" min="1" max="10" onChange={(e)=>{ setPrice(e.target.value)}} />
      
      <MDBBtn href='#' onClick={()=>{update(element._id)}}>Update</MDBBtn> 
      <button className="delete" href='#' onClick={()=>{del(element._id)}}>Delete</button> 
    </MDBCardBody>  
    </MDBCol>
    </MDBRow>
  </MDBCard> 
  </center>
  );
}
//todo akraw louled chnya aammlet ahwka aamlet  delete wel update wel updatte bch taamloha bel price 
// const [price,setPrice] = useState('') lahne bch naamlo update lel price  w el function delet ahyka hadhra 
// var deleted=(id)=>{
  //   axios.delete(`http://localhost:4000/api/car/:id${id}`)
  //   .then((res)=>{
  //     console.log("tfaskhet")
  //   })
  //   .catch(err=>{console.log(err)
  // })
  // window.location.reload(false)
  // }
  // var update=(id)=>{
  //   axios.put(`http://localhost:4000/api/car/:id${id}`,{price})
  //   .then((res)=>{
  //     console.log("hello")
  //   })
  //   .catch(err=>{console.log(err)
  // })
  // window.location.reload(false)
  
  // } 
  // <input type="text" className="add" onChange={(e)=>setPrice(e.target.value)}/> <button className="button" onClick={()=> update(element._id)}>update</button>
  //       <button className="button" onClick={()=>deleted(element._id)}>delete</button>
  