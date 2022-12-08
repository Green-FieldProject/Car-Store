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
