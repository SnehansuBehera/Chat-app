

import { useParams } from "next/navigation"
import { useMemo } from "react"

const useConversation = () => {
    const param = useParams()
    const conversationId = useMemo(() => {
        if (!param?.conversationId) {
            return '';
        }
        return param.conversationId as string;
    }, [param?.conversationId]);

    const isOpen = useMemo(() => !!conversationId, [conversationId]);

    return useMemo(() => ({
        isOpen,
        conversationId
    }), [isOpen, conversationId]);
}
export default useConversation;