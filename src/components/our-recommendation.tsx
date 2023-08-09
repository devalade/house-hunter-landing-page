'use client';

import { AppartmentIcon } from '@/icon/appartment-icon';
import { ChevronRight } from '@/icon/chevon-right-icon';
import { HouseIcon } from '@/icon/house-icon';
import { VillaIcon } from '@/icon/villa-icon';
import SectionTitle from '@/components/section-title';
import { Button } from '@/components/ui';
import { Card, CardProps } from '@/components/card';

import 'swiper/css';
import { ChevronLeft } from '@/icon';
import { ElementRef, useRef, useState } from 'react';
import { SwiperSlide, Swiper, useSwiper, useSwiperSlide } from 'swiper/react';

const FakeCardData: (CardProps & { id: number })[] = [
  {
    id: 1,
    name: 'Roselands House',
    price: 35_000_000,
    cover: '/popular_house.png',
    type: 'popular',
    user: {
      fullname: 'Dianne Russell',
      location: 'Manchester, Kentucky',
      avatar: '/avatar-3.jpeg',
    },
  },
  {
    id: 2,
    name: 'Woodlandside',
    price: 20_000_000,
    cover: '/new_house.png',
    type: 'new-house',
    user: {
      fullname: 'Robert Fox',
      location: 'Dr. San Jose, South Dakota',
      avatar: '/avatar-9.jpeg',
    },
  },
  {
    id: 3,
    name: 'The Old Lighthouse',
    price: 44_000_000,
    cover: '/best_deals.png',
    type: 'best-deals',
    user: {
      fullname: 'Ronald Richards',
      location: 'Santa Ana, Illinois',
      avatar: '/avatar-8.jpeg',
    },
  },
  {
    id: 4,
    name: "Cosmo's House",
    price: 22_000_000,
    cover: '/popular_house.png',
    type: 'popular',
    user: {
      fullname: 'Jenny Wilson',
      location: 'Preston Rd. Inglewood, Maine 98380',
      avatar: '/avatar-10.jpeg',
    },
  },
  {
    id: 5,
    name: "Cosmo's House",
    price: 22_000_000,
    cover: '/popular_house.png',
    type: 'popular',
    user: {
      fullname: 'Jenny Wilson',
      location: 'Preston Rd. Inglewood, Maine 98380',
      avatar: '/avatar-10.jpeg',
    },
  },
];

export default function OurRecommendation() {
  const swiperRef = useRef(null);

  console.log({ swiperRef });
  return (
    <section className=' mt-[120px]  h-full overflow-x-hidden '>
      <div className='container flex items-end justify-between mb-[40px]'>
        <SectionTitle title='Our Recommendation' subTitle='Featured House' />
        <div className='flex gap-x-[32px] items-center'>
          <Button variant='secondary-light'>
            <HouseIcon className='w-6 h-6' />
            House
          </Button>
          <Button variant='outline-muted'>
            <VillaIcon className='w-6 h-6' />
            Villa
          </Button>
          <Button variant='outline-muted'>
            <AppartmentIcon className='w-6 h-6' />
            Apartment
          </Button>
        </div>

        <div className='flex items-center gap-x-[32px]'>
          <Button variant='secondary-muted'>
            <ChevronLeft className='w-6 h-6 rotate-180  ' />
          </Button>
          <Button>
            <ChevronRight className='w-6 h-6' />
          </Button>
        </div>
      </div>
      <div className=''>
        <Swiper ref={swiperRef} spaceBetween={30} slidesPerView={'auto'}>
          <SwiperSlide className='!w-fit'>
            <div className='w-[1rem] sm:w-[2rem] lg:w-[4rem] xl:w-[5rem] 2xl:w-[6rem]' />
          </SwiperSlide>
          {FakeCardData.map((data) => (
            <SwiperSlide key={data.id} className='!w-fit'>
              <Card {...data} />
            </SwiperSlide>
          ))}
          <SwiperSlide className='!w-fit'>
            <div className='w-20' />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
