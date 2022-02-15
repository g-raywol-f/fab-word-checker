import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined, MoreOutlined } from '@ant-design/icons';
// Components
import Chat from './items/Chat';

function ChatPage(props) {
    const navigate = useNavigate();

    const [ChatId, setChatId] = useState("");

    useEffect(() => {
        let chatId = window.location.pathname;
        chatId = chatId.slice(6, chatId.length);
        setChatId(chatId);
    }, []);

    return (
        <div className="mobile">
            <div className="header">
                <div className="top">
                    <div className="top-icon"><ArrowLeftOutlined onClick={() => navigate('/')} /></div>
                    <div className="text">
                        <p className="header-title">이달의 소녀+</p>
                        <p className="header-subtitle">이달의 소녀(LOONA)</p>
                    </div>
                    <div className="top-icon"><MoreOutlined /></div>
                </div>
            </div>
            <div className="body">
                <Chat chatId={ChatId} />
            </div>
        </div>
    );
}

export default ChatPage;