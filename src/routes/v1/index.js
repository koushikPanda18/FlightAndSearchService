const express=require('express');
const router=express.Router();

const cityController=require("../../controllers/city-controllers");
const flightController=require('../../controllers/flight-controller');


//City routes
router.post('/city',cityController.create);
router.get('/city',cityController.get);
router.get('/cities',cityController.getAll);
router.delete('/city',cityController.destroy);
router.patch('/city',cityController.update);
router.get('/citiesin',cityController.getAirportInCity);
router.post('/addcities',cityController.createAll);


//Flights routes
router.post('/flights',flightController.create);
router.get('/flight',flightController.get);
router.get('/allflights',flightController.getAll);

module.exports=router;