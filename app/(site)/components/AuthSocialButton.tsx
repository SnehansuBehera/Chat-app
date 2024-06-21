import React from 'react'
import { IconType } from 'react-icons'

interface SocialProps {
    icons: IconType,
    onClick?: () => void,
}


const AuthSocialButton: React.FC<SocialProps> = ({ icons: Icon, onClick }) => {
    return (
        <button onClick={onClick} className='flex w-full justify-center rounded-md px-4 py-2 bg-white text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0' >
            <Icon />
        </button>
    )
}

export default AuthSocialButton
