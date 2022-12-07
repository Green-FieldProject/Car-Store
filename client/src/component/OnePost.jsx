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
