import mongoose, { Types } from "mongoose";

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: {
        type: String,
        default: "https://5.imimg.com/data5/SELLER/Default/2021/5/WA/LQ/KN/100543921/job-portal-development-service-500x500.jpg"
    },
    applied: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
})

export const Post = mongoose.model('Post',PostSchema)