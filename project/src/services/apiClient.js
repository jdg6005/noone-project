// API endpoint - update this with your actual backend URL
const API_ENDPOINT = 'http://localhost:3000/api/answers';

export const submitAnswer = async (questionId, answer) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        questionId,
        answer,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      const errorMessage = text || response.statusText || 'Unknown API error';
      throw new Error(`API error (${response.status}): ${errorMessage}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to submit answer:', error);
    throw error;
  }
};
