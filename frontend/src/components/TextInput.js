import React from 'react';
import { useState } from 'react';

const TextInput = () =>{
    const [text, onChangeText] = useState("")

    const submit = () =>{
        alert(text)
    }

    const change = event =>{
        onChangeText(event.target.value)
    }

    const handleKeyDown = event =>{
        if(event.key === "Enter"){
            submit()
        }
        
    }
    return(
        <div>
            <input onChange={change} value={text} onKeyDown={handleKeyDown} className='input-text' placeholder="What's going on today?"></input>
            <button onClick={submit} className='click-button'>Submit</button>
        <p>Suggested prompts</p>
        <p>"I have a stats test next week"</p>
        <p>"Remind me to study for my bio exam tomorrow"</p>

        </div>
        
    )
}

export default TextInput;