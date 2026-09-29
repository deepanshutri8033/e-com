import React, { useState } from 'react';
import { X, CheckCircle2, CreditCard, Truck, ShieldCheck, Lock, Package, ArrowRight } from 'lucide-react';

export default function CheckoutModal({
  isOpen,
  onClose,
  totalAmount,
  cartItems,
  onClearCart
}) {
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirmation
  const [formData, setFormData] = useState({
    fullName: 'Alex Vance',
    email: 'alex.vance@example.com',
    address: '742 Evergreen Terrace',
    city: 'San Francisco',
    zip: '94107',
    paymentMethod: 'card',
    cardNumber: '4532 •••• •••• 8892',
    expDate: '12/28',
    cvv: '921'
  });

  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleCompleteOrder = (e) => {
    e.preventDefault();
    const newOrderId = 'NEX-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(newOrderId);
    setStep(3);
    onClearCart();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '680px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-icon" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="checkout-modal-body">
          {/* Multi-step progress bar */}
          <div className="checkout-steps">
            <div className={`step-indicator ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
              <div className="step-number">{step > 1 ? '✓' : '1'}</div>
              <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Shipping</span>
            </div>
            
            <div style={{ flex: 1, height: '2px', backgroundColor: step >= 2 ? 'var(--accent-primary)' : 'var(--border-color)', margin: '0 8px' }} />

            <div className={`step-indicator ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
              <div className="step-number">{step > 2 ? '✓' : '2'}</div>
              <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Payment</span>
            </div>

            <div style={{ flex: 1, height: '2px', backgroundColor: step >= 3 ? 'var(--accent-primary)' : 'var(--border-color)', margin: '0 8px' }} />

            <div className={`step-indicator ${step === 3 ? 'active completed' : ''}`}>
              <div className="step-number">3</div>
              <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Confirmed</span>
            </div>
          </div>

          {/* STEP 1: Shipping Info */}
          {step === 1 && (
            <form onSubmit={handleProceedToPayment}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '20px' }}>Shipping Address</h3>
              
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  className="form-input"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Street Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  className="form-input"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    className="form-input"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">ZIP / Postal Code</label>
                  <input
                    type="text"
                    name="zip"
                    required
                    className="form-input"
                    value={formData.zip}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '20px', justifyContent: 'center' }}>
                Continue to Payment <ArrowRight size={18} />
              </button>
            </form>
          )}

          {/* STEP 2: Payment Details */}
          {step === 2 && (
            <form onSubmit={handleCompleteOrder}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>Payment Method</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                <button
                  type="button"
                  className={`rating-btn ${formData.paymentMethod === 'card' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                  style={{ justifyContent: 'center', gap: '8px', padding: '12px' }}
                >
                  <CreditCard size={18} /> Credit Card
                </button>
                <button
                  type="button"
                  className={`rating-btn ${formData.paymentMethod === 'paypal' ? 'active' : ''}`}
                  onClick={() => setFormData({ ...formData, paymentMethod: 'paypal' })}
                  style={{ justifyContent: 'center', gap: '8px', padding: '12px' }}
                >
                  <Lock size={18} /> Express PayPal
                </button>
              </div>

              <div className="form-group">
                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  required
                  className="form-input"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Expiry Date</label>
                  <input
                    type="text"
                    name="expDate"
                    required
                    className="form-input"
                    value={formData.expDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Security Code (CVV)</label>
                  <input
                    type="password"
                    name="cvv"
                    required
                    maxLength={4}
                    className="form-input"
                    value={formData.cvv}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-surface)', padding: '16px', borderRadius: 'var(--radius-md)', margin: '16px 0', border: '1px solid var(--border-color)' }}>
                <div className="summary-row total" style={{ border: 'none', marginTop: 0, paddingTop: 0 }}>
                  <span>Order Total:</span>
                  <span className="gradient-text">${totalAmount ? totalAmount.toFixed(2) : '0.00'}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button type="button" className="btn-secondary" onClick={() => setStep(1)}>
                  Back
                </button>
                <button type="submit" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                  Pay & Complete Order (${totalAmount ? totalAmount.toFixed(2) : '0.00'})
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Order Confirmation */}
          {step === 3 && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-success)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <CheckCircle2 size={38} />
              </div>
              
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Order Confirmed!</h2>
              <p style={{ color: 'var(--text-secondary)', marginTop: '6px' }}>
                Thank you, <strong>{formData.fullName}</strong>. Your order confirmation has been emailed to <strong>{formData.email}</strong>.
              </p>

              <div style={{ margin: '24px 0', padding: '20px', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Order Number:</span>
                  <strong style={{ fontFamily: 'monospace', color: 'var(--accent-primary)' }}>{orderId}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Estimated Delivery:</span>
                  <strong>3-5 Business Days (Express)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Shipping To:</span>
                  <strong>{formData.address}, {formData.city}</strong>
                </div>
              </div>

              {/* Order Status Progress bar */}
              <div style={{ marginBottom: '28px', textAlign: 'left' }}>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>Order Tracking Status</h4>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{ flex: 1, height: '8px', backgroundColor: 'var(--accent-success)', borderRadius: '4px' }} />
                  <div style={{ flex: 1, height: '8px', backgroundColor: 'var(--accent-primary)', borderRadius: '4px' }} />
                  <div style={{ flex: 1, height: '8px', backgroundColor: 'var(--bg-surface)', borderRadius: '4px' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                  <span style={{ color: 'var(--accent-success)', fontWeight: 600 }}>Payment Received</span>
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Processing at Warehouse</span>
                  <span>Shipped</span>
                </div>
              </div>

              <button className="btn-primary" onClick={onClose} style={{ margin: '0 auto' }}>
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
