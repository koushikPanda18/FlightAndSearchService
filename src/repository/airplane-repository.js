const {Airplane}=require('../models/index');

class airplaneRepository{
    async getAirplane(airplaneId){
        try{
            const airplane=await Airplane.findByPk(airplaneId);
            return airplane;
        }
        catch(err){
            console.log("something happened in the repository layer of airplane");
            throw(err);
        }
    }
}

module.exports=airplaneRepository;