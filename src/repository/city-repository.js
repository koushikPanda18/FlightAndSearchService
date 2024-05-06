const {Op  } =require('sequelize')
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
            return true;
        }
        catch(err){
            console.log("something happened in the repository layer for deletion");
            throw(err);
        }
    }
    async updateCity(cityid,data){
        try{
            //First approach for updation but it will not return updated object
            // const city=await City.update(
            //     {
            //         Name:data.name
            //     },
            //     {
            //         where:{
            //             id:cityid
            //         }
            //     }
            // )
            //other way to do an update and it returns updated object
            const city=await City.findByPk(cityid);
            city.Name=data.name;
            await city.save();
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
    async getAllCity(data){
        try{
            //console.log(typeof(data))
            if(data){
                const city=await City.findAll({
                    where:{
                        name: {
                            [Op.startsWith]: data
                        }
                    }
                });
                return city;
            }
            else{
                const city=await City.findAll();
                return city;
            }
        }
        catch(err){
            console.log("something happened in the repository layer");
            throw(err);
        }
    }
    async getAirportsInCity(data){
        try{
            const city1=await City.findOne({where:{
                name:data
            }});
    
            //console.log(city1);
            const res=await city1.getAirports();
            return res;
        }catch(err){
            console.log("something happened in the repository layer");
            throw(err);
        }
    }
    async createAllCity(data){
        try{
            console.log(data);
            const cities=await City.bulkCreate(data);
            return cities;
        }
        catch(err){
            console.log(err);
            console.log("something happened in the repository layer");
            throw(err);
        }
    }
}
module.exports=cityRepository;