const Hotal = require('../models/Hotel')
const createHotel = async(req,res,next)=>{
    const hotal = new Hotal(req.body);
    try {
        const savedata = await hotal.save();
        res.status(200).json(savedata);
    } catch (err) {
        next(err);
    }
}
const updateHotel = async(req,res,next)=>{
    try {
        const updatedata = await Hotal.findByIdAndUpdate(req.params.id, { $set : req.body },{new:true});
        res.status(200).json(updatedata);
    } catch (err) {
        next(err);  
    }
}
const deleteHotel = async(req,res,next)=>{
    try {
        await Hotal.findByIdAndDelete(req.params.id);
        res.status(200).json("data is deleted");
    } catch (error) {
        next(err);  
    }
}
const getHotel = async(req,res,next)=>{
    try {
        const data = await Hotal.findById(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        next(err);  
    }
}
const getHotels = async(req,res,next)=>{
    try {
        const data = await Hotal.find();
        res.status(200).json(data);
    } catch (err) {
        next(err);  
    }
}
module.exports= {createHotel,updateHotel,deleteHotel,getHotel,getHotels};
//module.exports= updateHotel;
//module.exports= deleteHotel;
//module.exports= getHotel;
//module.exports= getHotels;