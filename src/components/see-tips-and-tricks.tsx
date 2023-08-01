import { RoundAccessTimeIcon } from '@/icon';
import { Button } from './ui';
import Image from 'next/image';

const DATA = [
  {
    id: 1,
    fullname: 'Dianne Russell',
    avatar: '/avatar-1.jpeg',
    cover: '/houses-1.jpeg',
    title: 'The things we need to check when we want to buy a house',
    readTime: 4,
    date: '25 Apr 2021',
  },
  {
    id: 2,
    fullname: 'Courtney Henry',
    avatar: '/avatar-5.jpeg',
    cover: '/houses-2.jpeg',
    title: '7 Ways to distinguish the quality of the house we want to buy',
    readTime: 6,
    date: '24 Apr 2021',
  },
  {
    id: 3,
    fullname: 'Darlene Robertson',
    avatar: '/avatar-6.jpeg',
    cover: '/houses-3.jpeg',
    title: 'The best way to know the quality of the house we want to buy',
    readTime: 2,
    date: '24 Apr 2021',
  },
];

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
          {DATA.map((data) => (
            <Card key={data.id} {...data} />
          ))}
        </div>
        <div className='col-span-1 space-y-4'>
          <Image
            src={'/houses-4.jpeg'}
            height={144}
            width={1000}
            loading='lazy'
            className='flex-none h-[280px] aspect-square rounded-lg object-cover'
            alt={`House image`}
          />
          <figcaption className='flex items-center gap-x-3'>
            <Image
              src='/avatar-7.jpeg'
              height={60}
              width={60}
              loading='lazy'
              className='flex-none w-8 aspect-square rounded-full object-cover'
              alt='Avatar de Cameron williamson'
            />
            <p className='text-sm text-neutral-700'>Cameron Williamson</p>
          </figcaption>
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

type CardProps = Omit<(typeof DATA)[number], 'id'>;
function Card(props: CardProps) {
  const { fullname, avatar, title, readTime, date, cover } = props;
  return (
    <div className='flex gap-x-6'>
      <Image
        src={cover}
        height={144}
        width={200}
        loading='lazy'
        className='flex-none h-[144px] w-[200px] aspect-square rounded-2xl object-cover'
        alt={`Avatar de ${fullname}`}
      />
      <div className='space-y-4'>
        <div className='flex items-center gap-x-3'>
          <Image
            src={avatar}
            height={60}
            width={60}
            loading='lazy'
            className='flex-none w-8 aspect-square rounded-full object-cover'
            alt={`Avatar de ${fullname}`}
          />
          <p className='text-sm text-neutral-700'>{fullname}</p>
        </div>
        <p className='text-lg font-medium text-brandBlue-700'>{title}</p>
        <div className='flex items-center gap-x-3 text-neutral-500'>
          <RoundAccessTimeIcon />
          <small>
            {readTime} min read | {date}
          </small>
        </div>
      </div>
    </div>
  );
}
