import Image from 'next/image';
import {Badge} from './ui';
import {PopularIcon} from '../icon/popular-icon';

const cardType: Record<string, { badgeColor: Badge; badgeLabel: string  }> = {
    popular: {
        badgeColor: 'red',
        badgeLabel: 'Popular'
    },
    'new-house': {
        badgeColor: 'blue',
        badgeLabel: 'New House'
    },
    'best-deals': {
        badgeColor: 'green',
        badgeLabel: 'Best Deals'
    }
}

export type CardProps = {
    type: keyof typeof cardType;
    name: string;
    price: number;
    cover: string;
    user: {
        fullname: string;
        location: string;
    }
}

export function Card(props: CardProps) {
    const  { type = 'popular', name, price, cover, user } = props;
    return (
        <div className='space-y-[24px] '>
            <div className='relative flex'>
                <Image src={cover} width={340} height={382} alt='Popular house image' />
                <div className='absolute bottom-4 left-4 '>
                    <Badge color={cardType[type].badgeColor} label={cardType[type].badgeLabel} icon={<PopularIcon className='w-[16px] h-[16px]' />} />
                </div>
            </div>
            <div className=''>
                <p className='text-2xl font-medium text-brandBlue-700'>{name}</p>
                <p className='text-xl text-neutral-700'>{new Intl.NumberFormat('en-US').format(price)}</p>
            </div>
            <div className='flex items-center gap-x-2'>
                <Image className='object-cover rounded-full aspect-square' src="/portait_1.jpg" width={40} height={40} alt={`${user.fullname} profile image`}  />
                <div>
                    <p className='text-lg font-medium text-brandBlue-700'>{user.fullname}</p>
                    <p className='text-sm font-medium text-neutral-500'>{user.location}</p>
                </div>
            </div>

        </div>
    );
}


