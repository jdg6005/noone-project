import React, { useState } from 'react';
import Stepper, { Step } from '../components/Stepper';
import ScrollVelocity from '../components/ScrollVelocity';
import { submitAllAnswers } from '../services/apiClient';

function Questionnaire({ onStepChange = () => {} }) {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: ''
  });

  const handleChange = field => event => {
    setAnswers(current => ({
      ...current,
      [field]: event.target.value
    }));
  };

  const submitToBackend = async (answersPayload) => {
    try {
      const result = await submitAllAnswers(answersPayload);
      console.log('Submitted successfully, session_id:', result.session_id);
    } catch (error) {
      console.error('Failed to submit answers:', error);
    }
  };

  const handleComplete = () => {
    submitToBackend(answers);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.8rem 1rem',
    marginTop: '1rem',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    background: 'rgba(0, 0, 0, 0.3)',
    color: '#fff',
    boxSizing: 'border-box'
  };

  return (
    <>
      <ScrollVelocity
        texts={['words words words', 'words words words', 'words words words', 'words words words']}
        velocity={100}
        className="custom-scroll-text"
        fullBleed
      />

      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <Stepper
          initialStep={1}
          onFinalStepCompleted={handleComplete}
          onStepChange={onStepChange}
          backButtonText="Previous"
          nextButtonText="Next"
        >
          <Step>
            <h2>How does this song make you feel?</h2>
            <input
              type="text"
              value={answers.question1}
              onChange={handleChange('question1')}
              placeholder="Type your answer here"
              style={inputStyle}
            />
          </Step>

          <Step>
            <h2>Question 2</h2>
            <input
              type="text"
              value={answers.question2}
              onChange={handleChange('question2')}
              placeholder="Type your answer here"
              style={inputStyle}
            />
          </Step>

          <Step>
            <h2>Question 3</h2>
            <input
              type="text"
              value={answers.question3}
              onChange={handleChange('question3')}
              placeholder="Type your answer here"
              style={inputStyle}
            />
          </Step>

          <Step>
            <h2>Question 4</h2>
            <input
              type="text"
              value={answers.question4}
              onChange={handleChange('question4')}
              placeholder="Type your answer here"
              style={inputStyle}
            />
          </Step>

          <Step>
            <h2>Question 5</h2>
            <input
              type="text"
              value={answers.question5}
              onChange={handleChange('question5')}
              placeholder="Type your answer here"
              style={inputStyle}
            />
          </Step>

          <Step>
            <h2>Question 6</h2>
            <input
              type="text"
              value={answers.question6}
              onChange={handleChange('question6')}
              placeholder="Type your answer here"
              style={inputStyle}
            />
          </Step>

          <Step>
            <h2>Question 7</h2>
            <input
              type="text"
              value={answers.question7}
              onChange={handleChange('question7')}
              placeholder="Type your answer here"
              style={inputStyle}
            />
          </Step>
        </Stepper>
      </div>

      <ScrollVelocity
        texts={['words words words', 'words words words', 'words words words', 'words words words', 'words words words', 'words words words']}
        velocity={100}
        className="custom-scroll-text"
        fullBleed
      />
    </>
  );
}

export default Questionnaire;
