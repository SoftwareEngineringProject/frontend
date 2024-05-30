import React from 'react';
import './Bstyle.css'; // Renamed CSS file and corrected import path
import UserProfile from './profile.jsx';

function Border() {
  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <div className="board">
      {' '}
      {/* Corrected class name */}
      <h1 className="leaderboard">Leaderboard</h1> {/* Corrected class name */}
      <div className="duration">
        {' '}
        {/* Corrected class name */}
        <button onClick={handleClick} data-id="7">
          7 d
        </button>
        <button onClick={handleClick} data-id="8 ">
          8 days
        </button>
        <button onClick={handleClick} data-id="9">
          All time
        </button>
      </div>
    </div>
  );
}

export default Border;
