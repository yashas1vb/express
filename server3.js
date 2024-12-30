const express = require("express");
const app = express();

const random = Math.floor(Math.random()*100);
const PORT = 3003;
app.get('/',(req,res)=>{
    res.send({"random" : random});
});

app.listen(PORT,()=>{
    console.log(`Server is running at port : ${PORT}`);
});