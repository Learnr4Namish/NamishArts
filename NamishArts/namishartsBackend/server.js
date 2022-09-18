const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var allowedOrigins = ['http://localhost:3000',
                      'https://arts.namishkumar.in/'];
app.use(cors({
    origin: function(origin, callback){   
        if(!origin) return callback(null, true);    
        if(allowedOrigins.indexOf(origin) === -1){
          var msg = 'The CORS policy for this site does not ' +
                    'allow access from the specified Origin.';
          return callback(new Error(msg), false);
        }    return callback(null, true);
      }
  }));
  app.post('/loginUser', (req,res) => {
       const bodyContent = req.body;
       
  });
