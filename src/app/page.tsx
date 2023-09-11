import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { Button, PropertyDropdownMenu, button } from '../components/ui';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronRight } from '../icon/chevon-right-icon';
import { LocationIcon } from '../icon/location-icon';
import OurRecommendation from '../components/our-recommendation';
import ReadyToSell from '@/components/ready-to-sell';
import SeeOurReview from '@/components/see-our-review';
import { SeeTipsAndTricks } from '@/components/see-tips-and-tricks';
import Subscribe from '@/components/subscribe';

export default function Home() {
  return (
    <main className='overflow-hidden'>
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

            <div className='flex gap-x-8 font-normal'>
              <span className='flex items-center gap-x-2'>
                <NavItem href='#'>About Us</NavItem>
                <NavItem href='#'>Article</NavItem>
                <PropertyDropdownMenu />
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
                    <Image
                      width={84}
                      height={64}
                      src='/2.png'
                      alt=''
                      className='absolute inset-0 object-cover w-full h-full rounded-lg'
                      loading='lazy'
                    />
                  </div>
                  <div className='relative flex-none w-20 h-12'>
                    <Image
                      width={84}
                      height={64}
                      src='/3.png'
                      alt=''
                      className='absolute inset-0 object-cover w-full h-full rounded-lg'
                      loading='lazy'
                    />
                  </div>
                  <div className='relative flex-none w-20 h-12'>
                    <Image
                      width={84}
                      height={64}
                      src='/4.png'
                      alt=''
                      className='absolute inset-0 object-cover w-full h-full rounded-lg'
                      loading='lazy'
                    />
                  </div>
                  <div className='relative flex-none w-20 h-12'>
                    <Image
                      width={84}
                      height={64}
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
              // loading='lazy'
            />
            <div className='absolute w-[140%] flex gap-x-6 bottom-8 left-8'>
              <div className='flex gap-x-2 bg-white rounded-[32px] p-6 pl-12'>
                <div className=' shrink-0 w-auto flex [&_img]:-ml-7 [&_img]:border-[3px] [&_img]:border-white '>
                  <Image
                    src='/avatar-1.jpeg'
                    className='object-cover rounded-full shadow-lg aspect-square shadow-[rgba(89, 92, 219, 0.1)]'
                    alt='Protait image'
                    height={53}
                    width={53}
                    loading='lazy'
                  />
                  <Image
                    src='/avatar-2.jpeg'
                    className='object-cover rounded-full shadow-lg aspect-square shadow-[rgba(89, 92, 219, 0.1)] '
                    alt='Protait image'
                    height={53}
                    width={53}
                    loading='lazy'
                  />
                  <Image
                    src='/avatar-3.jpeg'
                    className='object-cover rounded-full shadow-lg aspect-square shadow-[rgba(89, 92, 219, 0.1)] '
                    alt='Protait image'
                    height={53}
                    width={53}
                    loading='lazy'
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
                  src='/houses.png'
                  className='object-cover rounded-3xl shadow-lg aspect-square shadow-[rgba(89, 92, 219, 0.1)]'
                  alt='Protait image'
                  height={56}
                  width={56}
                  loading='lazy'
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
                  src='/avatar-4.jpeg'
                  className='object-cover rounded-full shadow-lg aspect-square shadow-[rgba(89, 92, 219, 0.1)]'
                  alt='Protait image'
                  height={56}
                  width={56}
                  loading='lazy'
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
      <Subscribe />
      <footer className='mt-[120px] relative container  max-h-[320px] pb-14  '>
        <div className=' absolute -bottom-[70px] -right-[200px] w-96 blur-[60px] aspect-square bg-[#82BBFF]  rounded-full opacity-40' />
        <div className=' absolute -bottom-[120px] right-12 w-96 blur-[60px] aspect-square bg-[#B9FF82]  rounded-full opacity-40' />

        <div className='flex'>
          {/*  */}
          <div className='w-1/2 space-y-4'>
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
            <p className='text-sm text-brandBlue-100 max-w-[320px] w-full'>
              We provide information about properties such as houses, villas and
              apartments to help people find their dream home
            </p>
            <div className='flex items-center gap-x-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 32 32'
                fill='none'>
                <path
                  d='M12.3186 26V16.6154H9V13.2365H12.3186V10.3505C12.3186 8.08264 14.2789 6 18.7959 6C20.6247 6 21.9771 6.1311 21.9771 6.1311L21.8705 9.28642C21.8705 9.28642 20.4913 9.27638 18.9863 9.27638C17.3574 9.27638 17.0965 9.83768 17.0965 10.7693V13.2365H22L21.7866 16.6154H17.0965V26H12.3186Z'
                  fill='#3C4563'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 32 32'
                fill='none'>
                <path
                  d='M28 8.37575C27.1174 8.76628 26.157 9.04735 25.1676 9.15682C26.1948 8.53089 26.9639 7.54202 27.3308 6.37575C26.367 6.96388 25.3111 7.37629 24.2101 7.59469C23.7499 7.09003 23.1933 6.688 22.575 6.41364C21.9567 6.13929 21.2899 5.99849 20.6163 6.00001C17.8906 6.00001 15.6986 8.26628 15.6986 11.0473C15.6986 11.4379 15.7447 11.8284 15.8197 12.2042C11.7385 11.9852 8.09855 9.98522 5.67864 6.92309C5.23771 7.69562 5.00665 8.57524 5.00949 9.47042C5.00949 11.2219 5.87766 12.7663 7.20154 13.6746C6.42136 13.643 5.65944 13.4231 4.97777 13.0326V13.0947C4.97777 15.5473 6.66795 17.5799 8.92056 18.0473C8.49761 18.16 8.06251 18.2177 7.62553 18.2189C7.30537 18.2189 7.00252 18.1864 6.69679 18.142C7.31979 20.142 9.134 21.5947 11.2943 21.642C9.60413 23 7.48708 23.7988 5.18832 23.7988C4.77587 23.7988 4.39514 23.784 4 23.7367C6.18051 25.1716 8.7677 26 11.5539 26C20.599 26 25.5484 18.3136 25.5484 11.642C25.5484 11.4231 25.5484 11.2042 25.534 10.9852C26.4915 10.2663 27.3308 9.37575 28 8.37575Z'
                  fill='#3C4563'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 32 32'
                fill='none'>
                <path
                  d='M15.9973 12.6652C14.1611 12.6652 12.6626 14.1638 12.6626 16C12.6626 17.8362 14.1611 19.3348 15.9973 19.3348C17.8335 19.3348 19.332 17.8362 19.332 16C19.332 14.1638 17.8335 12.6652 15.9973 12.6652ZM25.9989 16C25.9989 14.6191 26.0114 13.2506 25.9338 11.8722C25.8563 10.2711 25.4911 8.85017 24.3203 7.67938C23.147 6.50609 21.7286 6.14334 20.1275 6.06579C18.7466 5.98824 17.3782 6.00074 15.9998 6.00074C14.6189 6.00074 13.2505 5.98824 11.8721 6.06579C10.271 6.14334 8.85012 6.50859 7.67935 7.67938C6.50608 8.85267 6.14334 10.2711 6.06579 11.8722C5.98824 13.2531 6.00074 14.6216 6.00074 16C6.00074 17.3784 5.98824 18.7494 6.06579 20.1278C6.14334 21.7289 6.50858 23.1498 7.67935 24.3206C8.85262 25.4939 10.271 25.8567 11.8721 25.9342C13.253 26.0118 14.6214 25.9993 15.9998 25.9993C17.3807 25.9993 18.7491 26.0118 20.1275 25.9342C21.7286 25.8567 23.1495 25.4914 24.3203 24.3206C25.4936 23.1473 25.8563 21.7289 25.9338 20.1278C26.0139 18.7494 25.9989 17.3809 25.9989 16ZM15.9973 21.131C13.1579 21.131 10.8664 18.8394 10.8664 16C10.8664 13.1606 13.1579 10.869 15.9973 10.869C18.8367 10.869 21.1282 13.1606 21.1282 16C21.1282 18.8394 18.8367 21.131 15.9973 21.131ZM21.3383 11.8572C20.6754 11.8572 20.14 11.3218 20.14 10.6589C20.14 9.99594 20.6754 9.46058 21.3383 9.46058C22.0013 9.46058 22.5366 9.99594 22.5366 10.6589C22.5368 10.8163 22.5059 10.9722 22.4458 11.1177C22.3856 11.2632 22.2974 11.3954 22.1861 11.5067C22.0748 11.618 21.9426 11.7062 21.7971 11.7664C21.6516 11.8265 21.4957 11.8574 21.3383 11.8572Z'
                  fill='#3C4563'
                />
              </svg>
            </div>
          </div>

          <div className='flex justify-between w-1/2'>
            <div>
              <p className='text-xl font-normal capitalize text-brandBlue-700'>
                Property
              </p>
              <ul className='mt-6 space-y-3 text-sm font-light capitalize text-neutral-500'>
                <li className=''>House</li>
                <li className=''>Apartment</li>
                <li className=''>Villa</li>
              </ul>
            </div>
            <div>
              <p className='text-xl font-normal capitalize text-brandBlue-700'>
                Article
              </p>
              <ul className='mt-6 space-y-3 text-sm font-light capitalize text-neutral-500'>
                <li className=''>New Article</li>
                <li className=''>Popular Article</li>
                <li className=''>Most Read</li>
                <li className=''>Tips & Tricks</li>
              </ul>
            </div>
            <div>
              <p className='text-xl font-normal capitalize text-brandBlue-700'>
                Contact
              </p>
              <ul className='mt-6 space-y-3 text-sm font-light capitalize text-neutral-500'>
                <li className=''>2464 Royal Ln. Mesa, New Jersey 45463</li>
                <li className=''>(671) 555-0110</li>
                <li className=''>info@hounter.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

type NavItemProps = PropsWithChildren<{ href: string }>;
function NavItem(props: NavItemProps) {
  const { href, children } = props;
  return (
    <Link href={href} className={button({ variant: 'link' })}>
      {children}
    </Link>
  );
}
