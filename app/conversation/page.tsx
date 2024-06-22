'use client'

import clsx from "clsx"

import useConversation from "../hooks/useConversation"
import ChatSection from "../(site)/components/ChatSection"

const Home = () => {
    const { isOpen } = useConversation();

    return (
        <div className={clsx("lg:pl-80 h-full lg:block", isOpen ? 'block' : 'hidden')}>
            <ChatSection />
        </div>
    )
}
export default Home