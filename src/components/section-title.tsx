import { twMerge } from 'tailwind-merge';

const positionClass = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
};

type SectionTitleProps = {
  title: string;
  subTitle: string;
  position?: keyof typeof positionClass;
};

export default function SectionTitle(props: SectionTitleProps) {
  const { title, subTitle, position = 'left' } = props;
  const classNames = positionClass[position ?? 'left'];
  return (
    <div>
      <div
        className={`flex items-center ${
          position === 'center' && 'flex-col gap-y-2'
        } gap-x-2`}>
        <span className='inline-block w-6 h-[1px] bg-brandYellow-500'></span>
        <h6 className={`section-title`}>{title}</h6>
      </div>
      <h4 className={twMerge(classNames, 'section-subtitle')}>{subTitle}</h4>
    </div>
  );
}
