import React,{useState,useEffect} from "react";  
import axios  from "axios";  

 

const Details=({id})=>{    
    

    const [data,setData] =useState("")

    useEffect(()=>{ 
    axios.get(`http://localhost:4000/api/car/${id}`).then((res)=>{ 
     
    setData(res.data) 
    console.log(data);
    }) 
},[]) 
  
//egege/gg
    
return ( 

    <div>    
        {data.name}
    </div>
)


} 
export default Details ;