const express = require('express');
require('./db/config.js');
const userEntity=require('./db/UserEntity.js');

const app = express();
app.use(express.json());

app.post("/query",async(req,resp)=>{
  let user=new userEntity(req.body);
  let result=await user.save();
  resp.send(req.body);
})


app.listen(2000, () => {
  console.log('Server is running on port 2000');
});
