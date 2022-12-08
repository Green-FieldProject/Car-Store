import React from "react";

export default function OnePost({ element }) {
  return (
   <center> <div className="element">
      <section className="name">{element.name}</section>
      <section className="description">{element.description}</section>
      <img src={element.imageUrl} alt="" />
      <section className="price">{element.price}</section>
      <section className="userId">{element.userId}</section>
    </div></center>
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
  