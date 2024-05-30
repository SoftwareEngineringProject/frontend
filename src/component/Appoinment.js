import React, { useState } from 'react';
import './appointmentFormStyles.css'; // Import CSS file

const AppointmentSchedulingForm = ({ onSubmit, name }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date: selectedDate, time: selectedTime });
  };
  console.log(selectedDate);
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-heading">Book Appointment{name}</h2>
      <div className="input-container">
        <label htmlFor="date" className="label">
          Select Date:
        </label>
        <input type="date" id="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="input-field" />
      </div>
      <div className="input-container">
        <label htmlFor="time" className="label">
          Select Time:
        </label>
        <input type="time" id="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className="input-field" />
      </div>
      <button type="submit" className="submit-button" onClick={handleSubmit}>
        Schedule Appointment
      </button>
    </form>
  );
};

export default AppointmentSchedulingForm;
