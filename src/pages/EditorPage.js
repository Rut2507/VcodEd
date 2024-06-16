import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import Client from '../components/Client';
import CodeEditor from '../components/CodeEditor';
import toast from 'react-hot-toast';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const EditorPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { username } = location.state || {};
    const roomId = location.pathname.split('/').pop();
    const [clients, setClients] = useState([]);
    const videoCallRef = useRef(null);
    const zcRef = useRef(null);

    useEffect(() => {
        if (username) {
            const socketId = uuidV4();
            setClients([{ socketId, username }]);
        }
    }, [username]);

    const copyRoomId = () => {
        navigator.clipboard.writeText(roomId);
        toast.success('ROOM ID copied');
    };

    const leaveRoom = () => {
        toast.success(`${username} has left the room`);
        if (zcRef.current) {
            zcRef.current.destroy(); // Disconnect video call
        }
        navigate('/');
    };

    const startVideoCall = async () => {
        const appID = 945448810;
        const serverSecret = "7a4a52b2369e64ced6f9a7da76eac9d8";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), username);
        zcRef.current = ZegoUIKitPrebuilt.create(kitToken);
        zcRef.current.joinRoom({
            container: videoCallRef.current,
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
        });
    };

    return (
        <div className="mainWrap">
            <div className="aside">
                <div className="asideInner">
                    <div className="logo">
                        <img
                            className="logoImage"
                            src="/VcodEd_logo.png"
                            alt="logo"
                        />
                    </div>
                    <h3>Connected</h3>
                    <div className="clientsList">
                        {clients.map((client) => (
                            <Client
                                key={client.socketId}
                                username={client.username}
                            />
                        ))}
                    </div>
                </div>
                <button className="btn vcBtn" onClick={startVideoCall}>
                    Video Call
                </button>
                <button className="btn copyBtn" onClick={copyRoomId}>
                    Copy ROOM ID
                </button>
                <button className="btn leaveBtn" onClick={leaveRoom}>
                    Leave
                </button>
            </div>
            <div className="editorWrap">
                <CodeEditor />
                <div ref={videoCallRef} style={{ width: '100%', height: '80vh', marginTop: '5px' }} />
            </div>
        </div>
    );
};

export default EditorPage;






