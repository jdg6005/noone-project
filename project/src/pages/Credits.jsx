import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Credits.css';

function Credits() {
  const navigate = useNavigate();

  return (
    <div className="credits-container">
      <div className="credits-box">
        <h1>Thank You For Participating!</h1>
        <p className="credits-line">Frontend Designer - Carlo Clerigo</p>
        <p className="credits-line">Frontend and Video Editor - Jaidan Giglio</p>
        <p className="credits-line">Backend Designer - Johnathan Liu</p>
        <p className="credits-line">Environmental Artist - Tiffany Vu</p>
        <p className="credits-line">Material Designer - Jynn Lee</p>
        <p className="credits-line">Technical Artist - Tommy Desjardins</p>
        <p className="credits-line">Musical Artist - Adrianna Noone</p>
        <button
          type="button"
          className="credits-button"
          onClick={() => navigate('/questionnaire')}
        >
          Redo Questionnaire
        </button>
      </div>
    </div>
  );
}

export default Credits;