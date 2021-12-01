const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

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

app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});