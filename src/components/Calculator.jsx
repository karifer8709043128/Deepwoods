import { useState } from 'react';
import './Calculator.css';

export default function Calculator({ onCalculate }) {
  const [distance, setDistance] = useState(5);
  const [vehicleType, setVehicleType] = useState('auto');
  const [showImpact, setShowImpact] = useState(false);

  const vehicleData = {
    auto: { name: "Auto Rickshaw", icon: "🛺", factor: 120 },
    car: { name: "Petrol Car", icon: "🚗", factor: 170 },
    bike: { name: "Motorcycle", icon: "🏍️", factor: 100 }
  };

  const calculateSavings = () => {
    const savings = (vehicleData[vehicleType].factor * distance) / 1000;
    onCalculate(Math.round(savings * 10) / 10);
    setShowImpact(true);
  };

  const getEnvironmentalImpact = (co2) => {
    if (co2 < 2) return "Equivalent to planting 1 tree seedling";
    if (co2 < 5) return "Like switching off 10 light bulbs for a day";
    return "Equal to recycling 5kg of waste instead of landfilling";
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-title">
        <span className="calculator-icon">🌱</span>
        Your Green Journey Calculator
      </h2>
      
      <div className="calculator-content">
        {/* Distance Slider */}
        <div className="distance-control">
          <div className="distance-header">
            <label>Trip Distance</label>
            <span className="distance-value">{distance} km</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="50" 
            value={distance}
            onChange={(e) => {
              setDistance(e.target.value);
              setShowImpact(false);
            }}
            className="distance-slider"
          />
          <div className="distance-labels">
            <span>Short</span>
            <span>Long</span>
          </div>
        </div>
        
        {/* Vehicle Selection */}
        <div className="vehicle-selection">
          <label>Vehicle You Replaced</label>
          <div className="vehicle-options">
            {Object.entries(vehicleData).map(([type, data]) => (
              <button
                key={type}
                onClick={() => {
                  setVehicleType(type);
                  setShowImpact(false);
                }}
                className={`vehicle-option ${vehicleType === type ? 'selected' : ''}`}
              >
                <span className="vehicle-icon">{data.icon}</span>
                <span className="vehicle-name">{data.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Calculate Button */}
        <button 
          onClick={calculateSavings}
          className="calculate-button"
        >
          See My Impact
        </button>
        
        {/* Environmental Facts */}
        {showImpact && (
          <div className="impact-fact">
            <h3>
              <span className="fact-icon">💡</span>
              Did You Know?
            </h3>
            <p>{getEnvironmentalImpact((vehicleData[vehicleType].factor * distance) / 1000)}</p>
          </div>
        )}
      </div>
    </div>
  );
}