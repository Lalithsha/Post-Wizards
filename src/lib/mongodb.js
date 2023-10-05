import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to mongodb")
    }
    catch (err) {
        console.log(err.message, "from mongodb.js")
    }
}


export default connectMongoDB;


