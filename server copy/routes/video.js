import express from "express";

import {verifyToken} from "../verifyToken.js";
import {addVideo, deleteVideo, getByTag, randomVideos, search, sub, trend, updateVideo} from "../controllers/video.js";


const router = express.Router()

// create a video
router.post("/", verifyToken, addVideo)
router.put("/:id", verifyToken, updateVideo)
router.delete("/:id", verifyToken, deleteVideo)
router.put("/view/:id", addVideo)
router.get("/trend", trend)
router.get("/random", randomVideos)
router.get("/sub", verifyToken, sub)
router.get("/search", search)
router.get("/tags", getByTag)

export default router;