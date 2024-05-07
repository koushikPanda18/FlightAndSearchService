const flightService=require('../services/flight-service');

const flightservice=new flightService();

const create=async(req,res)=>{
    try{
        const flight=await flightservice.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            message:"successfully created a flight",
            error:{}
        })
    }
    catch(err){
        return res.status(500).json({
            data:{},
            success:false,
            message:"unable to create a flight",
            error:err
        })
    }
}
const get=async(req,res)=>{
    try{
        const flight=await flightservice.getFlight(req.body.id);
        return res.status(201).json({
            data:flight,
            success:true,
            message:"successfully fetched a flight",
            error:{}
        })
    }
    catch(err){
        return res.status(500).json({
            data:{},
            success:false,
            message:"unable to fetch a flight",
            error:err
        })
    }
}
const getAll=async(req,res)=>{
    try{
        const flight=await flightservice.getAllFlight(req.query);
        return res.status(201).json({
            data:flight,
            success:true,
            message:"successfully fetched all flights",
            error:{}
        })
    }
    catch(err){
        return res.status(500).json({
            data:{},
            success:false,
            message:"unable to fetch all flights",
            error:err
        })
    }
}

module.exports={
    create,
    get,
    getAll
}


// flightNumber
// airplaneId
// departureAirportId
// arrivalAirportId
// departureTime
// arrivalTime
// price
// boardingGate
// totalSeats
