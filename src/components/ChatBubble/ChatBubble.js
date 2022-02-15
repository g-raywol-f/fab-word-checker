import React, { useEffect, useState } from 'react';
import './ChatBubble.css';

function ChatBubble(props) {
    const [Text, setText] = useState("");
    const [Photo, setPhoto] = useState("");

    useEffect(() => {
        if (props) {
            if (props.chat) setText(props.chat);
            else if (props.photo) setPhoto(props.photo);
        }
    }, [props]);

    return (
        <div className="bubble">
            {Text !== "" ? Text : (Photo !== "" ? <img href={Photo} /> : "")}
        </div>
    );
}

export default ChatBubble;