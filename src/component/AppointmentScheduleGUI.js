import React from 'react';
import './appointmentScheduleStyles.css'; // Import CSS file for styling

const AppointmentScheduleGUI = ({ appointments }) => {
  return (
    <div className="schedule-container">
      <h2>Appointment Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Patient Name</th>
            <th>Allocated Time</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.date}</td>
              <td>{appointment.patientName}</td>
              <td>{appointment.allocatedTime}</td>
              <td>{appointment.contactNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentScheduleGUI;
