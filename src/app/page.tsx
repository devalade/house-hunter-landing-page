import Image from 'next/image'
import Link from 'next/link'
import {PropsWithChildren} from 'react'
import {Button} from './components/ui';
import {ChevronRight} from './icon/chevon-right';
import {LocationIcon} from './icon/location';

export default function Home() {
  return (
    <main className="relative w-full h-screen">
          <span className='absolute -left-28  top-6 bg-[#82F7FF] w-60 aspect-square blur-[120px] '></span>
          <span className='absolute left-32  -top-24 bg-[#82FFD2] w-60 aspect-square blur-[120px] '></span>
      <div className='container'>
        <nav className='h-[80px] flex items-center justify-between relative z-50'>
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

          <div className='flex gap-x-8'>
            <span className='flex items-center gap-x-2'>
              <NavItem href='#'>About Us</NavItem>
              <NavItem href='#'>Article</NavItem>
              <NavItem href='#'>Property</NavItem>

            </span>
              <Button variant="secondary">
                <Link href="">Sign Up! </Link>
              </Button>
          </div>
        </nav>

        <div className='w-1/2 mt-12'>
        <div className="relative z-50 space-y-8">
          <div>
            <div className="overflow-hidden">
              <p className=" leading-[1.18]  capitalize text-5xl font-bold text-brandBlue-700 animate-reveal  ">
                find the place to 
              </p>
            </div>
            <div className="overflow-hidden">
              <p className='leading-[1.18]  capitalize text-5xl font-bold text-brandBlue-700 animate-reveal'>live <span className="text-white text-shadow ">your dreams</span> <br /></p>
            </div>
            <div className="overflow-hidden">
              <p className='leading-[1.18]  capitalize text-5xl font-bold text-brandBlue-700 animate-reveal'>easily here</p>
            </div>
          </div>
                  <p className="w-8/12 text-sm text-brandGray-500" >Everything you need about finding your place to live will be here, where it will be easier for you</p>
                  <div className="flex items-center w-4/5 py-1 pl-5 pr-1 border rounded-full ">
                    <LocationIcon className='w-6 h-6 fill-brandYellow-500' />                
                    <input className="w-full ml-3 text-xs appearance-none oultine-none focus-within:outline-none placeholder:text-brandGray-500 placeholder:font-semibold" placeholder="Search for the location you want!" type="text" />
                      <Button variant="primary" >
                        Search
                        <ChevronRight className='text-current' />                     
                      </Button>
                  </div>

                  <div>
                    <p className="p-0 text-sm text-brandGray-500">Our Partnership </p>
                    <div className="flex w-full h-full mt-6 gap-x-4">
                      <div className="relative flex-none w-20 h-12">
                        <img src="/2.png" alt="" className="absolute inset-0 object-cover w-full h-full rounded-lg" loading="lazy" />
                      </div>
                      <div className="relative flex-none w-20 h-12">
                        <img src="/3.png" alt="" className="absolute inset-0 object-cover w-full h-full rounded-lg" loading="lazy" />
                      </div>
                      <div className="relative flex-none w-20 h-12">
                        <img src="/4.png" alt="" className="absolute inset-0 object-cover w-full h-full rounded-lg" loading="lazy" />
                      </div>
                      <div className="relative flex-none w-20 h-12">
                        <img src="/5.png" alt="" className="absolute inset-0 object-cover w-full h-full rounded-lg" loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>

        

        </div>
      </div>
      
      <div className='fixed top-0 w-full'>
        <div className='relative flex w-1/2 h-full ml-auto '>
        <Image
          className="relative "
          src="/cover.png"
          alt="An house image"
          width={2000}
          height={1000}
          priority
          />
          <div className='absolute flex bottom-8 left-8'>
            <div className=' flex p-6 bg-white rounded-[32px] [&_img]:-ml-6 pl-12 [&_img]:border-[3px] [&_img]:border-white'>
                <Image src="/portait_1.jpg" className='object-cover rounded-full aspect-square'  alt='Protait image'  height={56} width={56}/>
                <Image src="/portait_1.jpg" className='object-cover rounded-full aspect-square'  alt='Protait image'  height={56} width={56}/>
                <Image src="/portait_1.jpg" className='object-cover rounded-full aspect-square'  alt='Protait image'  height={56} width={56}/>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

type NavItemProps  = PropsWithChildren<{href: string}>;
function NavItem(props: NavItemProps) {
  const {href, children} = props;
  return  <Link href={href} className='block px-4 py-2 text-sm text-white border border-white rounded-full bg-white/30' >{children}</Link>
}


