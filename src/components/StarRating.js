import React, { useState } from "react";
import { FaStar } from "react-icons/fa"

const createArray = length => [...Array(length)];

const Star = ({ selected = false, onSelect = f => f}) => (
  <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />
);

export default function StarRating ({selectedStars = 0, style = {}, totalStars = 5, onRate= f => f}) {
  return (
    <div style={{ padding: "5px", ...style }}>
      {createArray(totalStars).map((n, i) => (
        <Star 
          key={i} 
          selected={selectedStars > i}
          onSelect={() => onRate(i+1)} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}