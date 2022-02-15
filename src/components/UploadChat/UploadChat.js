import React, { useState } from 'react';
import axios from 'axios';

function UploadChat() {
    const [ChatDate, setChatDate] = useState("");
    const [Text, setText] = useState("");
    const [Photo, setPhoto] = useState("");
    const [Time, setTime] = useState("");

    const onDate = (event) => {
        setChatDate(event.target.value);
    };

    const onText = (event) => {
        console.log(event.target.value);
        setText(event.target.value);
    };

    const onPhoto = (event) => {
        setPhoto(event.target.value);
    };

    const onTime = (event) => {
        console.log(event.target.value);
        setTime(event.target.value);
    };

    const onSubmit = () => {
        const variables = {
            chatDate: "2021-10-12",
            // date: ChatDate,
            dataToSubmit: {
                text: Text,
                time: Time,
                timeString: "오후"
            }
        };
        axios.put('/api/chat/addChatBubble', variables)
            .then(response => {
                if (response.data.success) {
                    console.log("성공");
                    console.log(response.data.chats);
                } else {
                    alert("업로드에 실패했습니다.");
                }
            })
    };

    return (
        <div>
            <input placeholder="날짜 (YYYY-MM-DD)" value={ChatDate} onChange={onDate} />
            <input placeholder="내용 - 텍스트" value={Text} onChange={onText} />
            <input placeholder="내용 - 이미지" value={Photo} onChange={onPhoto} />
            <input placeholder="시간" value={Time} onChange={onTime} />
            <button onClick={onSubmit}>업로드</button>
        </div>
    );
}

export default UploadChat;