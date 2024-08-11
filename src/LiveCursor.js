// src/LiveCursor.js
import React, { useState } from "react";
import "./LiveCursor.css"; // For styling

const LiveCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [name, setName] = useState("Abhishek");

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div className="live-cursor-container" onMouseMove={handleMouseMove}>
      <div
        className="cursor-info"
        style={{ left: position.x + 10, top: position.y + 10 }}
      >
        {name}
      </div>
      <div
        className="cursor"
        style={{ left: position.x - 10, top: position.y - 10 }}
      ></div>
    </div>
  );
};

export default LiveCursor;
