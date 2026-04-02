import React, { useState } from 'react';
import Stepper, { Step } from '../components/Stepper';
import ScrollVelocity from '../components/ScrollVelocity';
import { submitAllAnswers } from '../services/apiClient';
import './Questionnaire.css';

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
    const firstWord = event.target.value.trimStart().split(/\s+/)[0] || '';

    setAnswers(current => ({
      ...current,
      [field]: firstWord
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
    padding: '1rem 1.2rem',
    marginTop: '1rem',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    background: 'rgba(0, 0, 0, 0.3)',
    color: '#fff',
    fontSize: '1.1rem',
    boxSizing: 'border-box'
  };

  const helperTextStyle = {
    display: 'block',
    marginTop: '0.5rem',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.95rem'
  };

  const questionTitleStyle = {
    fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
    lineHeight: 1.2,
    margin: 0,
    color: '#fff'
  };

  return (
    <>
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 1rem' }}>
        <Stepper
          initialStep={1}
          onFinalStepCompleted={handleComplete}
          onStepChange={onStepChange}
          backButtonText="Previous"
          nextButtonText="Next"
          stepCircleContainerClassName="questionnaire-card"
        >
          <Step>
            <h2 style={questionTitleStyle}>What is the first word that comes to mind when you hear this song?</h2>
            <input
              type="text"
              value={answers.question1}
              onChange={handleChange('question1')}
              placeholder="Type your answer here"
              style={inputStyle}
            />
            <small style={helperTextStyle}>One word response only</small>
          </Step>

          <Step>
            <h2 style={questionTitleStyle}>What emotion rises in you when you hear this song?</h2>
            <input
              type="text"
              value={answers.question2}
              onChange={handleChange('question2')}
              placeholder="Type your answer here"
              style={inputStyle}
            />
            <small style={helperTextStyle}>One word response only</small>
          </Step>

          <Step>
            <h2 style={questionTitleStyle}>What word captures how it feels to speak to strangers today?</h2>
            <input
              type="text"
              value={answers.question3}
              onChange={handleChange('question3')}
              placeholder="Type your answer here"
              style={inputStyle}
            />
            <small style={helperTextStyle}>One word response only</small>
          </Step>

          <Step>
            <h2 style={questionTitleStyle}>What emotion fills you during confrontation?</h2>
            <input
              type="text"
              value={answers.question4}
              onChange={handleChange('question4')}
              placeholder="Type your answer here"
              style={inputStyle}
            />
            <small style={helperTextStyle}>One word response only</small>
          </Step>

          <Step>
            <h2 style={questionTitleStyle}>What word describes the home you wish existed?</h2>
            <input
              type="text"
              value={answers.question5}
              onChange={handleChange('question5')}
              placeholder="Type your answer here"
              style={inputStyle}
            />
            <small style={helperTextStyle}>One word response only</small>
          </Step>

          <Step>
            <h2 style={questionTitleStyle}>If one one word could make someone truly hear you, what would it be?</h2>
            <input
              type="text"
              value={answers.question6}
              onChange={handleChange('question6')}
              placeholder="Type your answer here"
              style={inputStyle}
            />
            <small style={helperTextStyle}>One word response only</small>
          </Step>

          <Step>
            <h2 style={questionTitleStyle}>What is the final word that comes to mind when you reflect on this experience?</h2>
            <input
              type="text"
              value={answers.question7}
              onChange={handleChange('question7')}
              placeholder="Type your answer here"
              style={inputStyle}
            />
            <small style={helperTextStyle}>One word response only</small>
          </Step>
        </Stepper>
      </div>
    </>
  );
}

export default Questionnaire;
