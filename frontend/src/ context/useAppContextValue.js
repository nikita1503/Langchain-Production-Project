import {useState} from "react";

export const useAppContextValue = () => {
    const [userMessage, setUserMessage] = useState("");
    const [agentResponse, setAgentResponse] = useState("");
    const [conversation, setConversation] = useState({ conversation: [] });
    const [isLoading, setIsLoading] = useState(false);

    return {
        agentResponse: agentResponse,
        setAgentResponse: setAgentResponse,
        userMessage: userMessage,
        setUserMessage: setUserMessage,
        conversation:conversation,
        setConversation: setConversation,
        isLoading:isLoading,
        setIsLoading:setIsLoading
    }
}
export default useAppContextValue;