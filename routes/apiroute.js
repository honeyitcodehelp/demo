const express=require("express");
// const router=new express.Router();
 const db= require("../models");
// router.get("/all",(req,res)=>{
//       db.Todo.findAll().then((data)=>res.send(data));
//     //  res.send("hello from honey");
// })


const router=new express.Router(); // create new router 
router.get("/all",(req,res)=>{     // need to define the router
    db.Todo.findAll().then((data)=>{
        res.send(data)
    });
    
})


module.exports=router;      