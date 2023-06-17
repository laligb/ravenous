import React from 'react'
import Business from './Business'
import { BUSINESSES } from './businesses';

function BusinessList(listOfBusinesses) {
  return (

    <div>
      {BUSINESSES.map((business, index) => {
        <Business key = {index} value = {business} />
      })}


    </div>
  )
}

export default BusinessList
