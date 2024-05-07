const{Flights}=require('../models/index');
const {Op}=require('sequelize')

class flightRepository{
    //private function
    #createFilter(data){
        let filter={};
        if(data.departureAirportId){
            filter.departureAirportId=data.departureAirportId;
        }
        if(data.arrivalAirportId){
            filter.arrivalAirportId=data.arrivalAirportId;
        }
        if(data.minPrice && data.maxPrice){
            console.log(data.minPrice);
            Object.assign(filter,{
             [Op.and]:[
                {price:{[Op.gte]:data.minPrice}},
                {price:{[Op.lte]:data.maxPrice}}]
            })
            // price:{[Op.between]:[
            //     {price:{[Op.gte]:data.minPrice}},
            //     {price:{[Op.lte]:data.maxPrice}}
            // ]}   NOT WORKING USING BETWEEN OPERATOR
           
        }
        if(data.minPrice){
            Object.assign(filter,{
                price:{[Op.gte]:data.minPrice}
            });
        }
        if(data.maxPrice){
            Object.assign(filter,{
                price:{[Op.lte]:data.maxPrice}
            })
        }
        console.log(filter);
        return filter;
    }



    async createFlight(data){
        try{
            const flight=await Flights.create(data);
            return flight;
        }
        catch(err){
            console.log("something happened in the repository layer of flight");
            throw(err);
        }
    }
    async getFlight(data){
        try{
            const flight=await Flights.findByPk(data);
            return flight;
        }
        catch(err){
            console.log("something happened in the repository layer of flight");
            throw(err);
        }
    }
    async getAllFlight(data){
        try{
            //console.log(data)
            const filterObject=this.#createFilter(data);
            //console.log(filterObject)
            const flight=await Flights.findAll({
                where: filterObject
            });
            return flight;
        }
        catch(err){
            console.log("something happened in the repository layer of flight");
            throw(err);
        }
    }
}
module.exports=flightRepository;