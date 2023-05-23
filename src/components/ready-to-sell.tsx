import {ReactNode} from 'react';
import SectionTitle from './section-title';
import {BathRoomIcon, BedroomIcon, CarportIcon, FloorIcon} from '@/icon';
import Image from 'next/image';
import {Button} from '@/components/ui';
import {PhoneIcon} from '@/icon/phone-icon';
import {PlayCircleIcon} from '@/icon/play-circle';

const HOUSE_DETAIL_DATA: (HouseDetailItemProps & { id: number } )[] = [
    {
        id: 1,
        label: '4 Bedrooms',
        icon: <BedroomIcon className='w-8 h-8' />
    },
    {
        id: 2,
        label: '2 Bathrooms',
        icon: <BathRoomIcon className='w-8 h-8' />
    },
    {
        id: 3,
        label: '1 Carport',
        icon: <CarportIcon className='w-8 h-8' />
    },
    {
        id: 4,
        label: '2 Floors',
        icon: <FloorIcon className='w-8 h-8' />
    }
];

export default function ReadyToSell() {
    return (
        <section className='relative flex items-center justify-between mt-[120px] container'>
            <span className='absolute -right-28  top-6 bg-[#FF9882] w-60 aspect-square blur-[120px] -z-50 '></span>
            <span className='absolute right-32  -top-24 bg-[#FFFA82] w-60 aspect-square blur-[120px] -z-50'></span>
            <div className=''>
                <SectionTitle title='Ready To Sell' subTitle="Let's Tour And See Our House!" />
                <div className='ml-8 '>
                    <p className=' w-[413px] font-normal text-base text-brandBlue-100'>Houses recommended by our partners that have been curated to become the home of your dreams!</p>
                    <div className='mt-4 space-y-8'>
                        <h6 className='text-base font-semibold text-brandBlue-700'>House Detail</h6>
                        <div className='grid grid-cols-2 w-[524px] gap-3'>
                            { HOUSE_DETAIL_DATA.map( houseDetail => ( <HouseDetailItem key={houseDetail.id} {...houseDetail} /> ))}
                        </div>

                        <div className='inline-block w-[413px] h-0.5 bg-neutral-200'></div>
                        <div className='flex items-center justify-between w-[440px]'>
                            <div className='flex items-center gap-x-4'>
                                <Image src='/portait_1.jpg' className='object-cover w-[56px] h-[56px] rounded-full aspect-square' alt="Image profile" width={56} height={56} />
                                <div className='font-medium'>
                                    <p className='text-lg text-brandBlue-700'>Dianne Russell</p>
                                    <p className='text-neutral-500'>Manager Director</p>
                                </div>
                            </div>

                            <Button>
                                <PhoneIcon className='w-6 h-6' />
                                Contact Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' relative flex w-[488px] h-[416px] rounded-sm'>
                <div className='relative flex w-full'>
                    <span className='absolute inset-0 z-50 flex items-center justify-center w-full h-full bg-black/20'>
                        <PlayCircleIcon />
                    </span>
a                   <Image src="/ready_to_sell_image_1.png"  className='absolute inset-0 object-cover w-full h-full'  width={500} height={500} alt='Video cover image' />
                </div>
                <div className='absolute bottom-0 flex items-end translate-y-1/3 -translate-x-9 gap-x-3 '>
                    <Image src="/ready_to_sell_image_2.png" width={296} height={168} alt='Other detail image' />
                    <div className='flex gap-x-2'>
                        <Image src="/ready_to_sell_image_3.png" width={96} height={80} alt='Other detail image' />
                        <Image src="/ready_to_sell_image_3.png" width={96} height={80} alt='Other detail image' />
                    </div>
                </div>
            </div>
        </section>
    );
}

type HouseDetailItemProps = {
    label: string;
    icon: ReactNode;
}

function HouseDetailItem(props: HouseDetailItemProps) {
    const { icon, label } = props;
    return (
        <div className="flex items-center gap-x-4 text-neutral-500">       
            {icon}
            <p className='font-medium '>{label}</p>
        </div>
    );

}
