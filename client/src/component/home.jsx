import OnePost from "./OnePost";
import {useState,useEffect} from "react"
import Axios from "axios";






var Home = (props) => {
  const [car, setCar] = useState([]);
  
  useEffect(() => {
    Axios.get("http://localhost:4000/api/car").then((res) => {
      setCar(res.data);
      console.log(car);
    });
  }, []);
  return (
    <div>
       <img className="imag" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/317808319_702182981263372_5492111919281268759_n.png?_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=67FR5bAjnDkAX_58Ryh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTHbY3JKvUJ7_73b1zFPorGl5LuVxXnxwfm89dX35HVoQ&oe=63BAAF85" alt="" />
      {car.map((element) => {
        console.log(element);
        return (
            <div>
        
        <OnePost element={element} key={element._id} />
      </div>)})}
    </div>
  );
};

export default Home;
