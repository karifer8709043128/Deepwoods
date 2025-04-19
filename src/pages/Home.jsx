import { useState } from 'react';
import Calculator from '../components/Calculator';
import {
  FiMoon,
  FiGlobe,
  FiBatteryCharging,
  FiAward,
  FiShare2,
} from 'react-icons/fi';
import './Home.css';

export default function Home() {
  const [savedCO2, setSavedCO2] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleCalculate = (co2) => {
    setSavedCO2(co2);
    if (co2 > 0) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }
  };

  const benefits = [
    {
      icon: <FiMoon className="benefit-icon moon-icon" />,
      title: 'Better Night Air',
      desc: 'Less traffic pollution means clearer skies and stars over the city.',
    },
    {
      icon: <FiGlobe className="benefit-icon globe-icon" />,
      title: 'Preserve Nature',
      desc: 'Reduce your carbon footprint and protect ecosystems.',
    },
    {
      icon: <FiBatteryCharging className="benefit-icon battery-icon" />,
      title: 'Energy Efficient',
      desc: 'Nighttime EV charging uses less peak power and supports grid balance.',
    },
  ];

  return (
    <div className="home-container night-theme">
      {/* Background Effects */}
      <div className="starry-background"></div>
      <div className="top-mist"></div>
      <div className="bottom-fog"></div>

      {/* Celebration Overlay */}
      {showCelebration && (
        <div className="celebration-overlay">
          <div className="celebration-bg dark-celebration"></div>
          <div className="celebration-emoji">✨</div>
        </div>
      )}

      <div className="content-wrapper">
        {/* HEADER */}
        <header className="main-header">
          <div className="logo-circle night-logo"></div>
          <h1 className="main-title">
            <span className="title-gradient night-glow">Eco-Friendly</span>
          </h1>
          <p className="subtitle night-subtext">
            Illuminate the night with every silent ride.
            <span className="highlight-text">
              Your journey writes a greener future under the stars.
            </span>
          </p>
        </header>

        {/* CALCULATOR SECTION */}
        <section className="calculator-wrapper">
          <Calculator onCalculate={handleCalculate} />
        </section>

        {/* IMPACT SECTION */}
        <section className="impact-wrapper dark-impact">
          <div className="decorative-leaf top-leaf">🌌</div>
          <div className="decorative-leaf bottom-leaf">🌜</div>

          <h2 className="impact-title">
            <span className="icon-wrapper">
              <FiAward className="award-icon" />
            </span>
            <span className="text-gradient">Your Nighttime Impact</span>
          </h2>

          {savedCO2 > 0 ? (
            <div className="impact-results fade-in">
              <div className="co2-display">
                <span className="co2-amount">{savedCO2}</span>
                <span className="co2-unit">kg CO₂ saved</span>
              </div>

              <div className="progress-container">
                <div
                  className="progress-bar night-bar"
                  style={{ width: `${Math.min(savedCO2 * 2, 100)}%` }}
                ></div>
                <div className="progress-labels">
                  <span>0</span>
                  <span>25</span>
                  <span>50 kg</span>
                </div>
              </div>

              <div className="equivalent-card">
                <p className="equivalent-text">
                  <span className="bold-text">Equivalent to:</span>{' '}
                  {Math.round(savedCO2 * 10)} night-time forest guardians at work 🌲
                </p>
              </div>

              <div className="action-buttons">
                <button className="share-button">
                  <FiShare2 /> Share Impact
                </button>
                <button className="badge-button">
                  <FiAward /> View Badges
                </button>
              </div>
            </div>
          ) : (
            <div className="empty-state night-empty">
              <div className="earth-icon-wrapper">
                <div className="earth-emoji">🌍</div>
              </div>
              <h3 className="empty-title">Discover Your Night Impact</h3>
              <p className="empty-text">
                Calculate your silent emissions savings while the city sleeps.
              </p>
            </div>
          )}
        </section>

        {/* BENEFITS SECTION */}
        <section className="benefits-wrapper">
          <div className="decorative-recycle">🌠</div>
          <div className="decorative-tree">🌲</div>

          <h2 className="section-title">
            <span className="title-underline">Your Night Ride Echoes</span>
          </h2>

          <div className="benefits-grid">
            {benefits.map((item, i) => (
              <div key={i} className="benefit-card">
                <div className="benefit-icon-wrapper">{item.icon}</div>
                <h3 className="benefit-title">{item.title}</h3>
                <p className="benefit-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer-message night-footer">
          <div className="message-banner">
            <p className="message-text">
              The night is calm — your green steps echo in tomorrow's forest.
            </p>
          </div>
          <div className="emoji-row">
            {['🌌', '✨', '🌲', '🌙', '🌛'].map((emoji, i) => (
              <span key={i} className="emoji-item">
                {emoji}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
