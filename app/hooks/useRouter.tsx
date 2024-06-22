import { usePathname } from "next/navigation";
import useConversation from "./useConversation";
import { useMemo } from "react";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { signOut } from "next-auth/react";


const useRoutes = () => {
    const pathname = usePathname();
    const { conversationId } = useConversation();

    const route = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: HiChat,
            active: pathname === '/conversations' || conversationId
        },
        {
            label: 'Users',
            href: '/user',
            icon: HiUsers,
            active: pathname === '/user'
        },
        {
            label: 'logout',
            href: '#',
            onClick: () => signOut(),
            icon: HiArrowLeftOnRectangle
        }
    ], [pathname, conversationId])
    return route;
}
export default useRoutes;