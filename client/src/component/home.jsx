import OnePost from "./OnePost";
var Home = (props) => {
  return (
    <div>
      {props.car.map((element) => {
        console.log(element);
        return <OnePost element={element} key={element.id} />;
      })}
    </div>
  );
};

export default Home;
