/* eslint-disable react/display-name */
'use client';

import Image from 'next/image';
import StarIcon from '@/icon/start-icon';
import { twMerge } from 'tailwind-merge';
import { forwardRef } from 'react';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SeeOurReview() {
  const swiperSlide = useSwiperSlide();
  return (
    <section className='relative mt-[120px] h-screen w-screen overflow-hidden'>
      <div className='w-full space-y-2'>
        <span className='block w-6 mx-auto h-[1px] bg-brandYellow-500'></span>

        <p className='section-title text-center'>See Our Review</p>
        <p className='section-subtitle text-center'>
          What Our User Say About Us
        </p>
      </div>

      <div className='relative flex gap-x-4 h-[505px] mt-12'>
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={30}
          autoplay
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className=''>
          {[1, 2, 3].map((i) => (
            <SwiperSlide className='!w-auto' key={i}>
              <ReviewCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='flex items-center justify-center w-full mt-6 '>
        <div className='space-x-2'>
          {[1, 2, 3].map((k) => (
            <span
              key={k}
              className={`inline-block w-2 aspect-square rounded-full ${
                swiperSlide?.isActive ? 'bg-neutral-700' : 'bg-[#E0E3EB]'
              } `}></span>
          ))}
        </div>
      </div>
    </section>
  );
}

type ReviewCardProps = { className?: string };

const ReviewCard = forwardRef((props: ReviewCardProps, ref) => {
  const { className } = props;
  return (
    <div
      ref={ref}
      className={twMerge('relative flex w-[50vw] h-[400px]', className)}>
      <Image
        className='absolute inset-0'
        src='/review_2.png'
        alt='Dianne Russell review'
        width={740}
        height={400}
      />
      <div className='absolute top-1/3 rounded-2xl shadow-2xl p-8 shadow-[#595CDB05] translate-y-1/2 w-[42vw] h-[249px] right-1/2 translate-x-1/2 bg-white space-y-6'>
        <div className='space-y-4'>
          <p className='text-xl font-semibold text-brandBlue-700'>
            Best! I got the house I wanted through Hounter
          </p>
          <p className='text-sm font-normal text-brandBlue-100'>
            Through this website I can get a house with the type and
            specifications I want very easily, without a complicated process to
            be able to find information on the house we want.
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex gap-x-6'>
            <Image
              className='object-cover rounded-full aspect-square'
              src='/portait_1.jpg'
              width={40}
              height={40}
              alt='Portrait image'
            />
            <div className='flex flex-col justify-between text-sm font-medium'>
              <p className=' text-brandBlue-700'>Dianne Russell</p>
              <p className='text-neutral-500'>Manager Director</p>
            </div>
          </div>
          <div className='flex gap-x-4'>
            <StarIcon className='fill-brandYellow-500 stroke-brandYellow-500' />
            <p className='text-xl font-semibold text-neutral-700'>4.6</p>
          </div>
        </div>
      </div>
    </div>
  );
});
