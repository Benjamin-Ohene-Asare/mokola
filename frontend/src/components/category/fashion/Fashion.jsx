import React from 'react'
import './Fashion.css'
import Womenfashion from './WomenFashion'
import MenFashion from './MenFashion'
import Bags from './Bags'
import ShopBanner from '../../ShopBanner/ShopBanner'
const Fashion = () => {
  return (
    <div>
      <Womenfashion />  
      <Bags />
<ShopBanner />
      <MenFashion />
    </div>
  )
}

export default Fashion
