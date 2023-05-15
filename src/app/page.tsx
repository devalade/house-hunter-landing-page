import Image from 'next/image'
import Link from 'next/link'
import {PropsWithChildren} from 'react'

export default function Home() {
  return (
    <main className="relative w-full h-screen">
          <span className='absolute -left-28  top-6 bg-[#82F7FF] w-60 aspect-square blur-[120px] '></span>
          <span className='absolute left-32  -top-24 bg-[#82FFD2] w-60 aspect-square blur-[120px] '></span>
      <div className='container'>
        <nav className='h-[80px] flex items-center justify-between'>
        <div className="relative flex w-24">
          <Image
            className="relative "
            src="/logo.svg"
            alt="House Hunter"
            width={180}
            height={37}
            priority
          />
          </div> 

          <div className='flex items-center gap-x-2'>
            <NavItem href='#'>About Us</NavItem>
            <NavItem href='#'>Article</NavItem>
            <NavItem href='#'>Property</NavItem>
          </div>
        </nav>
      </div>
    </main>
  )
}

type NavItemProps  = PropsWithChildren<{href: string}>;
function NavItem(props: NavItemProps) {
  const {href, children} = props;
  
  return  <Link href={href} className='block px-4 py-2 text-sm text-gray-600 bg-gray-100 border border-gray-800 rounded-full' >{children}</Link>
}


