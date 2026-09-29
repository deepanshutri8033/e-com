import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveFromWishlist,
  onMoveToCart
}) {
  if (!isOpen) return null;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div className="drawer-title">
            <Heart size={22} className="gradient-text" fill="currentColor" />
            <span>Saved Wishlist ({wishlistItems.length})</span>
          </div>
          <button className="close-drawer-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="drawer-content">
          {wishlistItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
              <Heart size={54} strokeWidth={1} style={{ marginBottom: '16px', opacity: 0.5 }} />
              <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-main)' }}>Your wishlist is empty</p>
              <p style={{ fontSize: '0.88rem', marginTop: '6px' }}>Save items by clicking the heart icon on any product!</p>
            </div>
          ) : (
            wishlistItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{item.name}</h4>
                  <span className="cart-item-price">${item.price.toFixed(2)}</span>
                  
                  <button
                    className="add-cart-btn"
                    style={{ marginTop: '8px', padding: '4px 12px', fontSize: '0.8rem', width: 'fit-content' }}
                    onClick={() => {
                      onMoveToCart(item);
                    }}
                  >
                    <ShoppingBag size={14} /> Move to Cart
                  </button>
                </div>

                <button
                  className="remove-item-btn"
                  onClick={() => onRemoveFromWishlist(item.id)}
                  title="Remove from Wishlist"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
