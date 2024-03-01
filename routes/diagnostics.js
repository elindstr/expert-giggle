const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const fs = require('fs')

// * It's done when I have created a `fetch()` request on the front end that will send a POST request to `/api/diagnostics` every time a user attempts to submit an invalid form.

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  readFromFile('./db/diagnostics.json').then((data) => res.json(JSON.parse(data)));
});

// This is what the json looks like:
// {
//   "time": 1616087173408,
//   "error_id": "249911fc-ce9d-4905-a934-745845b41c7a",
//   "errors": {
//     "tip:": "",
//     "topic": "Gaming is not a valid topic",
//     "username": ""
//   }
// },

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  console.log(req.body)
  const errors = req.body.errors
  if (errors) {
    const newDiagnostic = {
      time: Date.now(),
      error_id: uuidv4(),
      errors
    };

    readAndAppend(newDiagnostic, './db/diagnostics.json');

    const response = {
      status: 'success',
      body: newDiagnostic,
    };
    res.json(response);

  } else {
    res.json('Error in posting diagnostics');
  }

});

module.exports = diagnostics;
