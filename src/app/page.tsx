import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { Button } from '../components/ui';
import { ChevronRight } from '../icon/chevon-right-icon';
import { LocationIcon } from '../icon/location-icon';
import OurRecommendation from '../components/our-recommendation';
import ReadyToSell from '@/components/ready-to-sell';
import SeeOurReview from '@/components/see-our-review';
import { RoundAccessTimeIcon } from '@/icon';
import { SeeTipsAndTricks } from '@/components/see-tips-and-tricks';

export default function Home() {
  return (
    <main>
      <div className='relative w-full h-screen'>
        <span className='absolute -left-28  top-6 bg-[#82F7FF] w-60 aspect-square blur-[120px] '></span>
        <span className='absolute left-32  -top-24 bg-[#82FFD2] w-60 aspect-square blur-[120px] '></span>
        <div className='container'>
          <nav className='h-[80px] flex items-center justify-between relative z-50'>
            <div className='relative flex w-24'>
              <Image
                className='relative '
                src='/logo.svg'
                alt='House Hunter'
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
              <Button variant='secondary'>
                <Link href=''>Sign Up! </Link>
              </Button>
            </div>
          </nav>

          <div className='w-1/2 mt-12'>
            <div className='relative z-50 space-y-8'>
              <div>
                <div className='overflow-hidden'>
                  <p className=' leading-[1.18]  capitalize text-5xl font-bold text-brandBlue-700 animate-reveal  '>
                    find the place to
                  </p>
                </div>
                <div className='overflow-hidden'>
                  <p className='leading-[1.18]  capitalize text-5xl font-bold text-brandBlue-700 animate-reveal'>
                    live{' '}
                    <span className='text-transparent text-stroke'>
                      your dreams
                    </span>{' '}
                    <br />
                  </p>
                </div>
                <div className='overflow-hidden'>
                  <p className='leading-[1.18]  capitalize text-5xl font-bold text-brandBlue-700 animate-reveal'>
                    easily here
                  </p>
                </div>
              </div>
              <p className='w-8/12 text-sm text-neutral-500'>
                Everything you need about finding your place to live will be
                here, where it will be easier for you
              </p>
              <div className='flex items-center w-4/5 py-1 pl-5 pr-1 border rounded-full border-neutral-300 '>
                <LocationIcon className='w-6 h-6 fill-brandYellow-500' />
                <input
                  className='w-full ml-3 text-xs appearance-none oultine-none focus-within:outline-none placeholder:text-brandGray-500 placeholder:font-semibold'
                  placeholder='Search for the location you want!'
                  type='text'
                />
                <Button variant='primary'>
                  Search
                  <ChevronRight className='text-current' />
                </Button>
              </div>

              <div>
                <p className='p-0 text-sm text-neutral-500'>Our Partnership </p>
                <div className='flex w-full h-full mt-6 gap-x-4'>
                  <div className='relative flex-none w-20 h-12'>
                    <img
                      src='/2.png'
                      alt=''
                      className='absolute inset-0 object-cover w-full h-full rounded-lg'
                      loading='lazy'
                    />
                  </div>
                  <div className='relative flex-none w-20 h-12'>
                    <img
                      src='/3.png'
                      alt=''
                      className='absolute inset-0 object-cover w-full h-full rounded-lg'
                      loading='lazy'
                    />
                  </div>
                  <div className='relative flex-none w-20 h-12'>
                    <img
                      src='/4.png'
                      alt=''
                      className='absolute inset-0 object-cover w-full h-full rounded-lg'
                      loading='lazy'
                    />
                  </div>
                  <div className='relative flex-none w-20 h-12'>
                    <img
                      src='/5.png'
                      alt=''
                      className='absolute inset-0 object-cover w-full h-full rounded-lg'
                      loading='lazy'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='absolute top-0 w-full '>
          <div className='relative flex w-1/2 h-full ml-auto overflow-x-hidden '>
            {/* Line draws */}
            <div className='absolute w-12 h-16 border-2 border-red-500 top-12 left-1 '></div>
            <Image
              className='relative '
              src='/cover.png'
              alt='An house image'
              width={2000}
              height={1000}
              priority
            />
            <div className='absolute w-[140%] flex gap-x-6 bottom-8 left-8'>
              <div className='flex gap-x-2 bg-white rounded-[32px] p-6 pl-12'>
                <div className=' shrink-0 w-auto flex [&_img]:-ml-7 [&_img]:border-[3px] [&_img]:border-white '>
                  <Image
                    src='/portait_1.jpg'
                    className='object-cover rounded-full shadow-lg aspect-square shadow-[rgba(89, 92, 219, 0.1)]'
                    alt='Protait image'
                    height={53}
                    width={53}
                  />
                  <Image
                    src='/portait_1.jpg'
                    className='object-cover rounded-full shadow-lg aspect-square shadow-[rgba(89, 92, 219, 0.1)] '
                    alt='Protait image'
                    height={53}
                    width={53}
                  />
                  <Image
                    src='/portait_1.jpg'
                    className='object-cover rounded-full shadow-lg aspect-square shadow-[rgba(89, 92, 219, 0.1)] '
                    alt='Protait image'
                    height={53}
                    width={53}
                  />
                </div>
                <div className='flex flex-col justify-between py-1 w-max'>
                  <p className='text-base font-semibold text-brandBlue-700 whitespace-nowrap'>
                    1K+ People
                  </p>
                  <p className='text-xs font-normal text-brandBlue-100 whitespace-nowrap'>
                    Successfully Getting Home
                  </p>
                </div>
              </div>

              <div className='flex gap-x-2 bg-white rounded-[32px] p-6'>
                <Image
                  src='/portait_1.jpg'
                  className='object-cover rounded-3xl shadow-lg aspect-square shadow-[rgba(89, 92, 219, 0.1)]'
                  alt='Protait image'
                  height={56}
                  width={56}
                />
                <div className='flex flex-col justify-between py-1'>
                  <p className='text-base font-semibold text-brandBlue-700 whitespace-nowrap'>
                    56 Houses
                  </p>
                  <p className='text-xs font-normal text-brandBlue-100 whitespace-nowrap'>
                    Sold Monthly
                  </p>
                </div>
              </div>

              <div className='flex gap-x-2 bg-white rounded-[32px] p-6'>
                <Image
                  src='/portait_1.jpg'
                  className='object-cover rounded-full shadow-lg aspect-square shadow-[rgba(89, 92, 219, 0.1)]'
                  alt='Protait image'
                  height={56}
                  width={56}
                />
                <div className='flex flex-col justify-between py-1'>
                  <p className='text-base font-semibold text-brandBlue-700 whitespace-nowrap'>
                    4k+
                  </p>
                  <p className='text-xs font-normal text-brandBlue-100 whitespace-nowrap'>
                    People Looking for New Homes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurRecommendation />
      <ReadyToSell />
      <SeeOurReview />
      <SeeTipsAndTricks />
    </main>
  );
}

type NavItemProps = PropsWithChildren<{ href: string }>;
function NavItem(props: NavItemProps) {
  const { href, children } = props;
  return (
    <Link
      href={href}
      className='block px-4 py-2 text-sm text-white border border-white rounded-full bg-white/30'>
      {children}
    </Link>
  );
}
