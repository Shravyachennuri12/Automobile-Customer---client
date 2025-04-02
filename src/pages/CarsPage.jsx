// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; 
// import axios from "axios";
// import "../styles/CarsPage.css";

// const CarsPage = ({ cart, setCart }) => {
//   const [cars, setCars] = useState([]);
//   const [states, setStates] = useState([]);
//   const [selectedState, setSelectedState] = useState("");
//   const navigate = useNavigate(); 

//   useEffect(() => {
//     axios
//       .get("https://www.freetestapi.com/api/v1/cars?sort=name&order=desc")
//       .then((res) => {
//         setCars(res.data || []); 
//       })
//       .catch((err) => console.error("Error fetching cars:", err));
//   }, []);

//   useEffect(() => {
//     setStates(["Karnataka", "Maharashtra", "Delhi", "Tamil Nadu", "West Bengal"]);
//   }, []);

//   const addToCart = (car) => {
//     setCart([...cart, car]);
//     alert(`${car.make} ${car.model} added to cart!`);
//     navigate("/cart"); 
//   };

//   return (
//     <div className="cars-container">
//       <h1>Available Cars</h1>

//       <div className="cars-grid">
//         {cars.length === 0 ? (
//           <p>Loading cars...</p>
//         ) : (
//           cars.map((car) => (
//             <div key={car.id} className="car-card">
//               <img src={car.image} alt={`${car.make} ${car.model}`} />
//               <h2>{car.make} {car.model}</h2>
//               <p>Price: ${car.price}</p>
//               <button onClick={() => addToCart(car)}>Add to Cart</button>
//             </div>
//           ))
//         )}
//       </div>
      
//       {/* State Selection */}
//       <div className="location-selection">
//         <h2>Select Pickup State</h2>
//         <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
//           <option value="">Choose a State</option>
//           {states.length === 0 ? (
//             <option disabled>Loading states...</option>
//           ) : (
//             states.map((state, index) => (
//               <option key={index} value={state}>
//                 {state}
//               </option>
//             ))
//           )}
//         </select>
//         {selectedState && <p>Selected State: {selectedState}</p>}
//       </div>
//     </div>
//   );
// };

// export default CarsPage;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import "../styles/CarsPage.css";

const CarsPage = ({ cart, setCart }) => {
  const [cars, setCars] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {
    axios
      .get("https://www.freetestapi.com/api/v1/cars?sort=name&order=desc")
      .then((res) => {
        setCars(res.data || []); 
      })
      .catch((err) => console.error("Error fetching cars:", err));
  }, []);

  useEffect(() => {
    setStates(["Karnataka", "Maharashtra", "Delhi", "Tamil Nadu", "West Bengal"]);
  }, []);

  const addToCart = (car) => {
    setCart([...cart, car]);
    alert(`${car.make} ${car.model} added to cart!`);
    navigate("/cart"); 
  };
  return (
    <div className="cars-container">
      {/* Left Section - Location Selection */}
      <div className="location-selection">
        <h2>Select Pickup State</h2>
        <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
          <option value="">Choose a State</option>
          {states.length === 0 ? (
            <option disabled>Loading states...</option>
          ) : (
            states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))
          )}
        </select>
        {selectedState && <p>Selected State: {selectedState}</p>}
      </div>
  
      {/* Right Section - Car List */}
      <div className="cars-content">
        <h1>Available Cars</h1>
        <div className="cars-grid">
          {cars.length === 0 ? (
            <p>Loading cars...</p>
          ) : (
            cars.map((car) => (
              <div key={car.id} className="car-card">
                <img src={car.image} alt={`${car.make} ${car.model}`} />
                <h2>{car.make} {car.model}</h2>
                <p>Price: ${car.price}</p>
                <button onClick={() => addToCart(car)}>Add to Cart</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

 export default CarsPage;