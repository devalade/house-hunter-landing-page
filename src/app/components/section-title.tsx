type SectionTitleProps = { 
    title: string;
    subTitle: string;

 }

export default function SectionTitle(props: SectionTitleProps) {
    const { title, subTitle } = props;
    return (
        <div>
            <div className='flex items-center gap-x-2'>
                <span className='inline-block w-6 h-[1px] bg-brandYellow-500'></span>
                <h6 className='text-sm capitalize text-brandYellow-500'>{title}</h6>
            </div>
            <h4 className='ml-8 text-[32px] capitalize font-semibold text-brandBlue-700 '>{subTitle}</h4>
        </div>
    );
}