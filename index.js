
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/tube",(req,res)=>{
    res.send("Youube. learning..")
})

app.get("/logout",(req, res)=>{
    res.send('<h1>Hello, you are logout..</h1>')
})

app.get("/login",(req,res)=>{
  res.send('<p>Hello.. Good mornng...</p>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})