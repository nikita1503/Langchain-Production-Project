import React, {useContext} from "react";
import { deleteConversationId } from "../../utils/coversationId";
import AppContext from "../../ context/AppContext";

const NewSessionButton = () => {

    const { setConversation} = useContext(AppContext);
    const handleNewSession = () => {
        deleteConversationId();
        setConversation({ conversation: [] });
    };
    return (
        <button
        onClick={handleNewSession}
        className="mt-4 p-2 rounded bg-red-700 text-white absolute top-0 left-4"
      >
        New Session
      </button>
    )
}

export default NewSessionButton;