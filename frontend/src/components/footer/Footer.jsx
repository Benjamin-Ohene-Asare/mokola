import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Mokola</h2>
          <p>
            Your trusted online marketplace for fashion, electronics,
            personal care, and everyday essentials.
          </p>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
          <a href="#">Blog</a>
        </div>

        <div className="footer-links">
          <h3>Legal</h3>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Refund & Return Policy</a>
          <a href="#">Vendor Terms & Conditions</a>
        </div>

        <div className="footer-links">
          <h3>Customer Support</h3>
          <a href="#">My Account</a>
          <a href="#">Track Order</a>
          <a href="#">Size Guide</a>
          <a href="tel:+233205462760">Call/Whatsapp: +233205462760</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Since 2026 Mokola. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer