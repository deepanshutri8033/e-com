import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Headset } from 'lucide-react';

export default function FeatureBar() {
  const features = [
    {
      icon: <Truck size={22} />,
      title: 'Free Express Shipping',
      desc: 'On all orders over $50'
    },
    {
      icon: <ShieldCheck size={22} />,
      title: '2-Year Official Warranty',
      desc: 'Full coverage guaranteed'
    },
    {
      icon: <RefreshCw size={22} />,
      title: '30-Day Free Returns',
      desc: 'Hassle-free replacement'
    },
    {
      icon: <Headset size={22} />,
      title: '24/7 VIP Support',
      desc: 'Instant human assistance'
    }
  ];

  return (
    <div className="features-bar">
      {features.map((item, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-icon">{item.icon}</div>
          <div className="feature-text">
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
