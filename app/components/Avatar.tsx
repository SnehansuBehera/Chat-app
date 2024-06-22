'use client'

import { User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import { FaUser } from "react-icons/fa";

interface AvatarProps {
    user: User
}

const Avatar: React.FC<AvatarProps> = ({
    user
}) => {
    return (
        <div className='relative'>
            <div className="relative rounded-full  h-9 w-9 md:h-11 md:w-11 overflow-hidden">
                <>{
                    user.image ? <Image alt='avatar' src={user.image} fill /> : <FaUser size={40} className='text-gray-500 ' />
                }</>



            </div>
            <span className='absolute block rounded-full bg-green-600 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3'></span>
        </div>
    )
}

export default Avatar
