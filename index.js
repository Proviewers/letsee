require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/binod',(req , res)=>{
    res.send("Binod Win")
})
app.get('/login',(req,res)=>{
    res.send('<h1> We bbbbbb </h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<a href="youtube.com"> youtube </a>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})