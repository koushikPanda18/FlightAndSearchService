const express=require('express');

const {PORT}=require("./config/serverconfig");

const appServer=async()=>{
    //create the express object
    const app=express();
    app.listen(PORT,()=>{
        console.log("server statred at port",PORT);
        //console.log(process.env.PORT);
    })
}

appServer();