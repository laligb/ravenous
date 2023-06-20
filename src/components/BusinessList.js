import React from 'react'
import Business from './Business'


function BusinessList({listOfBusinesses}) {
  return (

    <div className='App-cards'>
      {listOfBusinesses.map((business, index) => (
        <div key={index} className="App-card">
          <Business business={business} />
        </div>
      ))}

    </div>
  )
}

export default BusinessList
