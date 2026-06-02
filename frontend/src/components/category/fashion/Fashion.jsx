import React from 'react'
import './Fashion.css'
import Womenfashion from './WomenFashion'
import MenFashion from './MenFashion'
import Bags from './Bags'
import ShopBanner from '../../ShopBanner/ShopBanner'
import Watches from './Watches'
const Fashion = () => {
  return (
    <div>
      <Womenfashion />  
      <Bags />
<ShopBanner />
      <MenFashion />
      <Watches />
    </div>
  )
}

export default Fashion
