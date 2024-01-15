'use client';
import PostCard from "@/components/card/PostCard";
import { useUser } from "@clerk/nextjs";
import { useState,useEffect } from "react";
import Loader from "@/components/Loader";

const LikedPosts = () => {
    const {user,isLoaded}= useUser();

    const [loading, setLoading] = useState(true)

    const [userData, setUserData] = useState({})

    const getUser = async () => {
        const response = await fetch(`/api/user/${user.id}`)
        const data = await response.json()
        setUserData(data)
        setLoading(false)
      }
    
      useEffect(() => {
        if (user) {
          getUser()
        }
      }, [user])

 return loading || !isLoaded ? <Loader /> : (
    <div className='flex flex-col gap-9'>
      {userData?.likedPosts?.map((post) => (
        <PostCard key={post._id} post={post} creator={post.creator} loggedInUser={user} update={getUser} />
      ))}
    </div>
  )
}

export default LikedPosts