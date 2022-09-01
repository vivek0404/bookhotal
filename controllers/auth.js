const User = require('../models/User');
const bcrypt = require('bcryptjs');
const createError = require('../utils/error');
const jwt = require('jsonwebtoken');

const register = async(req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        })
        await newUser.save();
        res.status(200).send("user created");
        
    } catch (err) {
        next(err);
    }
}
const login = async(req,res,next)=>{
    try {
        const user = await User.findOne({ username: req.body.username });
        if(!user) return next(createError(404, "User not found!"));
        const isPasswordcorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordcorrect) return next(createError(400, "worng password and user"));
        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.JWTKEY);
        const {password,isAdmin, ...otherdetails} = user._doc
        res.cookie("access_token", token,{
            httpOnly:true
        }).status(200).json({...otherdetails});
        
    } catch (err) {
        next(err);
    }
}

module.exports = register,login;
//module.exports = login;