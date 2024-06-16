import React from 'react';
import Avatar from 'react-avatar';

const Client = ({ username }) => {
    return (
        <div className="client">
            <Avatar name={username} size={60} round="18px" />
            <span className="userName">{username}</span>
        </div>
    );
};

export default Client;
