import React from 'react'


function Business(business) {
  return (
    <div>
      <img src={business.imageSrc} alt='pic'/>
      <h3>{business.name}</h3>
      <p>{business.address}</p>
      <p>{business.city}</p>
      <p>{business.state}</p>
      <p>{business.zipcode}</p>
      <p>{business.category}</p>
      <p>{business.rating}</p>
      <p>{business.reviewCount}</p>

    </div>
  )
}

export default Business
