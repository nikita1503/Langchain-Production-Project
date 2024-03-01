import { useContext } from "react";
import React from "react";
import AppContext from "../../ context/AppContext";
import useSendMessage from "../../hooks/useSendMessage";

const ChatInput = () => {

    const {userMessage, setUserMessage, isLoading, setIsLoading} = useContext(AppContext);
  
    const handleInputChange = (event) => {
        setUserMessage(event.target.value);
      };

      const sendMessage = useSendMessage();
      const handleSubmit = async () => {
        setIsLoading(true);
        sendMessage(userMessage);
        setIsLoading(false);
      };
    
    return (
        <>
            <div className="flex flex-row w-full max-w-md mt-4">
            <input
            type="text"
            value={userMessage}
            onChange={handleInputChange}
            onKeyDown={(event) => {
                if (event.key === "Enter") {
                event.preventDefault();
                handleSubmit();
                }
            }}
            className="flex-grow mr-2 p-2 rounded border-gray-300"
            placeholder={isLoading ? "Processing..." : "Type your message here"}
            />
            <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="p-2 rounded bg-blue-800 text-white"
            >
            Send
            </button>
        </div>
    </>
        
    )
}

export default ChatInput