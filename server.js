require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
var db = require("./queries")


const app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.options('*', cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors())
app.set('port', process.env.PORT || 3001)
app.locals.title = 'Rick Roll Counter'

app.get('/', (request, response) => {
  response.json({
    "server_status": "Healthy"
  })
})

app.post('/api/activity', db.postActivity)

app.use(function(request, response){
  response.status(404);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on 
  http://localhost:${app.get('port')}.`)
})

