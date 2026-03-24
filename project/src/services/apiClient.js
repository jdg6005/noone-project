// API endpoint - update this with your actual backend URL
const API_BASE = 'http://localhost:3000/api';

export const submitAnswer = async (questionId, answer) => {
  const response = await fetch(`${API_BASE}/answers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      questionId,
      answer,
      timestamp: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`API error (${response.status}): ${text || response.statusText}`);
  }

  return response.json();
};

export const submitAllAnswers = async (answers) => {
  const response = await fetch(`${API_BASE}/answers/batch`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      answers,
      timestamp: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`API error (${response.status}): ${text || response.statusText}`);
  }

  return response.json();
};
