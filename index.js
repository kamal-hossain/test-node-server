const moment = require('moment')
const express = require('express')

const app = express()

console.log(
  `Server has started. Current time: ${moment
    .utc()
    .local()
    .format('YYYY-DD-MM HH:mm:ss')}`
)

app.get('/', (req, res) => {
  res.send(
    `GET req: Current time: ${moment
      .utc()
      .local()
      .format('YYYY-DD-MM HH:mm:ss')}`
  )
})

app.listen(5001)
