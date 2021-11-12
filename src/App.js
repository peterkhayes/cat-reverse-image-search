import { useState } from 'react';
import './App.css';

function randomConfidence() {
  return Math.random() * 0.2 + 0.8
}

function App() {
  const [ results, setResults ] = useState([])

  function onFiles(files) {
    const newImages = Array.from(files).map((file) => URL.createObjectURL(file))
    const newResults = newImages.map((image) => ({image, confidence: randomConfidence()}))
    setResults((existingResults) => newResults.reverse().concat(existingResults))
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Cat Reverse Image Search</h1>
      </header>
      <label
        className="upload"
        onDrop={(e) => {
          e.preventDefault()
          onFiles(e.dataTransfer.files)
        }}
        onDragOver={(e) => {
          e.preventDefault()
        }}
      >
          Upload images of cats
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => {
              onFiles(e.target.files)
            }}
          />
      </label>
      <section className="preview">
        {results.map((result, i) => (
          <div className="chip" key={results.length - i}>
            <img className="chip-image" src={result.image} alt="Chip" />
            <div className="chip-spacer" />
              <div className="chip-row">
                <code><strong>Name</strong></code>
                <code>"Chip"</code>
              </div>
              <div className="chip-row">
                <code><strong>Confidence</strong></code>
                <code>{(result.confidence * 100).toFixed(2)}%</code>
              </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
