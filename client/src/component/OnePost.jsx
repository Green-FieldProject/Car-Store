import React from 'react'

export default function OnePost({element}) {
  return (
    <div>
    <div>{element.name}</div>
    <div>{element.description}</div>
    <div>{element.imageUrl}</div>
    <div>{element.price}</div>
    </div>
  )
}
