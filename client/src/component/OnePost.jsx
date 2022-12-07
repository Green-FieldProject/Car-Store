import React from 'react'

export default function OnePost({element}) {
  return (
    <div className='element'>
    <section className='name'>{element.name}</section>
    <section className='description'>{element.description}</section>
    <section className='image'>{element.imageUrl}</section>
    <section className='price'>{element.price}</section>
    </div>
  )
}