import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
    "url": String,
    "likes": String,
    "shares": String,
    "messages": String,
    "song": String,
    "channel": String,
    "desc": String,
});

export default mongoose.model('tiktokVideos', tiktokSchema);