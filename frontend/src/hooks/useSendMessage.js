import { useContext } from "react";
import AppContext from "../ context/AppContext";
import { getOrCreateAndSaveConversationId } from "../utils/coversationId";
import { sendMessage } from "../utils/contactBackend";
import { CHAT_ROLES } from "../constants/variables";

const useSendMessage = () => {

    const {conversation, setConversation} = useContext(AppContext);
    const {setUserMessage} = useContext(AppContext);

    const send = async (userMessage) => {
        let conversationId = getOrCreateAndSaveConversationId();

        const newConversation = [
        ...conversation.conversation,
        { role: CHAT_ROLES.USER, content: userMessage },
        ];

        const response = await sendMessage(conversationId, newConversation)

        const data = await response.json();
        setConversation(data);
        setUserMessage("");
    }

    return send;
}

export default useSendMessage;