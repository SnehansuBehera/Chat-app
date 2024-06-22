import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

interface ItemsProps {
    href: string,
    active?: boolean,
    icon: any,
    onClick?: () => void
}

const MobileItems: React.FC<ItemsProps> = ({
    href,
    active,
    icon: Icon,
    onClick
}) => {

    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    }

    return (
        <Link href={href} onClick={handleClick} className={clsx(`flex gap-x-3 text-sm leading-6 justify-center w-full p-4 text-gray-500 hover:bg-gray-100 hover:text-black`, active && "bg-gray-100 text-black")}>
            <Icon className="h-6 w-6" />
        </Link>
    )
}

export default MobileItems
