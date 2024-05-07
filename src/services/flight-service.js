const flightRepository=require('../repository/flight-repository');
const airplaneRepository=require('../repository/airplane-repository');

const {checkValidTime,checkValidPriceRange}=require('../utils/checkValid');

class flightService{
    constructor(){
        this.flightrepository=new flightRepository();
        this.airplanerepository=new airplaneRepository();
    }
    async createFlight(data){
        try{
            //console.log(data);
            if(!checkValidTime(data.departureTime,data.arrivalTime)){
                throw{error:'Arrival time can not be less than departure time'}
            }
            const airplane=await this.airplanerepository.getAirplane(data.airplaneId);
            console.log(airplane)
            const flight=await this.flightrepository.createFlight({
                ...data,
                totalSeats:airplane.capacity
            });
            return flight;
        }
        catch(err){
            console.log("something happened in the service layer of flight");
            throw(err);
        }
    }
    async getFlight(data){
        try{
            const flight=await this.flightrepository.getFlight(data);
            return flight;
        }
        catch(err){
            console.log("something happened in the service layer of flight");
            throw(err);
        }
    }
    async getAllFlight(data){
        try{
            if(!checkValidPriceRange(data.minPrice,data.maxPrice)){
                throw{error:'minPrice should be less than maxPrice'}
            }
            const flight=await this.flightrepository.getAllFlight(data);
            return flight;
        }
        catch(err){
            console.log("something happened in the service layer of flight");
            throw(err);
        }
    }
}
module.exports=flightService;
