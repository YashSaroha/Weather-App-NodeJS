const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const path = require("path")
const hbs = require("hbs")

const staticPath = path.join(__dirname , "../public")
const templatePath = path.join(__dirname , "../src/templates/views")
const partialPath = path.join(__dirname , "../src/templates/partials")

app.use(express.static(staticPath))
app.set('view engine' , "hbs")
app.set('views' , templatePath)
hbs.registerPartials(partialPath)

app.get("/" , (req, res)=>{
    res.render("index")
})
app.get("/about" , (req, res)=>{
    res.render("about")
})
app.get("/weather" , (req, res)=>{
    res.render("weather")
})

app.listen(port , ()=>{
    console.log(`server running at ${port}`)
})