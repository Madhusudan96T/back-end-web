const express = require('express');
const cors= require('cors');
require('./db/config.js');
const userEntity=require('./db/UserEntity.js');

const app = express();
app.use(express.json());
app.use(cors());

app.post("/query",async(req,resp)=>{
  let user=new userEntity(req.body);
  let result=await user.save();
  resp.send(req.body);
})

app.post("/fetchTicket",async(req,resp)=>{
  const { ticket } = req.body;
  let user = await userEntity.findOne({ ticket });
  if(user){
    resp.send(user)
  } else{
    resp.send({result: 'no user found'})
  }
})

app.listen(2000, () => {
  console.log('Server is running on port 2000');
});
