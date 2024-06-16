import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const VcRoom = () => {
    const { roomId } = useParams(); 
    const myMeeting = async (element) => {
        const appID = 945448810;
        const serverSecret = "7a4a52b2369e64ced6f9a7da76eac9d8";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now().toString(),  "UserName");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            scenario: {
              mode: ZegoUIKitPrebuilt.GroupCall,
            },
          });
    };
    return (
    <div>
        <div ref={myMeeting} style={{ width: '100vw', height: '100vh'}}/>
    </div>
    );
};

export default VcRoom;
