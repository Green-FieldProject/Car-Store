import OnePost from "./OnePost";
var Home = (props) => {
  return (
    <div>
      {props.car.map((element) => {
        console.log(element);
        return (
            <div>
        
        <OnePost element={element} key={element.id} />
      </div>)})}
    </div>
  );
};

export default Home;
