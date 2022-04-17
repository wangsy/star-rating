import React, { useState } from "react";
import { FaStar } from "react-icons/fa"

const createArray = length => [...Array(length)];

const Star = ({ selected = false, onSelect = f => f}) => (
  <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />
);
export default function StarRating ({style = {}, totalStars = 5, ...props}) {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <div style={{ padding: "5px", ...style }} {...props}>
      {createArray(totalStars).map((n, i) => (
        <Star 
          key={i} 
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i+1)} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}