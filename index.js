const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const hospital = require('./routes/hospital.js');
const department = require('./routes/department.js');

const app = express();

const PORT = 3000;
const whitelist = ['http://localhost:4200']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}
app.use(cors());
app.use(bodyParser.json());
app.use('/hospital',hospital);  
app.use('/department',department); 


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));