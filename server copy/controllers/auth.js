import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs"
import {create_error} from "../errors.js";
import jwt from "jsonwebtoken";

export const signup =async (req,res,next)=>{

try{
    const salt= bcrypt.genSaltSync(10);
    const hash =bcrypt.hashSync(req.body.password,salt);
    const newUser= new User({...req.body, password: hash});
    await newUser.save();
    res.status(200).send("User registered");
}catch(err){
    next(err);
}
};

export const signin =async (req,res,next)=>{

try{
    const  user = await User.findOne({name:req.body.name})
    if(!user) return next(create_error(404,"User not found"))
    const validate_password=await bcrypt.compare(req.body.password, user.password)
    if(!validate_password) return next(create_error(400,"Wrong password"))
    const{password,...others}=user._doc
    const token= jwt.sign({id:user._id},process.env.JWt)
    res.cookie("access_token",token,{
        httpOnly:true
    }).status(200).json(others)
}catch(err){
    next(err);
}
}