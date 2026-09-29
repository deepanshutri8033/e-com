import React from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Sun, 
  Moon, 
  X, 
  Zap,
  User,
  SlidersHorizontal
} from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function Navbar({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  theme,
  toggleTheme,
  showMobileFilter,
  setShowMobileFilter
}) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo" onClick={() => setSelectedCategory('All Products')}>
          <div className="brand-icon">
            <Zap size={22} fill="currentColor" />
          </div>
          <span>NEXUS<span className="gradient-text">.STORE</span></span>
        </a>

        {/* Live Search Input */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search wireless headphones, smartwatches, sneakers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="search-clear-btn"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Navigation Action Buttons */}
        <div className="navbar-actions">
          {/* Mobile filter toggle */}
          <button
            className="nav-icon-btn mobile-only"
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            title="Filter Products"
          >
            <SlidersHorizontal size={20} />
          </button>

          {/* Theme Toggle */}
          <button
            className="nav-icon-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Wishlist Button */}
          <button 
            className="nav-icon-btn" 
            onClick={onOpenWishlist}
            title="View Wishlist"
          >
            <Heart size={20} />
            {wishlistCount > 0 && <span className="nav-badge">{wishlistCount}</span>}
          </button>

          {/* Shopping Cart Button */}
          <button 
            className="nav-icon-btn" 
            onClick={onOpenCart}
            title="View Cart"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
          </button>

          {/* User Profile */}
          <button className="nav-icon-btn" title="Account Settings">
            <User size={20} />
          </button>
        </div>
      </div>

      {/* Category Pills Navigation */}
      <nav className="category-nav">
        <div className="category-container">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`category-pill ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(category);
                setSearchTerm('');
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
