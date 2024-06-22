'use client'

import useConversation from '@/app/hooks/useConversation';
import useRoutes from '@/app/hooks/useRouter'
import React from 'react'
import MobileItems from './MobileItems';

const MobileFooter = () => {
    const route = useRoutes();
    const { isOpen } = useConversation();
    if (isOpen) {
        return null;
    }

    return (
        <div className='fixed flex z-40 justify-between w-full bg-white border-t-[1px] items-center bottom-0 lg:hidden'>
            {route.map((item) => (
                <MobileItems
                    key={item.label}
                    href={item.href}
                    icon={item.icon}
                    active={item.active}
                    onClick={item.onClick}
                />
            ))}
        </div>
    )
}

export default MobileFooter
