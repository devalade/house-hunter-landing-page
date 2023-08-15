import Image from 'next/image';
import { Badge } from '@/components/ui';
import { FireIcon } from '@/icon/fire-icon';
import { ElementRef, ForwardedRef, ReactNode, forwardRef } from 'react';
import { HouseIcon } from '@/icon/house-icon';
import { WalletIcon } from '@/icon/wallet-icon';

const cardType: Record<
  string,
  { badgeColor: Badge; badgeLabel: string; icon: ReactNode }
> = {
  popular: {
    badgeColor: 'red',
    badgeLabel: 'Popular',
    icon: <FireIcon className='w-[16px] h-[16px]' />,
  },
  'new-house': {
    badgeColor: 'blue',
    badgeLabel: 'New House',
    icon: <HouseIcon className='w-[16px] h-[16px]' />,
  },
  'best-deals': {
    badgeColor: 'green',
    badgeLabel: 'Best Deals',
    icon: <WalletIcon className='w-[16px] h-[16px]' />,
  },
};

export type CardProps = {
  type: keyof typeof cardType;
  name: string;
  price: number;
  cover: string;
  user: {
    fullname: string;
    location: string;
    avatar: string;
  };
};

export const Card = forwardRef(function Card(
  props: CardProps,
  ref: ForwardedRef<ElementRef<'div'>>
) {
  const { type = 'popular', name, price, cover, user } = props;
  function formatCurrency(price: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumSignificantDigits: 1,
    }).format(price);
  }
  return (
    <div ref={ref} className='space-y-[24px] w-[340px]'>
      <div className='relative flex'>
        <Image src={cover} width={340} height={382} alt='Popular house image' />
        <div className='absolute bottom-4 left-4 '>
          <Badge
            color={cardType[type].badgeColor}
            label={cardType[type].badgeLabel}
            icon={cardType[type].icon}
          />
        </div>
      </div>
      <div className=''>
        <p className='text-2xl font-medium text-brandBlue-700'>{name}</p>
        <p className='text-xl text-neutral-700'>{formatCurrency(price)}</p>
      </div>
      <div className='flex items-center gap-x-2'>
        <Image
          className='object-cover rounded-full aspect-square'
          src={user.avatar}
          width={40}
          height={40}
          alt={`${user.fullname} profile image`}
        />
        <div>
          <p className='text-lg font-medium text-brandBlue-700'>
            {user.fullname}
          </p>
          <p className='text-sm font-medium text-neutral-500'>
            {user.location}
          </p>
        </div>
      </div>
    </div>
  );
});
