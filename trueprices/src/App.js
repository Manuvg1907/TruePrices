import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
// Fix: making a small change so Git sees this file

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchItems = async () => {
    const res = await axios.get(`http://localhost:5000/api/search?item=${query}`);
    setResults(res.data);
  };

  return (
    <div className="container mt-4">
      <h2>🛒 Food Price Comparison</h2>
      <input 
        type="text" 
        className="form-control my-3" 
        placeholder="Enter food item (e.g. Milk)" 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
      />
      <button className="btn btn-primary" onClick={searchItems}>Search</button>

      <div className="mt-4">
        {results.map((item, idx) => (
          <div key={idx} className="card p-3 mb-2">
            <h5>{item.store} ({item.platform})</h5>
            <p>₹{item.price}</p>
            <a href={item.link} className="btn btn-sm btn-success" target="_blank">Buy Now</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
