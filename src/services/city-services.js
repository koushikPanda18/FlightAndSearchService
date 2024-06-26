const cityRepository=require("../repository/city-repository");

//creating city repository outside class(check once)
const cityrepository=new cityRepository();



class cityServices{
    //creating cityRepository object inside class through constructor
    // constructor(){
    //     this.cityrepo=new cityRepository();
    // }


    async createCity(data){
        try{
            const city=await cityrepository.createCity(data);
            return city;
        }
        catch(err){
            console.log("something happened in the service layer");
            throw(err);
        }
    }
    async deleteCity(cityid){
        try{
            const response=await cityrepository.deleteCity(cityid);
            return response;
        }
        catch(err){
            console.log("something happened in the service layer");
            throw(err);
        }
    }
    async updateCity(cityid,data){
        try{
            const city=await cityrepository.updateCity(cityid,data)
            return city;
        }
        catch(err){
            console.log("something happened in the service layer");
            throw(err);
        }
    }
    async getCity(cityid){
        try{
            const city=await cityrepository.getCity(cityid);
            return city;
        }
        catch(err){
            console.log("something happened in the service layer");
            throw(err);
        }
    }
    async getAllCity(data){
        try{
            const city=await cityrepository.getAllCity(data.name);
       
            return city;
        }
        catch(err){
            console.log("something happened in service layer");
            throw(err);
        }
    }
    async getAirportInCity(data){
        try{
            const city=await cityrepository.getAirportsInCity(data);
            return city;
        }
        catch(err){
            console.log("something happened in service layer");
            throw(err);
        }
    }
    async createAllCity(data){
        try{
            const cities=await cityrepository.createAllCity(data);
            return cities;
        }
        catch(err){
            console.log("something happened in service layer");
            throw(err);
        }
    }
    
}
module.exports=cityServices;