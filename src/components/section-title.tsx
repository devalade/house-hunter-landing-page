const positionClass = {
    left: 'text-left',
    right: 'text-right',
    center: 'text-center'
}


type SectionTitleProps = { 
    title: string;
    subTitle: string;
    position?: keyof typeof positionClass;
 }


export default function SectionTitle(props: SectionTitleProps) {
    const { title, subTitle, position = 'left' } = props;
    const classNames = positionClass[position ?? 'left']; 
    return (
        <div>
            <div className={`flex items-center ${position === 'center' && 'flex-col gap-y-2'} gap-x-2`}>
                <span className='inline-block w-6 h-[1px] bg-brandYellow-500'></span>
                <h6 className={`text-sm capitalize text-brandYellow-500` }>{title}</h6>
            </div>
            <h4 className={`ml-8 text-[32px] capitalize font-semibold ${classNames} text-brandBlue-700 `}>{subTitle}</h4>
        </div>
    );
}