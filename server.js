const express=  require("express")
const router = express.Router()
const app = express()

const path = require("path")

const port = process.env.PORT || 5000

router.get("/", (req, res, next)=>{
    res.render("index", {title: "Express"})
})

// if (process.env.NODE_ENV === "production"){
console.log("here")
app.use(express.static("client/build"))
app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname+"/client/build/index.html"))
})
// }

app.listen(port, (err) => {
    if (err) return console.log(err)
    console.log("Server running on port: ", port)
})