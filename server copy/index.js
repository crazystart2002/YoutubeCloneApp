import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "./routes/user.js"
import commentRoutes from "./routes/comment.js"
import videoRoutes from "./routes/video.js"
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser"
const app = express()
dotenv.config()
const connect = () => {
    mongoose.connect(process.env.Mongo).then(() => {
        console.log("Connected to Database")
    }).catch((err) => {
        throw err;
    })
};
app.use(cookieParser());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/auth", authRoutes);
app.use((err,req,res,next)=>{
    const status = err.status || 500;
        const message = err.message || "SomeThing went Wrong!";
        return res.status(status).json({
            success:false,
            status,
            message,
        })


})
app.listen(8800, () => {
    connect();
    console.log("Connected to server");
})