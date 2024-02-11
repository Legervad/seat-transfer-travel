// BusCompany.js
import React, { useState } from "react";
import Seat from "./Seat"; // Import the Seat component
import Modal from "./Modal";
// import { fetchAvailableSeats } from "./Api";

function BusCompany({ companyName, availableSeats }) {
  const totalRows = 2; // Total number of rows
  const totalColumns = 2; // Total number of columns
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [seatsData, setSeatsData] = useState(availableSeats);

  const handleSeatClick = (seatNumber) => {
    console.log(`CLICKED SEAT ${seatNumber}`);
    setSelectedSeat(seatNumber);
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    // Call API to buy the seat
    console.log(`CONFIRMED ${selectedSeat}`);
    setSeatsData(seatsData.filter((seat) => seat !== selectedSeat));
    setIsModalOpen(false);
    // try {
    //   // Assuming your API function returns the updated seat data
    //   const updatedData = await fetchAvailableSeats(seatNumber);
    //   setSeatsData(updatedData); // Update state with new data
    // } catch (error) {
    //   console.error("Error buying seat:", error);
    // }
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bus-company">
      <h2>{companyName}</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {[...Array(totalRows)].map((_, rowIndex) => (
          <div
            key={rowIndex}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {[...Array(totalColumns)].map((_, columnIndex) => {
              const seatNumber = rowIndex * totalColumns + columnIndex + 1;
              const isAvailable = seatsData.includes(seatNumber);
              return (
                <Seat
                  key={seatNumber}
                  number={seatNumber}
                  isAvailable={isAvailable}
                  onClick={handleSeatClick} // Call handleSeatClick when seat is clicked
                />
              );
            })}
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        seatNumber={selectedSeat}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

export default BusCompany;
