import React from 'react'

const CardRestaurantsDetail = ({rest}) => {
  return (
    <div>
      <h3>{rest.category}</h3>
      <h4>{rest.name}</h4>
      <p>{rest.description}</p>
      <img  src={rest.photoUrl}/>
      <p>{rest.price}</p>
        
    </div>
  )
}

export default CardRestaurantsDetail