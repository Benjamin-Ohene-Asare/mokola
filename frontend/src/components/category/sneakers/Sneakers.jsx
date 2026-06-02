import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import {
  FaHeart,
  FaRegBookmark,
} from 'react-icons/fa'

import './../fashion/Fashion.css'

const products = [
  {
    id: 1,
    name: 'Nike Air Jordan Retro',
    price: '₵1,250.00',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
  },

  {
    id: 2,
    name: 'New Balance 9060',
    price: '₵980.00',
    image:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80',
  },

  {
    id: 3,
    name: 'Adidas Ultra Boost',
    price: '₵870.00',
    image:
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80',
  },

  {
    id: 4,
    name: 'Nike Dunk Low Panda',
    price: '₵1,100.00',
    image:
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&q=80',
  },

  {
    id: 5,
    name: 'Yeezy Boost 350',
    price: '₵1,450.00',
    image:
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&q=80',
  },

  {
    id: 6,
    name: 'Puma RS-X Sneakers',
    price: '₵760.00',
    image:
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=80',
  },
]
const Sneakers = () => {
  const sliderRef = useRef(null)

  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -320,
      behavior: 'smooth',
    })
  }

  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: 320,
      behavior: 'smooth',
    })
  }

  return (
    <section className="fashion-section">
      <div className="fashion-header">
        <h2>Men's Fashion</h2>

        <div className="fashion-arrows">
          <button onClick={slideLeft}>‹</button>
          <button onClick={slideRight}>›</button>
        </div>
      </div>

      <div className="fashion-slider" ref={sliderRef}>
        {products.map((item) => (
          <div className="fashion-card" key={item.id}>
            
            <Link
              to={`/product/${item.id}`}
              className="fashion-img-box"
            >
              <img src={item.image} alt={item.name} />

              <span className="save-icon">
                <FaRegBookmark />
              </span>

              <div className="like-count">
                <span>0</span>
                <FaHeart />
              </div>
            </Link>

            <div className="fashion-details">
              <h3>{item.name}</h3>

              <div className="fashion-info">
                <span>Colours</span>

                <div className="colors">
                  <small className="blue"></small>
                  <small className="cream"></small>
                  <small className="black"></small>
                </div>
              </div>

              <div className="fashion-info">
                <span>Sizes</span>

                <div className="sizes">
                  <small>M</small>
                  <small>L</small>
                  <small>XL</small>
                </div>
              </div>

              <h2 className="price">{item.price}</h2>
            </div>

           
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sneakers