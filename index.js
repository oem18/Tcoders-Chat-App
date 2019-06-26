import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    req.send("hello, world");
})

app.listen(port, ()=> console.log(`chat app listening on port ${port}`));