import React from 'react';
import './UserProfileCard.css';

function UserProfileCard({ user }) {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={user.image} alt={user.name} className="profile-image" />
        <h2>{user.name}</h2>
        <p className="email">{user.email}</p>
      </div>
      
      <div className="profile-details">
        <div className="detail-item">
          <span className="detail-label">Gender:</span>
          <span>{user.gender}</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Address:</span>
          <span>{user.address}</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Number:</span>
          <span>{user.number}</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Hobbies:</span>
          <span>{user.hobbies.join(', ')}</span>
        </div>
        
        <div className="education-section">
          <h3>Education</h3>
          {user.education.map((edu, index) => (
            <div key={index} className="education-item">
              <p><strong>{edu.degree}</strong> in {edu.field}</p>
              <p>{edu.university}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;