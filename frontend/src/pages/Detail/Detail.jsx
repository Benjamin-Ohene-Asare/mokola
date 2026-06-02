import React, { useState } from 'react'
import './Detail.css'

const images = [
  'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1200&q=80',
]

const Detail = () => {
  const [activeImage, setActiveImage] = useState(images[0])
  const [quantity, setQuantity] = useState(1)

  return (
    <main className="product-detail-page">
      <section className="product-hero">
        <div className="product-gallery">
          <div className="main-product-image">
            <img src={activeImage} alt="Product" />
          </div>

          <div className="thumbnail-list">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(img)}
                className={activeImage === img ? 'thumbnail active' : 'thumbnail'}
              >
                <img src={img} alt="Product thumbnail" />
              </button>
            ))}
          </div>
        </div>

        <aside className="product-info-card">
          <p className="category-name">Women’s Fashion</p>

          <h1>Women’s Elegant Cream Crocheted Clutch Bag with Gold Chain Strap</h1>

          <div className="product-price">
            <span>GH₵200.00</span>
            <del>GH₵250.00</del>
          </div>

          <div className="product-option">
            <h4>Colours</h4>
            <div className="colour-options">
              <button className="black"></button>
              <button className="white"></button>
              <button className="navy"></button>
              <button className="peach"></button>
            </div>
          </div>

          <div className="product-option">
            <h4>Quantity</h4>
            <div className="quantity-control">
              <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
                -
              </button>
              <strong>{quantity.toString().padStart(2, '0')}</strong>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <button className="add-cart-btn">Add to Cart</button>

          <div className="vendor-box">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
              alt="Vendor"
            />

            <div>
              <h3>Mindy’s Link Up</h3>
              <p>Verified vendor</p>
            </div>

            <button>Visit Store</button>
          </div>
        </aside>
      </section>

      <section className="product-extra">
        <div className="tab-buttons">
          <button className="active">Description</button>
          <button>Delivery Info</button>
          <button>Reviews (0)</button>
        </div>

        <div className="description-box">
          <h2>Product Description</h2>

          <p>
            Step out in style with this stunning cream crocheted clutch bag,
            designed with a beautiful gold chain strap and elegant finishing.
          </p>

          <p>
            This piece is perfect for weddings, dinner events, church programs,
            evening outings, and other special occasions.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Detail