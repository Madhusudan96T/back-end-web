const express = require('express');
const cors= require('cors');
require('./db/config.js');
const userEntity=require('./db/UserEntity.js');
const lawyers=require('./db/lawyerEntity');

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
  let users = await userEntity.find({ ticket });
  if(users.length>0){
    resp.send(users[0]);
  } else{
    resp.send({result: 'no user found'})
  }
})


app.post("/addlawyer",async(req,resp)=>{
  let lawyer=new lawyers(req.body);
  let result=await lawyer.save();
  resp.send(result);

})

app.delete("/ticket/:id",async(req,resp)=>{
  const result = await userEntity.deleteOne({name:req.params.id})
  resp.send(result)
});

app.get("/lawyers_api",async(req,resp)=>{
  let allLawyers=await lawyers.find();
  if(allLawyers.length>0){
    resp.send(allLawyers);
  }else{
    resp.send({result:"No lawyers found"});
  }

})


app.get("/lawyer/:id",async(req,resp)=>{
  let result=await lawyers.findOne({name:req.params.id});
  if(result){
    resp.send(result);
  }else{
    resp.send({result:"No lawyers found"});
  }

})


app.put("/update_lawyer/:id", async(req,resp)=>{
  let result= await lawyers.updateOne(
    {name:req.params.id},
    {
      $set:req.body
    })
    resp.send(result)
})


app.listen(2000, () => {
  console.log('Server is running on port 2000');
});
