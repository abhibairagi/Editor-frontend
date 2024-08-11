// src/RealTimeEditor.js
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./RealTimeEditor.css";

const socket = io("https://editor-server-3y7k.onrender.com");

const RealTimeEditor = () => {
  const [text, setText] = useState("");
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  const [userName, setUserName] = useState("");
  const userDetails = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    socket.on("type", (data) => {
      setText(data.text);
    });

    socket.on("drag", (data) => {
      setDragPos(data);
      setUserName(data.userDetails.full_name);
    });

    return () => {
      socket.off("type");
      socket.off("drag");
    };
  }, []);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    socket.emit("type", { text: newText });
  };

  const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setDragPos({ x, y });
    socket.emit("drag", { x, y, userDetails });
  };

  return (
    <div className="editor-container" onMouseMove={handleMouseMove}>
      <textarea
        placeholder="Please Write Your text here..."
        value={text}
        onChange={handleTextChange}
        className="editor"
      />
      <div className="dragging-box" style={{ left: dragPos.x, top: dragPos.y }}>
        {userName}
      </div>
    </div>
  );
};

export default RealTimeEditor;
