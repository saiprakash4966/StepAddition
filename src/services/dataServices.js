const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

app.post("/step-addition", (req, res) => {
  const { num1, num2 } = req.body;

  // validate input using regex
  const regex = /^[1-9][0-9]*$/;
  if (!regex.test(num1) || !regex.test(num2)) {
    res.status(400).json({ error: "Invalid input. Please enter positive numbers only." });
    return;
  }

  let carry = 0;
  let carryString = "";
  let sumString = "";

  // convert inputs to array of digits
  const digits1 = Array.from(num1, Number);
  const digits2 = Array.from(num2, Number);

  // pad shorter array with leading zeros
  const length = Math.max(digits1.length, digits2.length);
})