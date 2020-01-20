const sql = require('mssql')
const express = require("express");
const app = express();
const router = express.Router();
const http = require('http').Server(app);
const cors = require("cors");
const bodyParser = require('body-parser')
const allowedOrigins = ['http://localhost:1010'];

const config = {
  user: "AdamF",
  password: "Password1",
  database: 'MyDatabase',
  server: 'HSW10544\\MYSERVER'
}
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use(cors({ //Cross origin allowed
  origin: function(origin, callback) {
    return callback(null, true);
  }
}));

const statusCodes = require("./StatusCodes");
sql.connect(config).then(pool => require('./private/handlers/routeHandler/handler.js')(app, router, pool, statusCodes)).catch(e => console.log(e));
sql.on("err", err => console.log(`[SQL ERROR]: ${err}`))

http.listen(1010, () => console.log("Started!!"));