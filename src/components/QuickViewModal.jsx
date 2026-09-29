import React, { useState } from 'react';
import { X, Star, ShoppingCart, Heart, Shield, Truck, Check } from 'lucide-react';

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist
}) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-icon" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="quickview-grid">
          {/* Product Image Box */}
          <div className="quickview-img-box">
            <img src={product.image} alt={product.name} className="quickview-img" />
          </div>

          {/* Product Info & Options */}
          <div className="quickview-info">
            <span className="card-category">{product.category}</span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '10px' }}>{product.name}</h2>

            <div className="card-rating" style={{ marginBottom: '16px' }}>
              <div className="stars-row">
                <Star size={16} fill="currentColor" />
              </div>
              <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{product.rating}</span>
              <span className="rating-count">({product.reviewCount} customer reviews)</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '18px' }}>
              <span className="current-price" style={{ fontSize: '1.8rem' }}>
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="original-price" style={{ fontSize: '1.05rem' }}>
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.originalPrice && (
                <span className="card-badge" style={{ position: 'static' }}>
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              )}
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '20px' }}>
              {product.description}
            </p>

            {/* Bullet Highlights */}
            {product.features && (
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                {product.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem' }}>
                    <Check size={16} color="var(--accent-success)" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Technical Specs Table */}
            {product.specs && (
              <div className="quickview-specs-list">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="spec-item">
                    <span className="spec-key">{key}</span>
                    <span className="spec-val">{val}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Quantity Picker & Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: 'auto', paddingTop: '16px' }}>
              <div className="qty-controls" style={{ padding: '6px 12px' }}>
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="qty-count" style={{ fontSize: '1rem' }}>{quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              <button
                className="btn-primary"
                style={{ flex: 1, padding: '12px 20px', fontSize: '0.95rem' }}
                onClick={() => {
                  onAddToCart(product, quantity);
                  onClose();
                }}
              >
                <ShoppingCart size={18} /> Add to Cart
              </button>

              <button
                className={`nav-icon-btn ${isWishlisted ? 'active-wishlist' : ''}`}
                onClick={() => onToggleWishlist(product)}
                style={{ width: '46px', height: '46px' }}
                title="Wishlist"
              >
                <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
