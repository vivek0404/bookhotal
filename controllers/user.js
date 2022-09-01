const User = require('../models/User')
const createUser = async(req,res,next)=>{
    const user = new User(req.body);
    try {
        const savedata = await user.save();
        res.status(200).json(savedata);
    } catch (err) {
        next(err);
    }
}
const updateUser = async(req,res,next)=>{
    try {
        const updatedata = await User.findByIdAndUpdate(req.params.id, { $set : req.body },{new:true});
        res.status(200).json(updatedata);
    } catch (err) {
        next(err);  
    }
}
const deleteUser = async(req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("data is deleted");
    } catch (error) {
        next(err);  
    }
}
const getUser = async(req,res,next)=>{
    try {
        const data = await User.findById(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        next(err);  
    }
}
const getUsers = async(req,res,next)=>{
    try {
        const data = await User.find();
        res.status(200).json(data);
    } catch (err) {
        next(err);  
    }
}
module.exports= createUser,updateUser,deleteUser,getUser,getUsers;
//module.exports= updateUser;
//module.exports= deleteUser;    
//module.exports= getUser;
//module.exports= getUsers;