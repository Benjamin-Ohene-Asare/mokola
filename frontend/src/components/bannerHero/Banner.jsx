import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className="hero-section">

      <div className="launch-badge">
        <i className="ti ti-bolt" />
        No code needed — launch today
      </div>

      <div className="hero-text">
        <h1 className="hero-title">
          Create your <em>online shop</em><br />in minutes
        </h1>
        <p className="hero-subtitle">
          Your one-stop platform to build, launch, and grow a beautiful store — no technical skills required.
        </p>
      </div>

      <div className="button-row">
        <button className="primary-button">
          <i className="ti ti-rocket" /> Get started free
        </button>
        <button className="outline-button">
          <i className="ti ti-eye" /> See a demo
        </button>
      </div>

      <div className="trust-row">
        <div className="trust-item"><i className="ti ti-layout-dashboard" /> Drag & drop builder</div>
        <div className="trust-item"><i className="ti ti-credit-card" /> Built-in payments</div>
        <div className="trust-item"><i className="ti ti-truck" /> Free shipping tools</div>
        <div className="trust-item"><i className="ti ti-shield-check" /> Secure by default</div>
      </div>

      <div className="stats-row">
        <div className="stat-item">
          <span className="stat-number">50K+</span>
          <span className="stat-label"><i className="ti ti-store" /> Active stores</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">$2M+</span>
          <span className="stat-label"><i className="ti ti-currency-dollar" /> Revenue generated</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">4.9 <i className="ti ti-star" /></span>
          <span className="stat-label"><i className="ti ti-users" /> Avg. rating</span>
        </div>
      </div>

    </div>
  )
}

export default Banner