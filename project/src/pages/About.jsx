import React from 'react';
import { useNavigate } from 'react-router-dom';
import TiltedCard from '../components/TiltedCard';
import nooneImage from '../assets/noone_pic.png';
import './About.css';

function About() {
  const navigate = useNavigate();
  const lyrics = `We sit here in silence,
To cut through all the violence,
In this house.
We built these walls around us,
Hung up art to blind us,
From the dirt.

Cause we use these words for war,
Just to settle the score,
In our heads.
Yeah we use these words for war,
Just to settle the score,
And whose won?

We navigate the halls,
Guarded with armor,
This ain't home.
It's a battle each day,
It's a wonder we stay,
But you're home.

Yeah we use these words for war,
Just to settle the score,
In our heads.
And we use these words for war,
Just to settle the score,
And whose won?

Maybe one day we'll get it right,
Maybe one day we'll make nice.
Maybe one day we'll find peace.
Maybe one day they'll get it,
Maybe one day they'll let us be,
Maybe one day they'll see.

That we use these words for good,
We're a bit misunderstood,
And there's love.
Yeah we use these words for good,
Just a product of our youth,
And there's love.

We sit here in silence,
To cut through all the violence,
In this house.`;

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-intro">
        <p>Welcome to SAPWOOD.</p>
        <p>SAPWOOD is an interactive digital space that explores the quiet tension between silence and connection. Through single‑word responses, visitors shape a living 3D environment where emotions drift, grow, and settle into new meaning.</p>
        <p>Our project invites you to pause, reflect, and see how even the smallest word can hold weight. Through our interactive platform, those words can create a shared landscape of understanding.</p>
        <p>Thank you for adding your voice to this space.</p>
      </div>
      <div className="about-card-row">
        <TiltedCard
          imageSrc={nooneImage}
          altText="Adrianna Noone - Words For War"
          captionText="Adrianna Noone - Words For War"
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
              Adrianna Noone- Words For War
            </p>
          }
        />
        <div className="about-lyrics-box">
          <h3>Words For War</h3>
          {lyrics}
        </div>
      </div>
      <div className="about-cta">
        <button onClick={() => navigate('/questionnaire')}>
          Begin Questionnaire
        </button>
      </div>
    </div>
  );
}

export default About;