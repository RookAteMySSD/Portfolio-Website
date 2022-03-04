const express = require('express')
const path = require('path')

const app = express()
const port = 3000
const LocalTest = path.join(__dirname, '../public')

app.use(express.static(LocalTest))

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})