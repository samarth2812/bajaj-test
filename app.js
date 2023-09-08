const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.post('/bfhl', (req, res) => {
    // Extract data from the request body
    const {data} = req.body;
    console.log(req.body);
  let numb = []
  let alpha = []
    data.forEach(item => {
        if (!isNaN(item)) {
          numb.push(String(item));
        } else if (/^[A-Za-z]+$/.test(item)) {
          alpha.push(item);
        }
      });
    const response = {
      is_sucess: 'true',
      user_id:'ritik_raj_19022003',
      college_email:'rr4673@srmist.edu.in',
      roll_number:'RA2011003010334',
      numbers:numb,
      alphabets:alpha
    };
  
    res.json(response);
  });
  
  // Endpoint for GET method
  app.get('/bfhl', (req, res) => {
    // Generate a random operation code
    const operationCode = Math.floor(Math.random() * 1000);
  
    // Prepare the response JSON
    const response = {
      operation_code: operationCode,
    };
  
    res.json(response);
  });
  
app.listen(3000, function () {
    console.log("Server is running on 3000");
});