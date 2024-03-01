import { CONVERSATION_ID_LOCAL_STORAGE } from "../constants/variables";

export const generateConversationId = () =>
    "_" + Math.random().toString(36).slice(2, 11);

export const deleteConversationId = () =>
    localStorage.removeItem(CONVERSATION_ID_LOCAL_STORAGE);

export const getConversationId = () => 
    localStorage.getItem(CONVERSATION_ID_LOCAL_STORAGE);

export const saveConversationId = (conversaion_id) => 
    localStorage.setItem(CONVERSATION_ID_LOCAL_STORAGE, conversaion_id);

export const getOrCreateAndSaveConversationId = () => {
    let conversationId = getConversationId();
    if (!conversationId) {
      conversationId = generateConversationId();
      saveConversationId(conversationId)
    }
    return conversationId;
}