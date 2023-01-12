var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if(err) {
    console.error(err.message)
    throw err
  }else{
    console.log('Connected to the SQLite database.')
    db.run(`CREATE TABLE activity (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      visit_date text
    )`,
    (err) => {
      if(err) {
        console.log("table already created")
      }else{
        var insert = 'INSERT INTO activity (visit_date) VALUES (?)'
        db.run(insert, ['2023-01-12T03:10:18.250Z'])
      }
    })
  }
})

module.exports = db