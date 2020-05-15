const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/api', (req, res) => res.send('Hello from the API'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
