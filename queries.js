const Pool = require('pg').Pool
const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

const postActivity = (request, response) => {
  const { visitDate } = new Date()
  db.query('INSERT INTO activity (visit_date) VALUES($1) RETURNING *', [visitDate], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send({"id": results.rows[0].id})
  })
}

module.exports = {postActivity}