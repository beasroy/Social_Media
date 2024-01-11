import Link from "next/link"
import Image from "next/image"
import logo from "../../public/assets/Pulse.png"
import Menu from "./Menu"
import { SignOutButton, SignedIn, UserButton } from "@clerk/nextjs"
import { Logout } from "@mui/icons-material"

const LeftSideBar = () => {
  return (
    <div className='h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden custom-scrollbar'>
      <Link href="/">
        <Image src={logo} alt="logo" width={60} height={60} />
      </Link>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-purple-blue">
          <Link href="/">
            <Image src={logo}
              alt="user-image"
              width={50}
              height={50}
              className="rounded-full" />
          </Link>
          <p className="text-small-bold">Bipasha Roy</p>
        </div>
        <div className="flex text-purple-blue justify-evenly gap-4">
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
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