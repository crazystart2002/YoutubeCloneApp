import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    img: {
        type: String,
    },
    password:{
        type:String,
        required:true,
    },
    subscribers:{
        type: Number,
        default:0,
    },
    subscribedUser:{
        type:[String]
    }

},{timestamps: true}
);
export default mongoose.model("User",UserSchema);