import express from "express";
import {create_error} from "../errors.js";
import User from "../models/User.js";

export const update = async (req, res, next) => {
    console.log(req.params.id);
    console.log(req.user.id);
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true})
            res.status(200).json(updatedUser)
        } catch (err) {
            next(err)
        }
    } else {
        return next(create_error(403, "You can only update your account"))
    }
}
export const delete1 = async (req, res, next) => {
    console.log(req.params.id);
    console.log(req.user.id);
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndDelete(req.params.id, );
            res.status(200).json("User has been removed")
        } catch (err) {
            next(err)
        }
    } else {
        return next(create_error(403, "You can only delete your account"))
    }

}
export const getUser =async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        next(err)
    }
}
export const subscribe =async (req, res, next) => {
try{
    await User.findByIdAndUpdate(req.user.id,{
        $push:{subscribedUser:req.params.id}
    })
    await User.findByIdAndUpdate(req.params.id,{
        $inc:{subscribers: 1},
    });
    res.status(200).json("Subscription successful")

    }catch(err){
        next(err)
    }
}
export const unsubscribe =async (req, res, next) => {
try{
 await User.findByIdAndUpdate(req.user.id,{
        $pull:{subscribedUsers:req.params.id}
    })
    await User.findByIdAndUpdate(req.params.id,{
        $dec:{subscribers: -1},
    });
    res.status(200).json("Subscription successful")

    }catch(err){
        next(err)
    }
}
export const like =async (req, res, next) => {
try{

    }catch(err){
        next(err)
    }
}
export const unlike =async (req, res, next) => {
try{

    }catch(err){
        next(err)
    }
}