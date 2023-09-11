'use client';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Button } from './button';
import { ChevronRight } from '@/icon';
import Link from 'next/link';

export function PropertyDropdownMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant='link'>
          Property
          <ChevronRight className='rotate-90 w-[18px] h-[18px]' />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='min-w-[220px] bg-white will rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]  data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade'
          sideOffset={5}>
          <DropdownMenu.Item className='group text-[13px] leading-none text-brandGreen-700 rounded-[3px] flex items-center h-[25px] px-[5px] relative  select-none outline-none data-[disabled]:text-neutral-500  data-[highlighted]:bg-brandGreen-500 cursor-pointer data-[highlighted]:text-brandGreen-100'>
            <Link href='#'>Property </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className='fill-white' />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
