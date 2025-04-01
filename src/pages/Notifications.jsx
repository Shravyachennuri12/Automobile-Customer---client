import React from 'react';
import { Bell } from 'lucide-react';
import '../styles/Notifications.css'; // Import custom CSS

const Notifications = () => {
  return (
    <div className="notifications-container">
      <h1 className="notifications-title">Notifications</h1>
      <div className="notifications-card">
        <div className="notifications-body">
          <div className="text-center">
            <Bell className="bell-icon" />
            <p className="no-notifications-text">No new notifications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
