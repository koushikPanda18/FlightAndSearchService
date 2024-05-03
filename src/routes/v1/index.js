const express=require('express');
const router=express.Router();

const cityController=require("../../controllers/city-controllers");

router.post('/city',cityController.create);
router.get('/city',cityController.get);
router.delete('/city',cityController.destroy);
router.patch('/city',cityController.update);

module.exports=router;