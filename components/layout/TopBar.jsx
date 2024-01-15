'use client';
import React, { useState } from 'react'
import { AddPhotoAlternateOutlined, Search, Logout } from "@mui/icons-material";
import { SignOutButton, SignedIn } from "@clerk/nextjs"

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../public/assets/Pulse.png"
const TopBar = () => {
    const [search, setSearch] = useState("")
    const router = useRouter();
    return (
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
                <SignedIn>
                    <SignOutButton>
                        <div className="flex cursor-pointer items-center md:hidden">
                            <Logout sx={{ color: "dark-1", fontSize: "26px" }} />
                        </div>
                    </SignOutButton>
                </SignedIn>
                <Link href="/" className='md:hidden'>
                    <Image src={logo} alt='profile image' width={50} height={50} className='rounded-full md:hidden' />
                </Link>
            </div>

        </div>
    )
}

export default TopBar