import React from 'react';
import './Campaign.css';

const Campaign = () => {
  return (
    <div className="campaign-container">
      <h2 className="campaign-title">🌍 Night Riders, Greener Planet</h2>
      <p className="campaign-description">
        Our nocturnal journey toward a sustainable Earth is gaining momentum. With every quiet ride, you're not just saving CO₂ — you're nurturing life. Let's turn clean kilometers into living forests and inspire change one starry night at a time.
      </p>
      <div className="campaign-stats">
        <div className="stat-card">
          <h3>🌲 82,745</h3>
          <p>Seeds of Change Planted</p>
        </div>
        <div className="stat-card">
          <h3>🌙 210,000 km</h3>
          <p>Eco Rides Recorded</p>
        </div>
        <div className="stat-card">
          <h3>🤝 15,430</h3>
          <p>Night Guardians Joined</p>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
