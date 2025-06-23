import { createContext, useState } from "react";
import runChat from"..config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const[input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const[prevPrompts, setPrevPrompts] = useState([]);
    


    const onSent = async (prompt) => {
        await runChat(prompt);
    }
    onSent("what is react js");

    const contextValue = {
        

    }

    return (
        <contextValue.provider value = {contextValue}>
            {props.children}
        </contextValue.provider>
    )
}