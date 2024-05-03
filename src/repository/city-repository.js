
const {City} = require("../models/index");

class cityRepository{
    async createCity(name){
        try{
            //console.log(name);
            const city=await City.create(name);
            return city;
        }
        catch(err){
            console.log("something happened in the repository layer");
            throw(err);
        }
    }
    async deleteCity(cityid){
        try{
            await City.destroy({
                where:{
                    id:cityid
                }
            })
        }
        catch(err){
            console.log("something happened in the repository layer");
            throw(err);
        }
    }
    async updateCity(cityid,data){
        try{
            const city=await City.update(data,{
                where:{
                    id:cityid
                }
            })
            return city;
        }
        catch(err){
            console.log("something happened in the repository layer");
            throw(err);
        }
    }
    async getCity(cityid){
        try{
            const city=await City.findByPk(cityid);
            return city;
        }
        catch(err){
            console.log("something happened in the repository layer");
            throw(err);
        }
    }
}
module.exports=cityRepository;