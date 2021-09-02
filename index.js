const express=require("express");
const app=new express();
const port=process.env.PORT||8000;
const db=require('./models');

const apiRouter=require('./routes/apiroute');
app.use(apiRouter);


app.use(express.urlencoded({extended:true}));
app.use(express.json());






db.sequelize.sync().then(()=>{
    app.listen(port,()=>
    console.log(`listening to port ${port}`));
});