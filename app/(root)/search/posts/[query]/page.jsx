'use client';

import Loader from "@/components/Loader";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import PostCard from "@/components/card/PostCard";

const SearchPost = () => {

    const { query } = useParams();

    const [searchedPosts, setSearchedPosts] = useState([]);

    const [loading, setLoading] = useState(true);

    const getSearchedPosts = async () => {
        const response = await fetch(`/api/post/search/${query}`);
        const data = await response.json();
        setSearchedPosts(data);
        setLoading(false);
    }
    useEffect(() => {
        getSearchedPosts();
    }, [query])

    const { user, isLoaded } = useUser();

    return loading || !isLoaded ? (
        <Loader />
    ) : (
        <div className="flex flex-col gap-10">
            <div className="flex gap-6">
                <Link className="tab bg-purple-blue" href={`/search/posts/${query}`}>
                    Posts
                </Link>
                <Link className="tab bg-teal" href={`/search/people/${query}`}>
                    People
                </Link>
            </div>

            {searchedPosts.map((post) => (
                <PostCard key={post._id} post={post} creator={post.creator} loggedInUser={user} update={getSearchedPosts} />
            ))}
        </div>
    )
}

export default SearchPost