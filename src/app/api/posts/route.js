import connectMongoDB from "@/lib/mongodb";
import Post from "@/models/post"
import { NextResponse } from "next/server";

export async function POST(request) { // create
    const { userId, post } = await request.json();
    await connectMongoDB();
    await Post.create({ userId, post });
    return NextResponse.json({ message: "Post Created" }, { status: 201 });
}



export async function GET(request) {
    const { userId } = request.query;
    await connectMongoDB();

    // Find all posts where userId matches the passed userId
    const posts = await Post.find({ userId: userId });

    // If no posts are found, return an empty array
    if (!posts) {
        return NextResponse.json([], { status: 200 }, { message: "GET request failed " });
    }

    // Return all found posts
    return NextResponse.json({ posts }, { status: 200 }, { message: "GET Successful" });
}



// // single topic by id
// export async function GET(request, { params }) {
//     const { id } = params;
//     await connectMongoDB();
//     const topic = await Topic.findOne({ _id: id });
//     return NextResponse.json({ topic }, { status: 200 });
// }



// export async function GET() { // read
//     await connectMongoDB();
//     const posts = await Post.find();
//     return NextResponse.json({ posts }, { message: "Get successful" });
// }

// export async function DELETE(request) {
//     const id = request.nextUrl.searchParams.get("id");
//     await connectMongoDB();
//     await Topic.findByIdAndDelete(id);
//     return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
// }









