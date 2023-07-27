import { RoundAccessTimeIcon } from '@/icon';
import { Button } from './ui';

export function SeeTipsAndTricks() {
  return (
    <section className='relative container mt-[120px]'>
      <span className='absolute -left-28  top-6 bg-[#82FFE8] w-72 aspect-square blur-[120px] -z-50 '></span>
      <span className='absolute -left-48  top-52 bg-[#C8FF82] w-72 aspect-square blur-[120px] -z-50'></span>
      <div className='w-full space-y-2'>
        <span className='block w-6 mx-auto h-[1px] bg-brandYellow-500'></span>

        <p className='section-title text-center'>
          See tips and trick from our partnership
        </p>
        <p className='section-subtitle text-center w-[440px] mx-auto'>
          Find out more about selling and buying homes
        </p>
        <div className='flex justify-center w-full'>
          <Button>More Artikel</Button>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-x-12 mt-[42px]'>
        <div className='col-span-1 space-y-8'>
          {/* Card */}
          <Card />
          <Card />
          <Card />
        </div>
        <div className='col-span-1 space-y-4'>
          <div className='h-[280px] w-full bg-neutral-700 rounded-lg'></div>
          <div className='flex items-center gap-x-3'>
            <div className='w-8 aspect-square rounded-full bg-neutral-500'></div>
            <p className='text-sm text-neutral-700'>Cameron Williamson</p>
          </div>
          <p className='text-xl font-medium text-brandBlue-700'>
            12 Things to know before buying a house
          </p>
          <p className='text-sm text-brandBlue-100'>
            Want to buy a house but are unsure about what we should know, here I
            will try to explain what we should know and check when we want to
            buy a house
          </p>
          <div className='flex items-center gap-x-3 text-neutral-500'>
            <RoundAccessTimeIcon />
            <small>4 min read | 25 Apr 2021</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card() {
  return (
    <div className='flex gap-x-6'>
      <div className='h-[144px] w-[200px] bg-neutral-700 rounded-2xl'></div>
      <div className='space-y-4'>
        <div className='flex items-center gap-x-3'>
          <div className='w-8 aspect-square rounded-full bg-neutral-500'></div>
          <p className='text-sm text-neutral-700'>Dianne Russell</p>
        </div>
        <p className='text-lg font-medium text-brandBlue-700'>
          The things we need to check when we want to buy a house
        </p>
        <div className='flex items-center gap-x-3 text-neutral-500'>
          <RoundAccessTimeIcon />
          <small>4 min read | 25 Apr 2021</small>
        </div>
      </div>
    </div>
  );
}
