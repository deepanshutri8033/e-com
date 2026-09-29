import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Clock, ShieldCheck, Flame } from 'lucide-react';
import headphonesImg from '../assets/headphones.jpg';

export default function HeroBanner({ onShopNow }) {
  // Flash sale countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-banner">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-tag">
            <Flame size={16} fill="currentColor" />
            <span>FLASH DEAL • UP TO 40% OFF</span>
          </div>
          <h1 className="hero-title">
            Next-Gen Tech & <br />
            <span className="gradient-text">Premium Lifestyle</span>
          </h1>
          <p className="hero-subtitle">
            Upgrade your daily aesthetic with precision-crafted noise-canceling audio, Grade-5 titanium wearables, and high-performance gaming gear.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={onShopNow}>
              Shop Tech Deals <ArrowRight size={18} />
            </button>
            
            {/* Flash Sale Countdown Pill */}
            <div className="btn-secondary" style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
              <Clock size={16} color="var(--accent-pink)" />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Ends in:</span>
              <span style={{ fontWeight: 800, fontFamily: 'monospace', color: 'var(--accent-pink)' }}>
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        <div className="hero-image-container" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'absolute',
            inset: '0',
            background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(30px)'
          }} />
          <img 
            src={headphonesImg} 
            alt="Aurora Headphones Showcase" 
            style={{ 
              width: '100%', 
              maxWidth: '380px', 
              borderRadius: '20px', 
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)', 
              transform: 'rotate(-4deg)', 
              position: 'relative',
              zIndex: 1
            }} 
          />
        </div>
      </div>
    </section>
  );
}
