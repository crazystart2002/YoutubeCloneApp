import jwt from "jsonwebtoken"
import {create_error} from "./errors.js";


export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token
    if (!token) return next(create_error(401, "You are not logged in! First Sign up"))

    jwt.verify(token, process.env.JWt, (err, user) => {
        if (err) return next(create_error(403, "Token is not valid"));
        req.user = user;
        next()
    });


};