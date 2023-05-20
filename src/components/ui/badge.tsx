import {ReactNode} from 'react';

const badgeClassNames = {
    red: 'flex items-center px-4 py-2 text-red-500 bg-red-100 rounded-full gap-x-2',
    blue: 'flex items-center px-4 py-2 text-[#1D4ED8] bg-[#DBEAFE] rounded-full gap-x-2',
    green: 'flex items-center px-4 py-2 text-brandGreen-700 bg-brandGreen-100 rounded-full gap-x-2 '
}
export type Badge = keyof typeof badgeClassNames; 

type BadgeProps = {
    icon: ReactNode;
    label: string;
    color: keyof typeof badgeClassNames;
}

export function Badge(props: BadgeProps) {
    const { icon, label, color = 'green'  } = props;
    return (  
        <div className={badgeClassNames[color]}>
            {icon}
            <span className='text-sm'>{label}</span>
        </div>
    );
}