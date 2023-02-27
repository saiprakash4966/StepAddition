import React, { useState } from 'react';
import axios from "axios";

function File() 
{
const [num1, setNum1] = useState("");
const [num2, setNum2] = useState("");
const [steps, setSteps] = useState([]);

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("/step-addition", { num1, num2 });
    setSteps(response.data);
  } catch (error) {
    console.error(error);
  }
};

return (
  <div className="App">
    <h1>Step Addition</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Number 1:
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </label>
      <label>
        Number 2:
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </label>
      <button type="submit">Generate Steps</button>
    </form>
    <h2>Output:</h2>
    <pre>{JSON.stringify(steps, null, 2)}</pre>
  </div>
);
}

export default File;