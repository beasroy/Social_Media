"use client";
import { sidebarLinks } from '@/constants';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Menu = () => {
    const pathname = usePathname();
  return (
    <div className='flex flex-col gap-2'>
        {sidebarLinks.map((link)=>{
            const isActive = pathname === link.route;
            return (
                <Link
                key={link.label}
                href={link.route}
                className={`flex gap-4 justify-start rounded-lg py-2 px-4 ${
                    isActive && "bg-light_blue"
                  }`}
              >
                {link.icon} <p className="text-purple-blue">{link.label}</p>
              </Link> );
        })}
        
    </div>
  )
}

export default Menu