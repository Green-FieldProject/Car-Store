import React from "react";

export default function OnePost({item}) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="price">
          <span className="letter">{item.price}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{item.name}</h5>
        </div>
      </div>
       <img className="card-image" src={item.imageUrl} alt="Logo" /> 
      <div className="card-text">{item.description}</div>
    </div>
  );
}
//todo akraw louled chnya aammlet ahwka aamlet  delete wel update wel updatte bch taamloha bel price 
// const [price,setPrice] = useState('') lahne bch naamlo update lel price  w el function delet ahyka hadhra 
// var update=(id)=>{
  //   axios.put(`http://localhost:4000/api/car/:id${id}`,{price})
  //   .then((res)=>{
  //     console.log("hello")
  //   })
  //   .catch(err=>{console.log(err)
  // })
  // window.location.reload(false)
  
  // }
// var deleted=(id)=>{
  //   axios.delete(`http://localhost:4000/api/car/:id${id}`)
  //   .then((res)=>{
  //     console.log("tfaskhet")
  //   })
  //   .catch(err=>{console.log(err)
  // })
  // window.location.reload(false)
  // }
  // 
  // <input type="text" className="add" onChange={(e)=>setPrice(e.target.value)}/> <button className="button" onClick={()=> update(element._id)}>update</button>
  //       <button className="button" onClick={()=>deleted(element._id)}>delete</button>
  