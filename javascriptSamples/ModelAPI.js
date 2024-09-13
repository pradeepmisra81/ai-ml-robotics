// Example of calling a custom Python AI model from a Next.js API route
export default async function handler(req, res) {
    const response = await fetch('http://your-python-backend/predict', {
      method: 'POST',
      body: JSON.stringify({ input: req.body.input }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    const data = await response.json();
    res.status(200).json(data);
  }
  