'use client';
import { useState,useEffect } from "react";
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/assets/Pulse.png"
import Menu from "./Menu"
import { SignOutButton, SignedIn, UserButton ,useUser} from "@clerk/nextjs"
import { Logout } from "@mui/icons-material"
import Loader from "../loader";

const LeftSideBar = () => {
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

  return loading || !isLoaded ? (
    <Loader />
  ) : (
    <div className='h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden custom-scrollbar'>

      <Link href="/" className="flex flex-row items-center gap-5">
        <Image src={logo} alt="logo" width={60} height={60} />
        <p className="text-heading3-bold text-purple-900">Pulse</p>
      </Link>
    
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-purple-blue">
          <Link href={`/profile/${userData._id}/posts`}>
            <Image  src={userData?.profilePhoto}
              alt="user-image"
              width={50}
              height={50}
              className="rounded-full" />
          </Link>
          <p className="text-small-bold"> {userData?.firstName} {userData?.lastName}</p>
        </div>
        <div className="flex text-purple-blue justify-evenly gap-4">
          <div className="flex flex-col items-center">
          <p className="text-base-bold">{userData?.posts?.length}</p>
            <p className="text-tiny-medium">Posts</p>
          </div>
          <div className="flex flex-col items-center">
          <p className="text-base-bold">{userData?.followers?.length}</p>
            <p className="text-tiny-medium">Followers</p>
          </div>
          <div className="flex flex-col items-center">
          <p className="text-base-bold">{userData?.following?.length}</p>
            <p className="text-tiny-medium">Following</p>
          </div>
        </div>
        <hr />
        <Menu />
        <hr />
        <div className="flex items-center gap-4">
          <UserButton />
          <p className="text-body-bold text-purple-blue ">Manage Account</p>
        </div>

      <SignedIn>
        <SignOutButton>
          <div className="flex cursor-pointer items-center gap-6">
        <Logout sx={{ color: "dark-1", fontSize: "26px" }}/>
        <p className="text-body-bold text-purple-blue">Logout</p>
        </div>
        </SignOutButton>
      </SignedIn>
      </div>
    </div>
  )
}

export default LeftSideBar