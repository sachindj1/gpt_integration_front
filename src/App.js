import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:2525/chat", { prompt })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App" style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <p style={{ fontSize: '18px', marginBottom: '10px' }}>{response}</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <label htmlFor="askAnything" style={{ marginRight: '10px' }}>Ask Anything:</label>
        <input
          type="text"
          id="askAnything"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ marginLeft: '10px', padding: '5px 10px', borderRadius: '3px', border: 'none', backgroundColor: '#007BFF', color: '#ffffff' }}>Submit</button>
      </form>
    </div>
  </div>
  );
}

export default App;
