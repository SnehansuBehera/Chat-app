// 'use client'

import React from 'react'
import ChatSection from '../(site)/components/ChatSection'

// import { signOut } from 'next-auth/react'

const page = () => {
    return (
        <div className='hidden lg:block lg:pl-80 h-full'>
            <ChatSection />
            {/* <button onClick={() => signOut()}>Logout</button> */}
        </div>
    )
}

export default page
