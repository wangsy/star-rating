import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ColorData from "./data/color-data.json";
import ColorList from "./components/ColorList";

function App() {
  const [colors, setColors] = useState(ColorData);
  return <ColorList 
    colors={colors}
    onRemoveColor={ id => {
      const newColors = colors.filter(color => color.id !== id);
      setColors(newColors);
    }}
    onRateColor={(id, rating) => {
      const newColors = colors.map( color => 
        color.id === id ? { ...color, rating} : color
      );
      setColors(newColors);
    }}
  />;
}

export default App;
