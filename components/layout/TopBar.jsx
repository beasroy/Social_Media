'use client';

import { AddPhotoAlternateOutlined, Search, Logout ,Person} from "@mui/icons-material";
import { useState,useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Loader from '../Loader';

import Link from 'next/link';

import { UserButton } from '@clerk/nextjs';
const TopBar = () => {
    const { user, isLoaded } = useUser();

    const [loading, setLoading] = useState(true);

    const [userData, setUserData] = useState({});

    const getUser = async () => {
        const response = await fetch(`/api/user/${user.id}`);
        const data = await response.json();
        setUserData(data);
        setLoading(false);
    };

    useEffect(() => {
        if (user) {
            getUser();
        }
    }, [user]);
    const [search, setSearch] = useState("")
    const router = useRouter();

    return !isLoaded || loading ? (
        <Loader />
      ) : (
        <div className='flex justify-between items-center mt-6'>
            <div className='relative'>
                <input
                    type='text'
                    className='search-bar'
                    placeholder='Search post,people...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                <Search
                    className="search-icon"
                    onClick={() => router.push(`/search/posts/${search}`)}
                />
            </div>
            <div className=' cursor-pointer max-md:hidden' >
                <AddPhotoAlternateOutlined sx={{ color: "teal" }} onClick={() => router.push("/create-post")} />
            </div>
            <div className="flex gap-4 md:hidden">
                <Link href={`/profile/${userData._id}/posts`}>
                    <Person sx={{ fontSize: "35px", color: "teal" }} />
                </Link>
                <UserButton afterSignOutUrl="/sign-in" />
            </div>

        </div>
    )
}

export default TopBar