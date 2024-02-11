const fetchAvailableSeats = async (busName) => {
  try {
    // Assuming your API function returns the updated seat data
    const availableSeats = await fetch("apiaddress");
    return availableSeats;
  } catch (error) {
    console.error("Error buying seat:", error);
  }
};

export { fetchAvailableSeats };
