import { domain, get_conversation_api } from "../constants/server";

export const fetchConversation = async (setConversation) => {
    const conversationId = localStorage.getItem("conversationId");
    if (conversationId) {
      const response = await fetch(
        `${domain}${get_conversation_api.replace('<conversaion_id>', conversationId)}`
      );
      const data = await response.json();
      if (!data.error) {
        setConversation(data);
      }
    }
};

export const sendMessage = async (conversationId, newConversation) => {
    const response = await fetch(
        `${domain}${get_conversation_api.replace('<conversaion_id>', conversationId)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ conversation: newConversation }),
        }
      );

    return response;
};