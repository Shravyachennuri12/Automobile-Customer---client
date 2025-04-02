// import React from 'react';
// import { User, Mail, Phone, Shield, MapPin, Calendar, Edit } from 'lucide-react';
// import '../styles/Profile.css';

// const Profile = () => {
//   return (
//     <div className="profile-container">
//       <h1 className="profile-title">Profile</h1>
//       <div className="profile-card">
//         {/* Profile Header */}
//         <div className="profile-header">
//           <div className="profile-avatar">
//             <User className="avatar-icon" />
//           </div>
//           <div className="profile-info">
//             <h2 className="profile-name">John Doe</h2>
//             <p className="profile-member-since">Member since 2024</p>
//           </div>
//         </div>

//         {/* Profile Details */}
//         <div className="profile-details">
//           <div className="profile-detail">
//             <Mail className="icon" />
//             <span className="profile-detail-text">john.doe@example.com</span>
//           </div>
//           <div className="profile-detail">
//             <Phone className="icon" />
//             <span className="profile-detail-text">+1 (555) 123-4567</span>
//           </div>
//           <div className="profile-detail">
//             <Calendar className="icon" />
//             <span className="profile-detail-text">Date of Birth: Jan 1, 1990</span>
//           </div>
//           <div className="profile-detail">
//             <MapPin className="icon" />
//             <span className="profile-detail-text">123 Main St, New York, NY</span>
//           </div>
//           <div className="profile-detail">
//             <Shield className="icon" />
//             <span className="profile-detail-text">Account Security Settings</span>
//           </div>
//         </div>

//         {/* Edit Profile Button */}
//         <button className="edit-profile-button">
//           <Edit className="edit-icon" />
//           Edit Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React, { useEffect, useState } from 'react';
import { User, Mail, Phone, Shield, MapPin, Calendar, Edit } from 'lucide-react';
import axios from 'axios'; 
import '../styles/Profile.css';
import { useNavigate } from "react-router-dom"; // Import for navigation


const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // React Router navigation

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1') 
      .then(response => {
        const user = response.data;
        setUserData({
          name: user.name,
          email: user.email,
          phone: user.phone,
          dob: "Jan 1, 1990", 
          address: `${user.address.street}, ${user.address.city}`,
          memberSince: "2024" 
        });
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
        setError("Failed to load profile data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <div className="profile-card">

        <div className="profile-header">
          <div className="profile-avatar">
            <User className="avatar-icon" />
          </div>
          <div className="profile-info">
            <h2 className="profile-name">{userData.name}</h2>
            <p className="profile-member-since">Member since {userData.memberSince}</p>
          </div>
        </div>

        <div className="profile-details">
          <div className="profile-detail">
            <Mail className="icon" />
            <span className="profile-detail-text">{userData.email}</span>
          </div>
          <div className="profile-detail">
            <Phone className="icon" />
            <span className="profile-detail-text">{userData.phone}</span>
          </div>
          <div className="profile-detail">
            <Calendar className="icon" />
            <span className="profile-detail-text">Date of Birth: {userData.dob}</span>
          </div>
          <div className="profile-detail">
            <MapPin className="icon" />
            <span className="profile-detail-text">{userData.address}</span>
          </div>
          <div className="profile-detail">
            <Shield className="icon" />
            <span className="profile-detail-text">Account Security Settings</span>
          </div>
        </div>

        {/* <button className="edit-profile-button">
          <Edit className="edit-icon" />
          Edit Profile
        </button> */}

        {/* Edit Profile Button */}
        <button className="edit-profile-button" onClick={() => navigate("/edit-profile")}>
          <Edit className="edit-icon" />
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
