import { useState } from 'react';
import './App.css';
import Border from './component/border.js';
import UserProfile from './component/profile.jsx';
import SignIn from './component/signIn.jsx';
import Counter from './component/New.js';
import AppointmentSchedulingForm from './component/Appoinment.js';
import AppointmentScheduleGUI from './component/AppointmentScheduleGUI.js';
import PatientDashboard from './component/PatientDash.js';
import SignUp from './component/signUp.jsx';

function App() {
  const [appoinment, setAppoinment] = useState({ time: '', date: '' });
  const name = 'pregeth';
  const sheduleAppoinment = (time, date) => {
    setAppoinment({ date: date, time: time });
  };
  return (
    <div>
      {' '}
      {/* <SignIn /> */}
      <SignUp />
      {/* <Border /> */}
      {/* <UserProfile /> */}
      {/* <PatientDashboard /> */}
      {/* <Counter /> */}
      {/* <AppointmentScheduleGUI /> */}
      {/* <AppointmentSchedulingForm onSubmit={sheduleAppoinment} name={name} /> */}
    </div>
  );
}

export default App;
