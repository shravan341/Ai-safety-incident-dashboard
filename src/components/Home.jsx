import React from "react";
import "./Home.css";

function HomePage() {
  return (
    <div className="homepage">
      <h1 className="homepage-title">AI Safety Incident Dashboard</h1>

      <div className="facts-container">
        <div className="fact-card">
          <h2>Did You Know?</h2>
          <ul className="facts-list">
            <li>
              In 2016, a Tesla operating on Autopilot failed to detect a white
              truck against a bright sky, resulting in a fatal crash.
            </li>
            <li>
              Microsoft's Tay chatbot had to be shut down within 24 hours after
              it started posting offensive tweets learned from user
              interactions.
            </li>
            <li>
              Facial recognition systems have shown error rates up to 34.7%
              higher for dark-skinned women compared to light-skinned men.
            </li>
          </ul>
        </div>

        <div className="fact-card">
          <h2>AI Safety Best Practices</h2>
          <ul className="practices-list">
            <li>
              <strong>Human Oversight:</strong> Always maintain human control
              over critical AI decisions.
            </li>
            <li>
              <strong>Bias Testing:</strong> Regularly test AI systems for
              demographic biases.
            </li>
            <li>
              <strong>Fail-Safes:</strong> Implement emergency stop mechanisms
              for autonomous systems.
            </li>
            <li>
              <strong>Transparency:</strong> Document AI decision-making
              processes for accountability.
            </li>
            <li>
              <strong>Continuous Monitoring:</strong> Track system behavior
              post-deployment for unexpected outcomes.
            </li>
          </ul>
        </div>

        <div className="stat-card">
          <h2>By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">74%</div>
              <div className="stat-label">
                of organizations report AI model drift within 1 year
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-value">1 in 5</div>
              <div className="stat-label">
                AI projects produce unintended outcomes
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-value">3.5×</div>
              <div className="stat-label">
                increase in AI incidents since 2018
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
