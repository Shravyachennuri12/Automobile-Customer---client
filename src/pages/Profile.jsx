import React from 'react';
import { User, Mail, Phone, Shield } from 'lucide-react';
import '../styles/Profile.css'; 

const Profile = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <User className="avatar-icon" />
          </div>
          <div className="profile-info">
            <h2 className="profile-name">John Doe</h2>
            <p className="profile-member-since">Member since 2024</p>
          </div>
        </div>
        <div className="profile-details">
          <div className="profile-detail">
            <Mail className="icon" />
            <span className="profile-detail-text">john.doe@example.com</span>
          </div>
          <div className="profile-detail">
            <Phone className="icon" />
            <span className="profile-detail-text">+1 (555) 123-4567</span>
          </div>
          <div className="profile-detail">
            <Shield className="icon" />
            <span className="profile-detail-text">Account Security Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
