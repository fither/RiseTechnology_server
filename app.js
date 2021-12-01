const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/jobs', (req, res) => {
  const jobs = [
    {
      name: 'JOB1',
      priority: 1
    }, {
      name: 'JOB2',
      priority: 0
    },{
      name: 'JOB3',
      priority: 2
    }
  ];

  res.send(jobs);
});

app.listen(5000, () => {
  console.log('Listening on localhost:5000');
});