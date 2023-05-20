import {AppartmentIcon} from '@/icon/appartment-icon';
import {ChevronRight} from '@/icon/chevon-right-icon';
import {HouseIcon} from '@/icon/house-icon';
import {VillaIcon} from '@/icon/villa-icon';
import SectionTitle from '@/components/section-title';
import {Button} from '@/components/ui';
import {Card, CardProps} from '@/components/card';



const FakeCardData: (CardProps & {id: number} )[]  = [
    {
        id: 1,
        name: "Roselands House",
        price: 35_000_000,
        cover: '/popular_house.png',
        type: 'popular',
        user: {
            fullname: 'Dianne Russell',
            location: 'Manchester, Kentucky'
        }
    },
    {
        id: 2,
        name: "Woodlandside",
        price: 20_000_000,
        cover: '/new_house.png',
        type: 'new-house',
        user: {
            fullname: 'Robert Fox',
            location: 'Dr. San Jose, South Dakota'
        }
    },
    {
        id: 3,
        name: "The Old Lighthouse",
        price: 44_000_000,
        cover: '/best_deals.png',
        type: 'best-deals',
        user: {
            fullname: 'Ronald Richards',
            location: 'Santa Ana, Illinois'
        }
    },
    {
        id: 4,
        name: "Cosmo's House",
        price: 22_000_000,
        cover: '/popular_house.png',
        type: 'popular',
        user: {
            fullname: 'Jenny Wilson',
            location: 'Preston Rd. Inglewood, Maine 98380'
        }
    },
];

export default function OurRecommendation() {
    return(
        <section className=' mt-[120px]  h-full overflow-x-hidden '>
            <div className='container flex items-end justify-between mb-[40px]'>
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
            <div className=' flex ml-16 sm:ml-20 lg:ml-40 xl:ml-48 2xl:ml-58 gap-x-4 w-[100vw] overflow-auto'>
                {FakeCardData.map(data => (<Card key={data.id} {...data} />))}
            </div>
        </section>
    )
}



