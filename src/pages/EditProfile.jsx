// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../styles/EditProfile.css";

// const EditProfile = () => {
//   const [formData, setFormData] = useState(null); // Initially null
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("https://api.example.com/user/1") // Replace with your actual API URL
//       .then((response) => {
//         // Make sure the response structure matches your formData fields
//         setFormData({
//           name: response.data.name || "",
//           email: response.data.email || "",
//           phone: response.data.phone || "",
//           dob: response.data.dob || "",
//           address: response.data.address || "",
//         });
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//         setLoading(false);
//       });
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.put("https://api.example.com/user/1", formData) // Replace with your API URL
//       .then(() => {
//         alert("Profile updated successfully!");
//         navigate("/profile"); // Navigate back to the profile page after successful update
//       })
//       .catch((error) => console.error("Error updating profile:", error));
//   };

//   if (loading) return <p>Loading...</p>;
//   if (!formData) return <p>No user data available.</p>;

//   return (
//     <div className="edit-profile-container">
//       <h1>Edit Profile</h1>
//       <form className="edit-profile-form" onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input 
//           type="text" 
//           name="name" 
//           value={formData.name} 
//           onChange={handleChange} 
//           placeholder="Full Name" 
//           required 
//         />

//         <label>Email:</label>
//         <input 
//           type="email" 
//           name="email" 
//           value={formData.email} 
//           onChange={handleChange} 
//           placeholder="Email Address" 
//           required 
//         />

//         <label>Phone:</label>
//         <input 
//           type="text" 
//           name="phone" 
//           value={formData.phone} 
//           onChange={handleChange} 
//           placeholder="Phone Number" 
//           required 
//         />

//         <label>Date of Birth:</label>
//         <input 
//           type="date" 
//           name="dob" 
//           value={formData.dob} 
//           onChange={handleChange} 
//           required 
//         />

//         <label>Address:</label>
//         <input 
//           type="text" 
//           name="address" 
//           value={formData.address} 
//           onChange={handleChange} 
//           placeholder="Address" 
//           required 
//         />

//         <div className="button-group">
//           <button type="submit" className="save-button">Save Changes</button>
//           <button type="button" className="cancel-button" onClick={() => navigate("/profile")}>Cancel</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditProfile;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/EditProfile.css";

const EditProfile = () => {
  // Initial hardcoded data for testing purposes
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    dob: "1990-01-01",
    address: "123 Main St, New York, NY"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful update
    alert("Profile updated successfully!");
    navigate("/profile"); // Navigate back to the profile page
  };

  return (
    <div className="edit-profile-container">
      <h1>Edit Profile</h1>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Full Name" 
          required 
        />

        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Email Address" 
          required 
        />

        <label>Phone:</label>
        <input 
          type="text" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          placeholder="Phone Number" 
          required 
        />

        <label>Date of Birth:</label>
        <input 
          type="date" 
          name="dob" 
          value={formData.dob} 
          onChange={handleChange} 
          required 
        />

        <label>Address:</label>
        <input 
          type="text" 
          name="address" 
          value={formData.address} 
          onChange={handleChange} 
          placeholder="Address" 
          required 
        />

        <div className="button-group">
          <button type="submit" className="save-button">Save Changes</button>
          <button type="button" className="cancel-button" onClick={() => navigate("/profile")}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
