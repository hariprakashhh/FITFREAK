import React from 'react';
import '../Assets/css/progressdisplay.css';
const ProgressDisplay = ({ progressData }) => {
  return (
    <div className="progress-display-container">
      <h2 className="progress-display-title">Progress Over Time</h2>
      <ul className="progress-list">
        {progressData.map((entry, index) => (
          <li key={index} className="progress-item">
            <strong>Date:</strong> {new Date(entry.date).toLocaleDateString()}<br />
            <strong>Weight:</strong> {entry.weight} kg<br />
            <strong>Waist:</strong> {entry.waist} cm<br />
            <strong>Workout Reps:</strong> {entry.workoutReps}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressDisplay;
