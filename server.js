const express = require('express')
const app = express()

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Rick Roll Counter'

app.get('/', (request, response) => {
  response.json({
    total: 1
  })
})

app.use(function(request, response){
  res.status(404);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on 
  http://localhost:${app.get('port')}.`)
})

