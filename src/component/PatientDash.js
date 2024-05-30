import React from 'react';
// import './patientDashboardStyles.css'; // Import CSS file for styling

const PatientDashboard = ({ patientInfo }) => {
  return (
    <div className="dashboard-container">
      <h2>
        Welcome,
        {/* {patientInfo.name}! */}
      </h2>
      <div className="info-card">
        <h3>Your Information:</h3>
        <p>
          <strong>Name:</strong>
          {/* {patientInfo.name} */}
        </p>
        <p>
          <strong>Email:</strong>
          {/* {patientInfo.email} */}
        </p>
        <p>
          <strong>Contact Number:</strong>
          {/* {patientInfo.contactNumber} */}
        </p>
        <p>
          <strong>Date of Birth:</strong>
          {/* {patientInfo.dateOfBirth} */}
        </p>
      </div>
      <div className="appointment-section">
        <h3>Your Appointments:</h3>
        <ul>
          {/* {patientInfo.appointments.map((appointment, index) => (
            <li key={index}>
              <strong>Date:</strong>
             {appointment.date},
              <strong>Time:</strong>
              {appointment.time}
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default PatientDashboard;
