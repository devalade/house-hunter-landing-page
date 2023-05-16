import Image from 'next/image'
import Link from 'next/link'
import {PropsWithChildren} from 'react'

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
              <Link href="" className="px-4 py-2 text-sm font-semibold rounded-full text-brandGreen-700 bg-brandGreen-100">Sign Up! </Link>
          </div>
        </nav>

        <div className='w-1/2 mt-12'>
        <div className="relative z-50 space-y-6">
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
                  
                  <div className="flex items-center w-3/5 py-1 pl-5 pr-1 border rounded-full ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1C14.3869 1 16.6761 1.99337 18.364 3.76159C20.0518 5.5298 21 7.92801 21 10.4286C21 14.934 18.0975 19.081 12.402 22.8776C12.2818 22.9575 12.1424 23 12 23C11.8576 23 11.7182 22.9575 11.598 22.8776C5.9025 19.081 3 14.934 3 10.4286C3 7.92801 3.94821 5.5298 5.63604 3.76159C7.32387 1.99337 9.61305 1 12 1V1ZM12 7.28576C11.2044 7.28576 10.4413 7.61689 9.87868 8.20629C9.31607 8.7957 9 9.5951 9 10.4286C9 11.2622 9.31607 12.0616 9.87868 12.651C10.4413 13.2404 11.2044 13.5715 12 13.5715C12.7956 13.5715 13.5587 13.2404 14.1213 12.651C14.6839 12.0616 15 11.2622 15 10.4286C15 9.5951 14.6839 8.7957 14.1213 8.20629C13.5587 7.61689 12.7956 7.28576 12 7.28576V7.28576Z" fill="#F59E0B"/>
                    </svg>                      
                    <input className="w-full ml-3 text-xs appearance-none oultine-none focus-within:outline-none placeholder:text-brandGray-500 placeholder:font-semibold" placeholder="Search for the location you want!" type="text" />
                    <button className="flex items-center px-4 py-2 text-sm text-white rounded-full bg-brandGreen-500">
                      Search
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99335 5.0018C9.76166 5.00135 9.53713 5.08254 9.35872 5.2313C9.25831 5.31506 9.17532 5.41793 9.11448 5.53402C9.05364 5.65011 9.01616 5.77714 9.00419 5.90782C8.99221 6.03851 9.00598 6.17029 9.0447 6.29562C9.08341 6.42094 9.14632 6.53735 9.22981 6.63818L13.6722 11.9863L9.38847 17.3444C9.3061 17.4465 9.24459 17.5639 9.20747 17.69C9.17036 17.8161 9.15837 17.9482 9.17219 18.079C9.18601 18.2097 9.22537 18.3364 9.28802 18.4518C9.35066 18.5672 9.43535 18.669 9.53721 18.7513C9.63981 18.8421 9.75996 18.9107 9.89012 18.9526C10.0203 18.9945 10.1576 19.0088 10.2936 18.9948C10.4295 18.9807 10.5611 18.9385 10.6801 18.8709C10.7991 18.8032 10.9029 18.7116 10.985 18.6016L15.7744 12.6149C15.9203 12.4364 16 12.2124 16 11.9813C16 11.7502 15.9203 11.5263 15.7744 11.3477L10.8164 5.36101C10.7169 5.24026 10.5905 5.14481 10.4475 5.0824C10.3045 5.01999 10.1489 4.99238 9.99335 5.0018Z" fill="white"/>
                        </svg>                        
                    </button>
                  </div>

                  <div>
                    <p className="text-sm text-brandGray-500">Our Partnership </p>
                    <div className="flex w-full h-full gap-x-4">
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


