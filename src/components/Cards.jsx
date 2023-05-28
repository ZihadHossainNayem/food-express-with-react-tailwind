import React from "react";
import { Card } from "./Card.jsx";

export const Cards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-4 gap-5 ">
      <Card
        name="Reva Kitchen"
        rating="Rating: 4.5 / 5 (3000+)"
        image="https://images.pexels.com/photos/7426867/pexels-photo-7426867.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <Card
        name="Waffle Up"
        rating="Rating: 5 / 5 (200+)"
        image="https://images.pexels.com/photos/5591660/pexels-photo-5591660.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <Card
        name="Sultan's Dine"
        rating="Rating: 3.9 / 5 (5000+)"
        image="https://images.pexels.com/photos/7353379/pexels-photo-7353379.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <Card
        name="Shawarma Damasco"
        rating="Rating: 4 / 5 (5000+)"
        image="https://images.pexels.com/photos/5602502/pexels-photo-5602502.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
    </div>
  );
};
