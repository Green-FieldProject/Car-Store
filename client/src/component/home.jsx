import OnePost from "./OnePost";
import {useState,useEffect} from "react"
import Axios from "axios";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow } from "mdb-react-ui-kit";






var Home = ({stal}) => {
  const [car, setCar] = useState([]);  
  console.log(stal);
  
  
  useEffect(() => {
    Axios.get("http://localhost:4000/api/car").then((res) => {
      setCar(res.data);
      console.log(car); 
    });
  }, []);
  return (
    <div style={{ maxWidth: "100vw",width: "100vw"}}>

       <img style={{ maxWidth: "100vw",width: "100vw"}} className="imag" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/317808319_702182981263372_5492111919281268759_n.png?_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=67FR5bAjnDkAX_58Ryh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTHbY3JKvUJ7_73b1zFPorGl5LuVxXnxwfm89dX35HVoQ&oe=63BAAF85" alt="" />
    
    <div> 
    <MDBRow className='row-cols-1 row-cols-md-4 g-4 m-8'>
    {car.map((element) => {
        console.log(element);
        return (
        
        <OnePost element={element} key={element._id} stal={stal} />
      )})}
    </MDBRow>
    </div>
    
    
    </div>
  );
};

export default Home;
