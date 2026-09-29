import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, ArrowRight, Tag, Check, Sparkles } from 'lucide-react';
import { PROMO_CODES } from '../data/products';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onProceedToCheckout,
  appliedPromo,
  setAppliedPromo
}) {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  // Calculate Promo discount
  let discountAmount = 0;
  if (appliedPromo && PROMO_CODES[appliedPromo]) {
    const rate = PROMO_CODES[appliedPromo];
    if (typeof rate === 'number') {
      discountAmount = subtotal * rate;
    }
  }

  // Shipping calculation (Free over $50 or FREESHIP coupon)
  const isFreeShipping = subtotal >= 50 || appliedPromo === 'FREESHIP';
  const shippingFee = isFreeShipping || subtotal === 0 ? 0 : 5.99;
  
  const tax = (subtotal - discountAmount) * 0.05;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee + tax);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();
    if (PROMO_CODES[code]) {
      setAppliedPromo(code);
      setPromoError('');
    } else {
      setPromoError('Invalid coupon code. Try WELCOME10 or NEXUS20');
    }
  };

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-title">
            <ShoppingBag size={22} className="gradient-text" />
            <span>Shopping Cart ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})</span>
          </div>
          <button className="close-drawer-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div style={{ padding: '12px 24px', backgroundColor: 'rgba(59, 130, 246, 0.08)', borderBottom: '1px solid var(--border-color)' }}>
          {subtotal >= 50 ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-success)', fontSize: '0.85rem', fontWeight: 600 }}>
              <Check size={16} /> You unlocked FREE Express Shipping!
            </div>
          ) : (
            <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              Add <strong style={{ color: 'var(--accent-primary)' }}>${(50 - subtotal).toFixed(2)}</strong> more for <strong>FREE Shipping</strong>
            </div>
          )}
        </div>

        {/* Drawer Cart Items */}
        <div className="drawer-content">
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
              <ShoppingBag size={54} strokeWidth={1} style={{ marginBottom: '16px', opacity: 0.5 }} />
              <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-main)' }}>Your cart is empty</p>
              <p style={{ fontSize: '0.88rem', marginTop: '6px' }}>Explore our tech catalog and add your favorite items!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{item.name}</h4>
                  <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                  
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.quantity - 1)}>-</button>
                    <span className="qty-count">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>

                <button className="remove-item-btn" onClick={() => onRemoveItem(item.id)} title="Remove item">
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer Summary */}
        {cartItems.length > 0 && (
          <div className="drawer-footer">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="promo-input-group">
              <input
                type="text"
                className="promo-input"
                placeholder="Promo Code (e.g. WELCOME10)"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
              />
              <button type="submit" className="promo-apply-btn">Apply</button>
            </form>

            {appliedPromo && (
              <div style={{ fontSize: '0.82rem', color: 'var(--accent-success)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Tag size={14} /> Coupon {appliedPromo} applied successfully!
              </div>
            )}
            {promoError && (
              <div style={{ fontSize: '0.82rem', color: 'var(--accent-danger)', marginBottom: '12px' }}>
                {promoError}
              </div>
            )}

            {/* Price Calculations */}
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {discountAmount > 0 && (
              <div className="summary-row" style={{ color: 'var(--accent-success)' }}>
                <span>Discount</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}

            <div className="summary-row">
              <span>Shipping</span>
              <span>{shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}</span>
            </div>

            <div className="summary-row">
              <span>Estimated Tax (5%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="summary-row total">
              <span>Total Amount</span>
              <span className="gradient-text">${grandTotal.toFixed(2)}</span>
            </div>

            <button
              className="checkout-btn"
              onClick={() => {
                onClose();
                onProceedToCheckout(grandTotal);
              }}
            >
              Checkout Now <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
