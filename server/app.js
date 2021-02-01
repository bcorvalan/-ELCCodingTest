// Node.js Server With Express
const express = require("express");
const app = express()
var cors = require('cors')
const data = require("./data");
const PORT = process.env.PORT || 3035;
app.use(cors())
app.get('/', (req, res)=>res.json(data))
app.listen(PORT, () => console.log(`Server running on port ${PORT} `))
