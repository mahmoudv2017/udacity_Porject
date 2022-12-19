import express from "express";
import routes from './Routes/index'

const app = express();

app.use("/api" , routes)

app.get("/" , (req,res) => {
    res.send("hello world")
})

app.listen(5000 , ()=>console.log("listening on http://localhost:5000"))

export default app