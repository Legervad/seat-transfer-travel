// Seat.js
import React from "react";

function Seat({ number, isAvailable, onClick }) {
  const seatStyle = {
    width: "30px",
    height: "30px",
    margin: "5px",
    borderRadius: "5px",
    backgroundColor: isAvailable ? "green" : "red",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  return (
    <div style={seatStyle} onClick={() => onClick(number)}>
      {number}
    </div>
  );
}

export default Seat;
