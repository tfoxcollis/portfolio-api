const express = require('express')
const res = require('express/lib/response')
const app = express()
var cors = require('cors')
var db = require("./database.js")

app.use(cors())
app.set('port', process.env.PORT || 3000)
app.locals.title = 'Rick Roll Counter'

app.get('/', (request, response) => {
  response.json({
    total: 1
  })
})

app.post("/api/activity", (request, response, next) => {
  var sql ='INSERT INTO activity (visit_date) VALUES (?)'
  var params =[new Date()]
  db.run(sql, params, function (err, result) {
    if(err){
      response.status(400).json({"error": err.message})
      return
    }
    response.json({
      "message": "success",
      "id": this.lastID,
    })
  })
})

app.use(function(request, response){
  response.status(404);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on 
  http://localhost:${app.get('port')}.`)
})

