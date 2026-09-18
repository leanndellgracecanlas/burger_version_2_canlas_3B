import React from 'react';
import './CanlasBurger.css';

// Images stored in the root `public/` directory (e.g., public/burger1.webp)
const burgerData = [
  {
    id: 1,
    title: "Ultimate Beef burger",
    description: "Juicy beef patty, cheddar cheese, lettuce, tomatoes, pickles, onions, and our special sauce",
    price: "$99.15",
    rating: "★★★★★",
    image: "/burger1.webp"
  },
  {
    id: 2,
    title: "Crispy Chicken",
    description: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    price: "$99.32",
    rating: "★★★★★",
    image: "/burger2.jpg"
  },
  {
    id: 3,
    title: "Vegan Burger",
    description: "Plant-based patty, lettuce, tomatoes, pickles, vegan mayo",
    price: "$69.15",
    rating: "★★★★☆",
    image: "/burger3.jpg"
  },
  {
    id: 4,
    title: "Rice Burger",
    description: "Cooked rice, vegetables, and a savory sauce",
    price: "$69.25",
    rating: "★★★★☆",
    image: "/burger4.jpg"
  }
];

const CanlasBurger = () => {
  return (
    <div className="burger-page-container">
    

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">🍔</span>
          <span className="logo-text">TASTY BURGER</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#menu">OUR MENU</a></li>
          <li><a href="#shop">SHOP</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li>
            <div className="cart-wrapper">
              {/* Shopping Bag Icon SVG */}
              <svg 
                className="cart-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span className="cart-badge">2</span>
            </div>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>OUR CRAZY BURGERS</h1>
        <p>
          Get ready for a wild ride of flavors! Our crazy burgers are loaded with juicy patties, bold toppings, and irresistible sauces, all stacked on a perfectly toasted bun. Whether you like it cheesy, or extra meaty, we've got a burger that will blow your mind!
        </p>
      </section>

      {/* Burger Cards Grid */}
      <section className="burger-grid">
        {burgerData.map((burger) => (
          <div key={burger.id} className="burger-card">
            <img src={burger.image} alt={burger.title} className="card-image" />
            <div className="card-body">
              <div className="card-header">
                <span className="stars">{burger.rating}</span>
                <button className="wishlist-btn" aria-label="Add to wishlist">♥</button>
              </div>
              <h3 className="card-title">{burger.title}</h3>
              <p className="card-description">{burger.description}</p>
              <span className="price-badge">{burger.price}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CanlasBurger;