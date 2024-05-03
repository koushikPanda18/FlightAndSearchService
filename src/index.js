const express=require('express');
//const cityRepository=require("./repository/city-repository");

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

        const repo=new cityRepository();
        //const repo1=new cityRepository();
        repo.createCity({Name:"New york"});
        // repo1.createCity({Name:"New delhi"});
        // const repo=new cityRepository();
        // repo.deleteCity(1);
    })
}

appServer();