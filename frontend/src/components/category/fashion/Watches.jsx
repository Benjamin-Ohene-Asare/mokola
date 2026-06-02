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
    name: 'Rolex Datejust Silver',
    price: '₵4,500.00',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80',
  },

  {
    id: 2,
    name: 'Luxury Gold Wrist Watch',
    price: '₵3,200.00',
    image:
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1200&q=80',
  },

  {
    id: 3,
    name: 'Classic Black Leather Watch',
    price: '₵1,850.00',
    image:
      'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=1200&q=80',
  },

  {
    id: 4,
    name: 'Smart Digital Watch',
    price: '₵2,400.00',
    image:
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=80',
  },

  {
    id: 5,
    name: 'Premium Rose Gold Watch',
    price: '₵5,100.00',
    image:
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80',
  },
]

const Watches = () => {
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
        <h2>Luxury Watches</h2>

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
                  <small className="black"></small>
                  <small className="cream"></small>
                  <small className="blue"></small>
                </div>
              </div>

              <div className="fashion-info">
                <span>Sizes</span>

                <div className="sizes">
                  <small>40</small>
                  <small>42</small>
                  <small>44</small>
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

export default Watches