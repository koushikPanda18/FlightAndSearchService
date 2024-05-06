const express=require('express');
const router=express.Router();

const cityController=require("../../controllers/city-controllers");

router.post('/city',cityController.create);
router.get('/city',cityController.get);
router.get('/cities',cityController.getAll);
router.delete('/city',cityController.destroy);
router.patch('/city',cityController.update);
router.get('/citiesin',cityController.getAirportInCity);
router.post('/addcities',cityController.createAll);


module.exports=router;