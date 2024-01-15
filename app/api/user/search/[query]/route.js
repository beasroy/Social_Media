import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongodb/mongoose";

export const GET = async (req, { params }) => {

    const { query } = params;
    try {
        await connectToDB();
        const searchedUser = await User.find({
            $or: [
                { usename: { $regex: query, $options: "i" } },
                { firstName: { $regex: query, $options: "i" } },
                { lastName: { $regex: query, $options: "i" } },
            ]
        }).populate("posts savedPosts likedPosts followers following").exec();
        return new Response(JSON.stringify(searchedUser), { status: 200 })

    } catch (err) {
        console.log(err);
        return new Response("Failed to get user by search", { status: 500 })
    }
}