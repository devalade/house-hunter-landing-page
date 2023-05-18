import Image from 'next/image';
import {AppartmentIcon} from '../icon/appartment-icon';
import {ChevronRight} from '../icon/chevon-right-icon';
import {HouseIcon} from '../icon/house-icon';
import {VillaIcon} from '../icon/villa-icon';
import SectionTitle from './section-title';
import {Button} from './ui';
import {PopularIcon} from '../icon/popular-icon';
import {ReactNode} from 'react';
import {Badge} from './ui/badge';

export default function OurRecommendation() {
    return(
        <section className='container mt-[120px]'>
            <div className='flex items-end justify-between mb-[40px]'>
                <SectionTitle title='Our Recommendation' subTitle='Featured House' />
                <div className='flex gap-x-[32px] items-center'>
                    <Button variant="secondary-light">
                        <HouseIcon className='w-6 h-6' />
                        House
                    </Button>
                    <Button variant="outline-muted" >
                        <VillaIcon className='w-6 h-6' />
                        Villa
                    </Button>
                    <Button variant="outline-muted">
                        <AppartmentIcon className='w-6 h-6' />
                        Apartment
                    </Button>
                </div>

                <div className='flex items-center gap-x-[32px]'>
                    <Button variant='secondary-muted'>
                        <ChevronRight className='w-6 h-6' />
                    </Button>
                    <Button>
                        <ChevronRight className='w-6 h-6' />
                    </Button>
                </div>

            </div>
            <div className='flex ml-10 gap-x-4'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}

function Card() {
    return (
        <div className='space-y-[24px] '>
            <div className='relative flex'>
                <Image src='/popular_house.png' width={340} height={382} alt='Popular house image' />
                <div className='absolute bottom-4 left-4 '>
                    <Badge color='blue' label='Popular' icon={<PopularIcon className='w-[16px] h-[16px]' />} />
                </div>
            </div>
            <div className=''>
                <p className='text-2xl font-medium text-brandBlue-700'>Roselands House</p>
                <p className='text-xl text-neutral-700'>$ 35.000.000</p>
            </div>
            <div className='flex items-center gap-x-2'>
                <Image className='object-cover rounded-full aspect-square' src="/portait_1.jpg" width={40} height={40} alt='Dianne Russell profile image'  />
                <div>
                    <p className='text-lg font-medium text-brandBlue-700'>Dianne Russell</p>
                    <p className='text-sm font-medium text-neutral-500'>Manchester, Kentucky</p>
                </div>
            </div>

        </div>
    );
}





