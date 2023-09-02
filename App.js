import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data.js";

export default function App() {
  const attractions = data.map(attraction => (
    <Card 
        key={attraction.id} 
        attraction={attraction} 
    />
  ))
  return (
    <div>
      <Header />
      <div className ="container">{attractions}</div>
      <Footer />
    </div>
  );
}