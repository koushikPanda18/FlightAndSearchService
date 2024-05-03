const express=require('express');
//const cityRepository=require("./repository/city-repository");
const apiRouter=require("./routes/index");

const {PORT}=require("./config/serverconfig");
const bodyParser = require('body-parser');
const cityRepository = require('./repository/city-repository');

const appServer=async()=>{
    //create the express object
    const app=express();

    //setting up middlewares for bodyParser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT,()=>{
        console.log("server statred at port",PORT);
        //console.log(process.env.PORT);
        app.use('/api',apiRouter);
    })
}

appServer();