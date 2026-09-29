import React from 'react';
import { Star, Heart, Eye, ShoppingCart, Check } from 'lucide-react';

export default function ProductCard({
  product,
  isWishlisted,
  isInCart,
  onToggleWishlist,
  onAddToCart,
  onQuickView
}) {
  return (
    <div className="product-card">
      {/* Badge */}
      {product.badge && (
        <span className="card-badge">{product.badge}</span>
      )}

      {/* Floating Action Buttons */}
      <div className="card-actions-overlay">
        <button
          className={`action-circle-btn ${isWishlisted ? 'active-wishlist' : ''}`}
          onClick={() => onToggleWishlist(product)}
          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>
        <button
          className="action-circle-btn"
          onClick={() => onQuickView(product)}
          title="Quick View Details"
        >
          <Eye size={18} />
        </button>
      </div>

      {/* Image Container */}
      <div className="card-image-wrapper" onClick={() => onQuickView(product)} style={{ cursor: 'pointer' }}>
        <img
          src={product.image}
          alt={product.name}
          className="card-image"
          loading="lazy"
        />
      </div>

      {/* Card Content Body */}
      <div className="card-body">
        <span className="card-category">{product.category}</span>
        <h3 className="card-title" onClick={() => onQuickView(product)} style={{ cursor: 'pointer' }}>
          {product.name}
        </h3>

        {/* Rating Row */}
        <div className="card-rating">
          <div className="stars-row">
            <Star size={14} fill="currentColor" />
          </div>
          <span style={{ fontWeight: 700 }}>{product.rating}</span>
          <span className="rating-count">({product.reviewCount})</span>
        </div>

        {/* Pricing & Add to Cart Footer */}
        <div className="card-footer">
          <div className="price-box">
            <span className="current-price">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <button
            className={`add-cart-btn ${isInCart ? 'in-cart' : ''}`}
            onClick={() => onAddToCart(product)}
          >
            {isInCart ? (
              <>
                <Check size={16} /> Added
              </>
            ) : (
              <>
                <ShoppingCart size={16} /> Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
