import React, { useState } from 'react';
import axios from "axios";

function ExampleTwo() 
 {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState({});
  
    const handleNum1Change = (event) => {
      setNum1(event.target.value);
    };
  
    const handleNum2Change = (event) => {
      setNum2(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.post("/api/add", { num1, num2 });
        setResult(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div className="App">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="num1">Number 1:</label>
              <input
                type="text"
                className="form-control"
                id="num1"
                value={num1}
                onChange={handleNum1Change}
                placeholder="Enter number 1"
                required
                pattern="\d+"
              />
            </div>
            <div className="form-group">
              <label htmlFor="num2">Number 2:</label>
              <input
                type="text"
                className="form-control"
                id="num2"
                value={num2}
                onChange={handleNum2Change}
                placeholder="Enter number 2"
                required
                pattern="\d+"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Generate Steps
            </button>
          </form>
          <div className="output">
            <h2>Output:</h2>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        </div>
      </div>
    );
  }
  
  

export default ExampleTwo;