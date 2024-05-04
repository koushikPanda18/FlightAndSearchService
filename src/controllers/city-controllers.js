const cityServices=require("../services/city-services");

const cityservice=new cityServices();

//create is a POST request and we will receive the data from the "req.body"
const create=async (req,res)=>{
    try{
        const city=await cityservice.createCity({
            Name:req.body.name,
        });
        return res.status(201).json({
            data:city,
            success:true,
            message:"successfully created a city",
            error:{}
        })
    }
    catch(err){
        return res.status(500).json({
            data:{},
            success:false,
            message:"unable to create a city",
            error:err
        })
    }
}

//destory is a DELETE request and we will receive the data from "request id"
const destroy=async (req,res)=>{
    try{
        const response=await cityservice.deleteCity(req.query.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"successfully deleted a city",
            error:{}
        })
    }
    catch(err){
        return res.status(500).json({
            data:{},
            success:false,
            message:"unable to delete a city",
            error:err
        })
    }
}

//get os a GET request and we will receive the required data from "req id"
const get=async (req,res)=>{
    try{
        console.log(req.query);
        console.groupCollapsed(req.params)
        const city=await cityservice.getCity(req.query.id);
        return res.status(201).json({
            data:city,
            success:true,
            message:"successfully fetched a city",
            error:{}
        })
    }
    catch(err){
        return res.status(500).json({
            data:{},
            success:false,
            message:"unable to fetch a city",
            error:err
        })
    }
}

//update is a PATCH request and we will receive the id of the city to be updated in "req id" and the updated city in "req.body"
const update=async (req,res)=>{
    try{
        const city=await cityservice.updateCity(req.query.id,req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"successfully updated a city",
            error:{}
        })
    }
    catch(err){
        return res.status(500).json({
            data:{},
            success:false,
            message:"unable to updated a city",
            error:err
        })
    }
}
const getAll=async(req,res)=>{
    try{
        const city=await cityservice.getAllCity();
        return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully fetched all cities",
            error:{}
        })
    }
    catch{err}{
        return res.status(500).json({
            data:{},
            success:false,
            message:"unable to fetch all cities",
            error:err
        })
    }
}

module.exports={
    create,
    destroy,
    get,
    update,
    getAll
}