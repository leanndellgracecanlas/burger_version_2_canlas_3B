import React, { useState, useEffect } from 'react';
import './CanlasBurger.css';

// Deals Slider Data (Top Hero Banner)
const heroSlides = [
  {
    id: 1,
    title: "Tasty Burger Deals",
    subtitle: "Order Your Favorite Crazy Burger & Get 20% Off!",
    badge: "SPECIAL OFFER",
    bgGradient: "linear-gradient(135deg, #1e1e1e 0%, #3a1c1a 100%)",
    image: "/burger1.webp"
  },
  {
    id: 2,
    title: "Crispy Chicken Craze",
    subtitle: "Buy 1 Get 1 Free on all Spicy Chicken & Bunless Combos",
    badge: "WEEKEND DEAL",
    bgGradient: "linear-gradient(135deg, #2b1704 0%, #4a2800 100%)",
    image: "/burger_5.jpeg"
  },
  {
    id: 3,
    title: "Gourmet Crazy Creations",
    subtitle: "Try our Charcoal Wagyu Burgers, Luther Donut, Flying Dutchman & More!",
    bgGradient: "linear-gradient(135deg, #0d2818 0%, #164229 100%)",
    image: "/burger_8.jpg"
  }
];

// All 8 Burgers Data (Using exact image filenames from your workspace)
const burgerData = [
  {
    id: 1,
    title: "Ultimate Beef burger",
    description: "Juicy beef patty, cheddar cheese, lettuce, tomatoes, pickles, onions, and special sauce.",
    price: "$99.15",
    numericPrice: 99.15,
    rating: "★★★★★",
    image: "/burger1.webp"
  },
  {
    id: 2,
    title: "Crispy Chicken",
    description: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw.",
    price: "$99.32",
    numericPrice: 99.32,
    rating: "★★★★★",
    image: "/burger2.jpg"
  },
  {
    id: 3,
    title: "Vegan Burger",
    description: "Plant-based patty, lettuce, tomatoes, pickles, vegan mayo.",
    price: "$69.15",
    numericPrice: 69.15,
    rating: "★★★★★",
    image: "/burger3.jpg"
  },
  {
    id: 4,
    title: "Rice Burger",
    description: "Cooked rice, vegetables, and a savory sauce.",
    price: "$69.25",
    numericPrice: 69.25,
    rating: "★★★★★",
    image: "/burger4.jpg"
  },
  {
    id: 5,
    title: "Bunless Spicy Double Chicken",
    description: "Crispy fried chicken cutlet buns stuffed with hash brown and melted cheese.",
    price: "$109.50",
    numericPrice: 109.50,
    rating: "★★★★★",
    image: "/burger_5.jpeg"
  },
  {
    id: 6,
    title: "Luther Glazed Donut Burger",
    description: "Sweet glazed donut bun filled with crispy bacon, melted cheddar cheese, and egg.",
    price: "$89.99",
    numericPrice: 89.99,
    rating: "★★★★★",
    image: "/burger_6.jpg"
  },
  {
    id: 7,
    title: "Flying Dutchman Grilled Onion",
    description: "Caramelized whole onion buns wrapping double smash beef patties and melted cheese.",
    price: "$94.50",
    numericPrice: 94.50,
    rating: "★★★★★",
    image: "/burger_7.jpg"
  },
  {
    id: 8,
    title: "Charcoal Wagyu Steak Burger",
    description: "Black charcoal sesame bun loaded with seared wagyu steak slices and fresh herbs.",
    price: "$119.00",
    numericPrice: 119.00,
    rating: "★★★★★",
    image: "/burger_8.jpg"
  }
];

const CanlasBurger = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedBurger, setSelectedBurger] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([
    { ...burgerData[0], qty: 1 },
    { ...burgerData[1], qty: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Auto-slide top deal banner every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const totalCartCount = cartItems.reduce((total, item) => total + item.qty, 0);
  const subtotal = cartItems.reduce((total, item) => total + item.numericPrice * item.qty, 0);

  const handleOpenModal = (burger) => {
    setSelectedBurger(burger);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === selectedBurger.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].qty += quantity;
        return updated;
      } else {
        return [...prev, { ...selectedBurger, qty: quantity }];
      }
    });
    setSelectedBurger(null);
  };

  const updateCartQty = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  return (
    <div className="burger-page-container">
      {/* Header */}
      

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">🍔</span>
          <span className="logo-text">TASTY BURGER</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#menu" className="active">OUR MENU</a></li>
          <li><a href="#shop">SHOP</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li>
            <div className="cart-wrapper" onClick={() => setIsCartOpen(true)}>
              <svg className="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {totalCartCount > 0 && <span className="cart-badge">{totalCartCount}</span>}
            </div>
          </li>
        </ul>
      </nav>

      {/* Top Image Slider (Prof Requirement) */}
      <section className="hero-slider-container">
        <div className="slider-wrapper">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ background: slide.bgGradient }}
            >
              <div className="slide-content">
                <span className="slide-badge">{slide.badge}</span>
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-subtitle">{slide.subtitle}</p>
                <button className="slide-cta-btn" onClick={() => handleOpenModal(burgerData[0])}>
                  Order Now
                </button>
              </div>
              <div className="slide-image-wrapper">
                <img src={slide.image} alt={slide.title} className="slide-img" />
              </div>
            </div>
          ))}

          <button className="slider-arrow left" onClick={() => setCurrentSlide((c) => (c - 1 + heroSlides.length) % heroSlides.length)}></button>
          <button className="slider-arrow right" onClick={() => setCurrentSlide((c) => (c + 1) % heroSlides.length)}></button>

          <div className="slider-dots">
            {heroSlides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hero Intro Header */}
      <section className="hero-intro">
        <h1>OUR CRAZY BURGERS</h1>
        <p>
          Get ready for a wild ride of flavors! Our crazy burgers are loaded with juicy patties, bold toppings, and irresistible sauces, all stacked on a perfectly toasted bun. Whether you like it cheesy, or extra meaty, we've got a burger that will blow your mind!
        </p>
      </section>

      {/* 8 Burger Grid */}
      <section className="burger-grid">
        {burgerData.map((burger) => (
          <div key={burger.id} className="burger-card" onClick={() => handleOpenModal(burger)}>
            <div className="card-image-container">
              <img src={burger.image} alt={burger.title} className="card-image" />
            </div>
            <div className="card-body">
              <div className="card-header">
                <span className="stars">{burger.rating}</span>
                <button className="wishlist-btn" onClick={(e) => e.stopPropagation()}>♥</button>
              </div>
              <h3 className="card-title">{burger.title}</h3>
              <p className="card-description">{burger.description}</p>
              <div className="card-footer">
                <span className="price-badge">{burger.price}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Interactive Modal (Selected Product Focus with Dimmed Background) */}
      {selectedBurger && (
        <div className="modal-overlay" onClick={() => setSelectedBurger(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedBurger(null)}>&times;</button>
            <img src={selectedBurger.image} alt={selectedBurger.title} className="modal-image" />
            <div className="modal-body">
              <div className="modal-title-row">
                <h3>{selectedBurger.title}</h3>
                <span className="stars">{selectedBurger.rating}</span>
              </div>
              <p className="modal-description">{selectedBurger.description}</p>
              <div className="modal-price">{selectedBurger.price}</div>

              {/* Quantity Selector & Add to Bag */}
              <div className="modal-actions">
                <div className="quantity-selector">
                  <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity((q) => q + 1)}>+</button>
                </div>
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                  Add to Bag (\${(selectedBurger.numericPrice * quantity).toFixed(2)})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shopping Bag Drawer */}
      {isCartOpen && (
        <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-drawer-header">
              <h2>My Shopping Bag ({totalCartCount})</h2>
              <button className="close-drawer-btn" onClick={() => setIsCartOpen(false)}>&times;</button>
            </div>

            <div className="cart-drawer-body">
              {cartItems.length === 0 ? (
                <p className="empty-cart-msg">Your shopping bag is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} className="cart-item-img" />
                    <div className="cart-item-details">
                      <h4>{item.title}</h4>
                      <span className="cart-item-price">{item.price}</span>
                      <div className="cart-qty-controls">
                        <button onClick={() => updateCartQty(item.id, -1)}>-</button>
                        <span>{item.qty}</span>
                        <button onClick={() => updateCartQty(item.id, 1)}>+</button>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {cartItems.length > 0 && (
                <div className="cart-drawer-footer">
                  <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Delivery Fee:</span>
                    <span>$3.50</span>
                  </div>
                  <div className="summary-row total">
                    <span>Grand Total:</span>
                    <span>${(subtotal + 3.50).toFixed(2)}</span>
                  </div>
                  <button className="checkout-btn" onClick={() => alert('Order Placed Successfully!')}>
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CanlasBurger;