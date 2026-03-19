import React from 'react';
import TiltedCard from '../components/TiltedCard';
import nooneImage from '../assets/noone_pic.png';

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to SAPWOOD.</p>
      <p>Learn more about our project here.</p>
      <TiltedCard
        imageSrc={nooneImage}
        altText="Adrianna Noone - GNX Album Cover"
        captionText="Adrianna Noone - GNX"
        containerHeight="400px"
        containerWidth="400px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={15}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip
        displayOverlayContent
        overlayContent={
          <p className="tilted-card-demo-text">
            Adrianna Noone
          </p>
        }
      />
    </div>
  );
}

export default About;