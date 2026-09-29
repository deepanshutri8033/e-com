import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import FeatureBar from './components/FeatureBar';
import FilterSidebar from './components/FilterSidebar';
import ProductCard from './components/ProductCard';
import QuickViewModal from './components/QuickViewModal';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import CheckoutModal from './components/CheckoutModal';
import ToastContainer from './components/ToastContainer';
import Footer from './components/Footer';

import { PRODUCTS } from './data/products';
import { SlidersHorizontal, Frown } from 'lucide-react';
import './App.css';

function App() {
  // Theme state
  const [theme, setTheme] = useState('dark');

  // Filter & Search states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [priceRange, setPriceRange] = useState(500);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  // Cart & Wishlist state
  const [cart, setCart] = useState([
    { ...PRODUCTS[0], quantity: 1 } // Pre-load 1 item so user can immediately see cart badge!
  ]);
  const [wishlist, setWishlist] = useState([PRODUCTS[1]]);

  // Modal & Drawer visibility
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutTotal, setCheckoutTotal] = useState(0);
  const [appliedPromo, setAppliedPromo] = useState('');

  // Toast Notifications
  const [toasts, setToasts] = useState([]);

  // Max price for filter slider
  const maxProductPrice = useMemo(() => {
    return Math.ceil(Math.max(...PRODUCTS.map(p => p.price)));
  }, []);

  useEffect(() => {
    setPriceRange(maxProductPrice);
  }, [maxProductPrice]);

  // Toggle dark/light theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Add Toast alert
  const showToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  // Cart Actions
  const handleAddToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    showToast(`Added ${product.name} to cart`, 'cart');
  };

  const handleUpdateQty = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity: newQty } : item));
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
    showToast('Removed item from cart', 'info');
  };

  // Wishlist Actions
  const handleToggleWishlist = (product) => {
    const exists = wishlist.some(item => item.id === product.id);
    if (exists) {
      setWishlist(prev => prev.filter(item => item.id !== product.id));
      showToast(`Removed ${product.name} from wishlist`, 'info');
    } else {
      setWishlist(prev => [...prev, product]);
      showToast(`Saved ${product.name} to wishlist`, 'wishlist');
    }
  };

  const handleMoveToCart = (product) => {
    handleAddToCart(product);
    setWishlist(prev => prev.filter(item => item.id !== product.id));
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category match
      if (selectedCategory !== 'All Products' && product.category !== selectedCategory) {
        return false;
      }
      // Search match
      if (searchTerm) {
        const query = searchTerm.toLowerCase();
        const nameMatch = product.name.toLowerCase().includes(query);
        const descMatch = product.description.toLowerCase().includes(query);
        const catMatch = product.category.toLowerCase().includes(query);
        if (!nameMatch && !descMatch && !catMatch) return false;
      }
      // Price range
      if (product.price > priceRange) return false;
      // Rating filter
      if (minRating > 0 && product.rating < minRating) return false;
      // Stock filter
      if (inStockOnly && !product.inStock) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return b.id - a.id;
      return 0; // featured default
    });
  }, [searchTerm, selectedCategory, priceRange, minRating, inStockOnly, sortBy]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All Products');
    setPriceRange(maxProductPrice);
    setMinRating(0);
    setInStockOnly(false);
    setSortBy('featured');
  };

  const cartCount = cart.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="app-container">
      {/* Header & Navbar */}
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="main-content">
        {/* Featured Hero Banner */}
        <HeroBanner onShopNow={() => {
          const el = document.getElementById('catalog-grid');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* Store Trust Feature Badges */}
        <FeatureBar />

        {/* Main Catalog Section */}
        <div className="catalog-section" id="catalog-grid">
          {/* Filter Sidebar */}
          <FilterSidebar
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            maxPrice={maxProductPrice}
            minRating={minRating}
            setMinRating={setMinRating}
            inStockOnly={inStockOnly}
            setInStockOnly={setInStockOnly}
            onResetFilters={handleResetFilters}
          />

          {/* Catalog Products Area */}
          <div>
            {/* Catalog Toolbar */}
            <div className="catalog-toolbar">
              <div className="results-count">
                Showing <span>{filteredProducts.length}</span> products
                {selectedCategory !== 'All Products' && ` in ${selectedCategory}`}
              </div>

              <div className="sort-container">
                <span className="sort-label">Sort by:</span>
                <select
                  className="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured Deals</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="newest">New Arrivals</option>
                </select>
              </div>
            </div>

            {/* Product Cards Grid */}
            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 20px', backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                <Frown size={48} strokeWidth={1.5} color="var(--text-muted)" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>No matching products found</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>Try adjusting your search terms or filter settings.</p>
                <button className="btn-primary" onClick={handleResetFilters}>
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isWishlisted={wishlist.some(w => w.id === product.id)}
                    isInCart={cart.some(c => c.id === product.id)}
                    onToggleWishlist={handleToggleWishlist}
                    onAddToCart={handleAddToCart}
                    onQuickView={setQuickViewProduct}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={quickViewProduct ? wishlist.some(w => w.id === quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveFromCart}
        appliedPromo={appliedPromo}
        setAppliedPromo={setAppliedPromo}
        onProceedToCheckout={(total) => {
          setCheckoutTotal(total);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlist}
        onRemoveFromWishlist={(id) => setWishlist(prev => prev.filter(item => item.id !== id))}
        onMoveToCart={handleMoveToCart}
      />

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        totalAmount={checkoutTotal}
        cartItems={cart}
        onClearCart={() => setCart([])}
      />

      {/* Toast Floating Notifications */}
      <ToastContainer toasts={toasts} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
