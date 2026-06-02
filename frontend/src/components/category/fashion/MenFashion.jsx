import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import {
  FaHeart,
  FaRegBookmark,
} from 'react-icons/fa'

import './Fashion.css'

const products = [
  {
    id: 1,
    name: 'Unisex Cozy Knitted Sweatshirt',
    price: '₵230.00',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
  },

  {
    id: 2,
    name: 'Premium Fashion Slides',
    price: '₵450.00',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },

  {
    id: 3,
    name: 'Luxury Perfume Oil',
    price: '₵160.00',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
  },

  {
    id: 4,
    name: 'New Balance Style Sneakers',
    price: '₵550.00',
    image:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
  },

  {
    id: 5,
    name: 'Bold Fashion Sunglasses',
    price: '₵180.00',
    image:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80',
  },
]

const MenFashion = () => {
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

export default MenFashion