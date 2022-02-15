import React from 'react';
import './Profile.css';
import { StarFilled } from '@ant-design/icons';

function Profile() {
    return (
        <div className="profile">
            {/* <div className="star"><StarFilled /></div> */}
            <img src="/profile.png" />
        </div>
    );
}

export default Profile;