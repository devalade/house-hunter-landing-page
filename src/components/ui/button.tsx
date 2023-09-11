import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

export const button = cva(
  ['font-medium rounded-full flex items-center gap-x-2'],
  {
    variants: {
      variant: {
        primary: ['bg-brandGreen-500 text-brandGreen-100'],
        // **or**
        // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
        secondary: ['bg-brandGreen-100 text-brandGreen-700'],
        'secondary-light': ['bg-brandGreen-100 text-brandGreen-500'],
        'secondary-muted': [
          'bg-neutral-300 text-neutral-700 hover:bg-brandGreen-500 hover:text-brandGreen-100 transition-all ',
        ],
        'outline-muted':
          'bg-transparent border border-neutral-300 text-neutral-500 hover:bg-brandGreen-100 hover:text-brandGreen-700 hover:border-transparent',
        link: 'flex gap-x-[10px] items-center px-4 py-2 text-sm text-white border border-white rounded-full bg-white/30',
      },
      size: {
        small: ['text-sm', 'py-3', 'px-6'],
        medium: ['text-base', 'py-2', 'px-4'],
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        size: 'medium',
        className: 'uppercase',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'small',
    },
  }
);

type ButtonProps = PropsWithChildren<VariantProps<typeof button>> & {
  onClick?: () => void;
};

export function Button(props: ButtonProps) {
  const { children, ...buttonVariants } = props;

  return <button className={button(buttonVariants)}>{children}</button>;
}
