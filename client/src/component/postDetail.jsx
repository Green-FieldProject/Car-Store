import React,{useState,useEffect} from "react";  
import axios  from "axios"; 
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
 

const Details=({id})=>{    
    

    const [data,setData] =useState("") 
    const [price,setPrice] = useState('')

    useEffect(()=>{ 
    axios.get(`http://localhost:4000/api/car/${id}`).then((res)=>{ 
     
    setData(res.data) 
    console.log(data);
    }) 
},[])  


var del=(id)=>{
    axios.delete(`http://localhost:4000/api/car/${id}`)
    .then((res)=>{
      console.log("tfaskhet")
    })
    .catch(err=>{console.log(err)
  })
//   window.location.reload(false)
  }   
  
  
 var update=(id)=> {
  axios.put(`http://localhost:4000/api/car/${id}`,{price})
    .then((res)=>{
      console.log("hello")
    })
    .catch(err=>{console.log(err)
  })
//   window.location.reload(false)
  
  } 
  const navigate = useNavigate()


  const Nav =() => {
   navigate(`/`)
  }
  
//egege/gg
    
return ( 

    <center>
    <MDBCard style={{ maxWidth: '600px' ,padding: '10px' ,maxHeight : "10" }}> 
    <MDBRow className='g-0'> 
    <MDBCol md='8'> 
    <MDBCardImage src= {data.imageUrl} position='top' alt='...' /> 
    </MDBCol >  
    <MDBCol md='8'>
    <MDBCardBody>
      <MDBCardTitle  >{data.name}</MDBCardTitle>
      <MDBCardText>{data.description}</MDBCardText> 
      <MDBCardText>{data.price} DT</MDBCardText> 
      <input className="input2" placeholder="price" type="number" id="quantity" name="quantity" min="1" max="10" onChange={(e)=>{ setPrice(e.target.value)}} />
      
      <MDBBtn href='#' onClick={()=>{update(data._id) 
    Nav()}}>Update</MDBBtn> 
      <button className="delete" href='#' onClick={()=>{del(data._id) 
    Nav()}}>Delete</button> 
    </MDBCardBody>  
    </MDBCol>
    </MDBRow>
  </MDBCard> 
  </center>
)


} 
export default Details ;