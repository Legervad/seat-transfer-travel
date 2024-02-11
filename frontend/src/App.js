import React, { useState, useEffect } from "react";
import BusCompany from "./BusCompany";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "NextBus";
  }, []);

  const [fromOptions, setFromOptions] = useState([
    { value: "", label: "Select from..." },
  ]);
  const [toOptions, setToOptions] = useState([
    { value: "", label: "Select to..." },
  ]);
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  const [busData, setBusData] = useState([]);

  useEffect(() => {
    // Fetch options from the backend when the component mounts
    fetchOptionsFromBackend("from") // Change 'from' to the appropriate endpoint for your backend
      .then((data) => setFromOptions(data));

    fetchOptionsFromBackend("to") // Change 'to' to the appropriate endpoint for your backend
      .then((data) => setToOptions(data));
  }, []);

  // Asynchronous function to fetch options from the backend
  async function fetchOptionsFromBackend(optionType) {
    // try {
    //   const response = await fetch(`/api/${optionType}`); // Change the endpoint to your backend API endpoint
    //   if (!response.ok) {
    //     throw new Error('Failed to fetch options');
    //   }
    //   const data = await response.json();
    //   return data;
    // } catch (error) {
    //   console.error('Error fetching options:', error);
    //   return [];
    // }
    return [
      { value: "Istanbul", label: "Istanbul" },
      { value: "Ankara", label: "Ankara" },
      { value: "Eskisehir", label: "Eskisehir" },
    ];
  }

  async function handleSubmit(event) {
    event.preventDefault();

    console.log(
      JSON.stringify({
        from: selectedFrom,
        to: selectedTo,
      })
    );

    // const data = await response.json();

    // Handle response from backend

    setBusData([
      {
        companyName: "FLIX Bus1",
        availableSeats: [2, 4],
      },
      {
        companyName: "FLIX Bus2",
        availableSeats: [1, 2, 3],
      },
      {
        companyName: "FLIX Bus3",
        availableSeats: [3],
      },
      {
        companyName: "FLIX Bus4",
        availableSeats: [1],
      },
      {
        companyName: "FLIX Bus5",
        availableSeats: [1, 2, 3, 4],
      },
    ]);

    // Send HTTP POST request to backend with selected "from" and "to" values
    // try {
    //   const response = await fetch("/api/your-backend-endpoint", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       from: selectedFrom,
    //       to: selectedTo,
    //     }),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Failed to submit form");
    //   }

    //   // Handle successful response from backend
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
  }

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        <div style={{ display: "inline-block", marginRight: "20px" }}>
          <label>
            From:
            <select
              value={selectedFrom}
              onChange={(e) => setSelectedFrom(e.target.value)}
            >
              {fromOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div style={{ display: "inline-block", marginRight: "20px" }}>
          <label>
            To:
            <select
              value={selectedTo}
              onChange={(e) => setSelectedTo(e.target.value)}
            >
              {toOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="bus-companies">
        {busData.map((bus, index) => (
          <BusCompany
            key={index}
            companyName={bus.companyName}
            availableSeats={bus.availableSeats}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
