import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import './Credits.css';

function Credits() {
  const navigate = useNavigate();

  return (
    <div className="credits-container">
      <motion.div
        className="credits-box"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        transition={{ type: 'spring', duration: 0.4 }}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <h1>Our Team</h1>
        <p className="credits-line">Frontend Designer - Carlo Clerigo</p>
        <p className="credits-line">Frontend and Video Editor - Jaidan Giglio</p>
        <p className="credits-line">Backend Designer - Johnathan Liu</p>
        <p className="credits-line">Environmental Artist - Tiffany Vu</p>
        <p className="credits-line">Material Designer - Jynn Lee</p>
        <p className="credits-line">Technical Artist - Tommy Desjardins</p>
        <p className="credits-line">Musical Artist - Adrianna Noone</p>
      </motion.div>
    </div>
  );
}

export default Credits;