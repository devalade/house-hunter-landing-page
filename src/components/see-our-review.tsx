import Image from 'next/image';
import SectionTitle from './section-title';
import StarIcon from '@/icon/start-icon';

export default function SeeOurReview() {
    return (
        <section className=' mt-[120px]'>
            <div className='container'>

                <SectionTitle title='See Our Review' subTitle='What Our User Say About Us' position='center' />
            </div>
            <div className='flex gap-x-4'>
                <ReviewCard />
                <ReviewCard />
            </div>
        </section>
    );
}

type ReviewCardProps = {
    
}

function ReviewCard(props: ReviewCardProps) {
    return (
        <div className='relative flex w-[740px] h-[400px]'>
            <Image className='absolute inset-0' src="/review_2.png" alt="Dianne Russell review" width={740} height={400} />
            <div className='absolute top-1/3 rounded-2xl shadow-2xl p-8 shadow-[#595CDB05] translate-y-1/2 w-[612px] h-[249px] right-1/2 translate-x-1/2 bg-white space-y-6'>
               <div className='space-y-4'>
                    <p className='text-xl font-semibold text-brandBlue-700'>Best! I got the house I wanted through Hounter</p>
                    <p className='text-sm font-normal text-brandBlue-100'>Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.</p>
               </div>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-x-6'>
                        <Image className='object-cover rounded-full aspect-square' src="/portait_1.jpg" width={40} height={40} alt='Portrait image' />
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
}