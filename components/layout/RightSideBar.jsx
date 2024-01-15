import React from 'react'
import Image from 'next/image'
const RightSideBar = () => {
  return (
    <div className='sticky right-0 top-0 z-20 h-screen w-[300px] xl:w-[350px] flex flex-col gap-12 overflow-auto pl-6 pr-10 py-6 max-lg:hidden'>
      <div className="flex flex-col gap-4">
        <h3 className="text-purple-blue text-heading3-bold">Sponsored</h3>
        <Image
          src="/assets/info4.jpeg"
          alt="ad"
          width={280}
          height={200}
          className="rounded-lg"
        />
        <p className="text-body-bold text-purple-blue">Timeless Radiance</p>
        <p className="text-small-semibold text-light-2">
        Reveal your radiance with our premium cosmetics, meticulously crafted for timeless beauty. Unleash your confidence with our transformative skincare and makeup essentials.
        </p>
      </div>
    </div>
  )
}

export default RightSideBar