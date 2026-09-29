import React from 'react';
import { SlidersHorizontal, RotateCcw, Star, CheckSquare, Square } from 'lucide-react';

export default function FilterSidebar({
  priceRange,
  setPriceRange,
  maxPrice,
  minRating,
  setMinRating,
  inStockOnly,
  setInStockOnly,
  onResetFilters
}) {
  return (
    <aside className="filter-sidebar">
      <div className="filter-header">
        <h3 className="filter-title">
          <SlidersHorizontal size={18} className="gradient-text" /> Filters
        </h3>
        <button className="reset-filter-btn" onClick={onResetFilters}>
          <RotateCcw size={14} style={{ display: 'inline', marginRight: '4px' }} />
          Reset
        </button>
      </div>

      {/* Price Range Filter */}
      <div className="filter-group">
        <h4 className="filter-group-title">Max Price</h4>
        <div className="price-range-display">
          <span>$0</span>
          <span>${priceRange}</span>
        </div>
        <input
          type="range"
          min="20"
          max={maxPrice}
          step="10"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="range-slider"
        />
      </div>

      {/* Minimum Rating Filter */}
      <div className="filter-group">
        <h4 className="filter-group-title">Minimum Rating</h4>
        <div className="rating-filter-options">
          {[4.8, 4.5, 4.0, 0].map((stars) => (
            <button
              key={stars}
              className={`rating-btn ${minRating === stars ? 'active' : ''}`}
              onClick={() => setMinRating(stars)}
            >
              <div className="stars-row">
                <Star size={15} fill="currentColor" />
                <span>{stars > 0 ? `${stars}+ Stars` : 'All Ratings'}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Stock Availability Toggle */}
      <div className="filter-group">
        <button
          className="rating-btn"
          onClick={() => setInStockOnly(!inStockOnly)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          {inStockOnly ? <CheckSquare size={18} color="var(--accent-primary)" /> : <Square size={18} />}
          <span>In Stock Only</span>
        </button>
      </div>
    </aside>
  );
}
