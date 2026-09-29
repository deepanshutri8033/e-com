import React, { useState } from 'react';
import { Zap, Send, Shield, CreditCard, Heart } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Info */}
        <div className="footer-col">
          <div className="brand-logo" style={{ marginBottom: '16px' }}>
            <div className="brand-icon">
              <Zap size={22} fill="currentColor" />
            </div>
            <span>RAJ<span className="gradient-text">.STORE</span></span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '320px', marginBottom: '20px' }}>
            The premiere marketplace for futuristic hardware, premium acoustics, and high-performance lifestyle tech.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {['Twitter', 'Instagram', 'Discord', 'GitHub'].map((social) => (
              <span
                key={social}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer'
                }}
              >
                {social}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Shop Categories</h4>
          <ul className="footer-links">
            <li><a href="#">Wireless Audio</a></li>
            <li><a href="#">Wearable Tech</a></li>
            <li><a href="#">Mechanical Keyboards</a></li>
            <li><a href="#">Curved Monitors</a></li>
            <li><a href="#">Urban Fashion</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-col">
          <h4>Customer Care</h4>
          <ul className="footer-links">
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Warranty Coverage</a></li>
            <li><a href="#">Help & FAQs</a></li>
            <li><a href="#">Contact Support</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-col">
          <h4>Join RAJ VIP</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '12px' }}>
            Subscribe to get secret drop notifications and 15% off your first purchase.
          </p>

          {subscribed ? (
            <div style={{ padding: '10px 14px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-success)', fontSize: '0.88rem', fontWeight: 600 }}>
              ✓ You are subscribed! Check your inbox.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                required
                className="newsletter-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn-primary" style={{ padding: '10px 16px' }}>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          © {new Date().getFullYear()} RAJ STORE Inc. All rights reserved. Built with React & Vite.
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Security</span>
        </div>
      </div>
    </footer>
  );
}
