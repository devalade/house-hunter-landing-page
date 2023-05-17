import {VariantProps, cva} from 'class-variance-authority';
import {PropsWithChildren, ReactNode} from 'react';

const button = cva(["font-semibold rounded-full flex items-center"], {
    variants: {
      variant: {
        primary: ["bg-brandGreen-500 text-brandGreen-100"],
        // **or**
        // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
        secondary: ["bg-brandGreen-100 text-brandGreen-700"   ],
      },
      size: {
        small: ["text-sm", "py-3", "px-6"],
        medium: ["text-base", "py-2", "px-4"],
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        size: "medium",
        className: "uppercase",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "small",
    },
  });

type ButtonProps = PropsWithChildren<VariantProps<typeof button>>

export function Button(props: ButtonProps) {
    const { children ,...buttonVariants } = props;

    return <button className={button(buttonVariants)} >
         {children} 
    </button> ;
} 