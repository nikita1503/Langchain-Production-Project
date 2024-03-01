import React, { useContext } from "react";
import AppContext from "../../ context/AppContext";

const ChatHistory = () => {
    const {conversation} = useContext(AppContext);

    return (
        <>
            {conversation.conversation.length > 0 && (
                <div className="flex flex-col p-4 bg-white rounded shadow w-full max-w-md space-y-4">
                {conversation.conversation
                    .filter((message) => message.role !== "system")
                    .map((message, index) => (
                    <div
                        key={index}
                        className={`${
                        message.role === "user" ? "text-right" : "text-left"
                        }`}
                    >
                        <strong className="font-bold text-gray-900">
                        {message.role}:
                        </strong>
                        <span className="text-gray-700">{message.content}</span>
                    </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default ChatHistory;