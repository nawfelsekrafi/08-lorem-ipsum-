import React, { useState } from "react";
import data from "./data";
function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [nbParagraphs, setNbParagraphs] = useState(0);

  const fetchParagraphs = () => {
    if (nbParagraphs <= 0) {
      setParagraphs([data[0]]);
    } else if (nbParagraphs >= 8) {
      setParagraphs(data);
    } else {
      setParagraphs(data.slice(0, nbParagraphs));
    }
  };

  return (
    <main>
      <div className="section">
        <h3>tired of boaring lorem ipsum ?</h3>
        <div className="lorem-form">
          <label htmlFor="paragraphs">Paragraphs:</label>
          <input
            type="text"
            id="paragraphs"
            value={nbParagraphs}
            onChange={(e) => setNbParagraphs(e.target.value)}
          />
          <button className="btn" onClick={fetchParagraphs}>
            Generate
          </button>
        </div>
        <div className="section-center">
          {paragraphs.map((p, index) => {
            return (
              <article className="result" key={index}>
                {p}
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
