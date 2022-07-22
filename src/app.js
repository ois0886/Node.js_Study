const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const path = require('path')
const viewPath = path.join(__dirname, '../views')

app.use(bodyParser.urlencoded({extended: true})) 
app.set('view engine', 'ejs')
app.set('views', viewPath)

app.listen(3000, ()=>{
    console.log(`Server is up and running at 3000 port!`);
})

app.get('/', (req, res)=>{
    res.render('index', { 
        title: '버스 단말기'
    })
})
