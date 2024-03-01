import React, { useEffect, useContext } from "react";
import { FaSpinner } from "react-icons/fa";
import AppContext from "../../ context/AppContext"
import { fetchConversation } from "../../utils/contactBackend";
import { deleteConversationId } from "../../utils/coversationId"
import useSendMessage from "../../hooks/useSendMessage";
import ChatHistory from "../ChatHistory/ChatHistory";
import ChatInput from "../ChatInput/ChatInput";
import NewSessionButton from "../NewSessionButton/NewSessionButton";

const AgentPage = () => {
  const { setConversation} = useContext(AppContext);
  const {isLoading} = useContext(AppContext);

  useEffect(() => {
    fetchConversation(setConversation);
  }, []);

  return (
    <div
      className="App flex flex-col items-center pt-6 min-h-screen bg-gray-900 text-sm"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl font-bold mb-4 text-white">Restaurant Chatbot</h1>
      <ChatHistory/>
      <ChatInput/>
      {isLoading && (
        <div className="flex items-center space-x-4 text-l text-white">
          <FaSpinner className="animate-spin" />
          <span>Loading...</span>
        </div>
      )}
      <NewSessionButton/>
    </div>
  );
};


export default AgentPage;
