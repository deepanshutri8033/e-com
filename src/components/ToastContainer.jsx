import React from 'react';
import { CheckCircle, Info, Heart, ShoppingBag } from 'lucide-react';

export default function ToastContainer({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast-item">
          <div className="toast-icon">
            {toast.type === 'wishlist' ? (
              <Heart size={20} color="var(--accent-pink)" fill="var(--accent-pink)" />
            ) : toast.type === 'cart' ? (
              <ShoppingBag size={20} color="var(--accent-primary)" />
            ) : (
              <CheckCircle size={20} color="var(--accent-success)" />
            )}
          </div>
          <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
