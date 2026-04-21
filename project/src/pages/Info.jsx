import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import TiltedCard from '../components/TiltedCard';
import nooneImage from '../assets/noone_pic.png';
import './Info.css';

function Info() {
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
    <div className="info-container">
      <motion.div
        className="info-box"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        transition={{ type: 'spring', duration: 0.4 }}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <h1>Thank You For Experiencing Sapwood!</h1>
        <p className="info-line">See more from Adrianna Noone below</p>


        <div className="info-card-row">
          <div className="info-card-column">
            <TiltedCard
              imageSrc={nooneImage}
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={15}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
            />

            <a
              href="https://www.youtube.com/watch?v=_XjuLh3H3FM"
              target="_blank"
              rel="noreferrer"
              className="info-button"
            >
              Watch Words For War (Live)
            </a>
          </div>

          <div className="info-lyrics-box">
            <h3>Words For War</h3>
            {lyrics}
          </div>
        </div>

        <div className="info-footer">
          <button
            type="button"
            className="info-button"
            onClick={() => navigate('/')}
          >
            Restart Experience
          </button>
          <a
            href="https://adriannanoone.com/#about"
            target="_blank"
            rel="noreferrer"
            className="info-link-button"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Info;