import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Chat.css';
// Components
import ChatBubble from '../../ChatBubble/ChatBubble';
import Date from '../../Date/Date';
import Profile from '../../Profile/Profile';

function Chat(props) {
    const [ChatDate, setChatDate] = useState("");
    const [Chats, setChats] = useState([]);
    const [Member, setMember] = useState("");

    useEffect(() => {
        if (props && props.chatId) {
            axios.post('/api/chat/getChatById', { chatId: props.chatId })
            .then(response => {
                if (response.data.success) {
                    setChatDate(response.data.chats.chatDate);
                    setMember(response.data.chats.member);
                    setChats(response.data.chats.chatBubble);
                }
            });
        }
    }, [props]);

    const Bubbles = Chats.map((chat, index) => {
        return (
            <div key={index} className="block">
                <Profile />
                <div className="right">
                    <p className="artist">{Member}</p>
                    <div className="message">
                        <ChatBubble chat={chat.text} photo={chat.photo} />
                        <p className="time">{chat.timeString} {chat.time}</p>
                    </div>
                </div>
            </div>
        );
    })

    return (
        <div className="chat">
            <div className="top">
                <Date chatDate={ChatDate} />
            </div>
            <div className="body">
                {Bubbles}
            </div>
        </div>
    );
}

export default Chat;