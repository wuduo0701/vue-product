// const mongoose = require('mongoose');
// mongoose.connect(`mongodb://localhost:27017/login`)
const express = require('express');
const app = express();

app.get('/',(req, res) => {
  res.send('hello')
})
app.post('/api/v1/login', (req, res) => {
  res.send({
    status: "200",
    message: "ok"
  })
})
app.listen(3000, () => {
  console.log('服务器上线了')
})