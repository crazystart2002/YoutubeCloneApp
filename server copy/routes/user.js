import express from "express";
import {delete1, getUser, like, subscribe, unlike,  unsubscribe, update} from "../controllers/user.js";
import {verifyToken} from "../verifyToken.js";


const router = express.Router();

//update user
router.put("/:id", verifyToken,update)

//delete user
router.delete("/find/:id",verifyToken, delete1)

//get a user
router.put("/:id", getUser)

//subscribe a user
router.put("/sub/:id",verifyToken, subscribe)

//unsubscribe a user

router.put("/unsub/:id",verifyToken, unsubscribe)
//like a video
router.put("/like/:videoId",verifyToken, like)

//unlike a video
router.put("/like/:videoId",verifyToken, unlike)





export default router;