import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(

    {
        userId: {
            type: String,
            required: true,
        },
        post: {
            type: String,
            required: true,
        },
    }
);




const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;



// {
//     title: String,
//     description: String,
// },
// {
//     timestamps: true,
// }



