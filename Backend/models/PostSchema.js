import mongoose, { Types } from "mongoose";

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: {
        type: String,
        default: "https://asset.cloudinary.com/dpsb0ysde/16baf60d9d60b097e693376a67549a90"
    },
    applied: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
})

export const Post = mongoose.model('Post',PostSchema)