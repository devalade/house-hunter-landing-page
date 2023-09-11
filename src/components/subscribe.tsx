import { EmailFillIcon } from '@/icon/email-fill-icon';
import Image from 'next/image';
import { Button } from './ui';

export default function Subscribe() {
  return (
    <section className='container mt-[120px]'>
      <div className='flex-none relative h-[312px] w-full '>
        <Image
          alt='Colorful background'
          src='/subscriber-bg.png'
          width={4000}
          height={3000}
          className='absolute inset-0 w-full h-full object-cover z-10 rounded-[32px] '
          loading='lazy'
          // placeholder='blur'
        />
        {/*Right Positioning image */}
        <Image
          alt='Furniture image'
          src='/furniture.jpeg'
          width={430}
          height={354}
          className='absolute top-[32px] left-[44px] w-[81px] aspect-square object-cover border-2 border-neutral-200 rounded-3xl z-50'
          loading='lazy'
          // placeholder='blur'
        />

        <Image
          alt='Dianne Russell avatar'
          src='/avatar-3.jpeg'
          width={200}
          height={200}
          className='absolute top-[173px] left-[67px] w-[36px] aspect-square object-cover border-2 border-neutral-200 rounded-full z-50'
          loading='lazy'
          // placeholder='blur'
        />

        <Image
          alt='Ronald Richards avatar'
          src='/avatar-8.jpeg'
          width={200}
          height={200}
          className='absolute top-[71px] left-[204px] w-[36px] aspect-square object-cover border-2 border-neutral-200 rounded-full z-50'
          loading='lazy'
          // placeholder='blur'
        />

        <Image
          alt='Houses avatar'
          src='/houses-5.jpeg'
          width={200}
          height={200}
          className='absolute top-[178px] left-[195px] w-[54px] aspect-square object-cover border-2 border-neutral-200 rounded-3xl z-50'
          loading='lazy'
          // placeholder='blur'
        />

        {/*Left Positioning image */}
        <Image
          alt='Houses image'
          src='/houses-6.jpeg'
          width={430}
          height={354}
          className='absolute top-[44px] right-[200px] w-[81px] aspect-square object-cover border-2 border-neutral-200 rounded-3xl z-50'
          loading='lazy'
          // placeholder='blur'
        />

        <Image
          alt='Courtney Henry avatar'
          src='/avatar-5.jpeg'
          width={200}
          height={200}
          className='absolute top-[143px] right-[200px] w-[36px] aspect-square object-cover border-2 border-neutral-200 rounded-full z-50'
          loading='lazy'
          // placeholder='blur'
        />

        <Image
          alt='Ronald Richards avatar'
          src='/avatar-8.jpeg'
          width={200}
          height={200}
          className='absolute top-[107px] right-[82px] w-[36px] aspect-square object-cover border-2 border-neutral-200 rounded-full z-50'
          loading='lazy'
          // placeholder='blur'
        />

        <Image
          alt='Furniture avatar'
          src='/furniture-1.jpeg'
          width={200}
          height={200}
          className='absolute top-[197px] right-[73px] w-[54px] aspect-square object-cover border-2 border-neutral-200 rounded-3xl z-50'
          loading='lazy'
          // placeholder='blur'
        />

        <div className='absolute inset-0 w-full h-full object-cover flex items-center justify-center z-50'>
          <div className='space-y-6'>
            <p className=' capitalize text-brandBlue-700 text-[32px] font-medium text-center w-[28rem] mx-auto'>
              Subscribe For More Info and update from Hounter
            </p>
            <div className='flex items-center w-full mx-auto py-1 pl-5 pr-1 border rounded-full border-neutral-300 bg-white '>
              <EmailFillIcon className='w-6 h-6' />
              <input
                className='w-full ml-3 text-xs appearance-none bg-transparent oultine-none focus-within:outline-none placeholder:text-brandGray-500 placeholder:font-semibold'
                placeholder='Your email here'
                type='text'
              />
              <Button variant='primary'>
                <span>SubscribeNow</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
