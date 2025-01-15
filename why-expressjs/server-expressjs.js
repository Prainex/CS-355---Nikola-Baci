const express = require('express')
const app = express()
const port = 3000


app.use(express.static('./why-expressjs/'))

app.get('/', (req, res) => {
  res.sendFile('/Users/arvindmajumder/CS355/why-expressjs/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})