import React from 'react';
import { useNavigate } from 'react-router-dom';
import AudioPlayer from '../components/AudioPlayer';
import './About.css';

function About({ persistentAudioRef }) {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <h1>Welcome to SAPWOOD</h1>

      <div className="about-song-intro">
        <p>Listen to this song as you answer the following questions</p>
      </div>

      <AudioPlayer
        audioSrc="/audio/words-for-war.mp3"
        autoPlay={false}
        showControls={true}
        externalRef={persistentAudioRef}
      />

      <div className="about-cta">
        <button onClick={() => navigate('/questionnaire')}>
          Begin Questionnaire
        </button>
      </div>

      <div className="about-intro">
        <p>SAPWOOD is an interactive digital space that explores the quiet tension between silence and connection.</p>
        <p>Through your one-word responses, you help shape a living 3D environment where emotions drift, grow, and settle into new meaning. At some point, you may be asked to reflect on the song that inspired this project, but reading the lyrics is not required and you may begin answering the questions at any time.</p>
        <p>Our project invites you to pause, reflect, and see how even the smallest word can hold weight. Through our interactive platform, those words can create a shared landscape of understanding.</p>
        <p>Thank you for adding your voice to this space.</p>
      </div>
    </div>
  );
}

export default About;