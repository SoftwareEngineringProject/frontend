import React, { useState } from 'react';
import './UserProfile.css'; // Importing the corresponding stylesheet
import photo from '../Profile_photo.jpg';
const UserProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSubmit = () => {
    // You can implement your logic here to handle submission of edited details
    console.log('Edited User Details:', editedUser);
    setIsEditing(false);
  };

  return (
    <div className="user-profile-container">
      <div className="user-profile-items-container">
        <div className="profile-picture">
          <img src={photo} alt="Profile" width="100" />
        </div>
        <div className="profile-details">
          <>
            <div className="user-profile-details-input-section">
              <strong>First Name</strong> <input type="text" name="firstName" value={editedUser.firstName} onChange={handleChange} defaultValue={editedUser.firstName} />
            </div>
            <div className="user-profile-details-input-section">
              <strong>Last Name:</strong> <input type="text" name="lastName" value={editedUser.lastName} onChange={handleChange} defaultValue={editedUser.lastName} />
            </div>
            <div className="user-profile-details-input-section">
              <strong>Address:</strong> <input type="text" name="address" value={editedUser.address} onChange={handleChange} defaultValue={editedUser.address} />
            </div>
            <div className="user-profile-details-input-section">
              <strong>Telephone:</strong> <input type="text" name="telephoneNumber" value={editedUser.telephoneNumber} onChange={handleChange} defaultValue={editedUser.telephoneNumber} />
            </div>
            <div className="user-profile-details-input-section">
              <strong>Age:</strong> <input type="text" name="age" value={editedUser.age} onChange={handleChange} defaultValue={editedUser.age} />
            </div>
            <div className="user-profile-details-input-section">
              <strong>Gender:</strong> <input type="text" name="gender" value={editedUser.gender} onChange={handleChange} defaultValue={editedUser.gender} />
            </div>
            <div className="user-profile-details-input-section">
              <strong>Guardian Contact:</strong> <input type="text" name="guardianContact" value={editedUser.guardianContact} onChange={handleChange} defaultValue={editedUser.guardianContact} />
            </div>
          </>
          {isEditing ? <button onClick={handleSubmit}>Save</button> : <button onClick={() => setIsEditing(true)}>Edit</button>}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
