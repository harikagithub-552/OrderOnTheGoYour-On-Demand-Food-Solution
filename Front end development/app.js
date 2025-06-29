import React from "react";
import "./App.css";

const foodItems = [
  { id: 1, name: "Margherita Pizza", price: "₹299", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Veg Biryani", price: "₹199", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Paneer Burger", price: "₹149", image: "https://via.placeholder.com/150" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🍔 Foodie Express</h1>
        <p>Delicious food delivered to your doorstep</p>
      </header>

      <div className="food-list">
        {foodItems.map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
