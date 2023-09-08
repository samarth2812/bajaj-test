const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000

app.use(bodyParser.json());

// POST method endpoint
app.post('/bfhl', (req, res) => {
  const requestData = req.body.data;

  const response = {
    is_success: true,
    user_id: 'samarth_28102001',
    email: 'sd2140@srmist.edu.in',
    roll_number: 'RA2011003010234',
    numbers: requestData.filter(item => !isNaN(item)),
    alphabets: requestData.filter(item => isNaN(item)),
    highest_alphabet: findHighestAlphabet(requestData.filter(item => isNaN(item))),
  };

  res.json(response);
});

// GET method endpoint
app.get('/bfhl', (req, res) => {
  // Logic for GET request (hardcoded response)
  const response = {
    operation_code: 1,
  };

  res.json(response);
});

// Function to find the highest alphabet
function findHighestAlphabet(alphabets) {
  const sortedAlphabets = alphabets.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  return [sortedAlphabets[sortedAlphabets.length - 1]];
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
