// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

// const Room = () => {
//     const { roomId } = useParams();

//     function randomID(len) {
//         let result = '';
//         if (result) return result;
//         var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
//             maxPos = chars.length,
//             i;
//         len = len || 5;
//         for (i = 0; i < len; i++) {
//             result += chars.charAt(Math.floor(Math.random() * maxPos));
//         }
//         return result;
//     }

//     let myMeeting = async (element) => {
//         const appID = '7946855';
//         const serverSecret = "b9395d24d25d5099801f35180509566e";
//         const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, randomID(5), randomID(5));
//         const zp = ZegoUIKitPrebuilt.create(kitToken);
//         zp.joinRoom({
//             container: element,
//             scenario: {
//                 mode: ZegoUIKitPrebuilt.LiveStreaming,
//                 // config: {
//                 //     role,
//                 // },
//             },
//             sharedLinks: [{
//                 name: "Copy link",
//                 url: `http://localhost:5173/room/${roomId}`
//             }],
//         });
//     };

//     return (
//         <section>
//             <div ref={myMeeting}></div>
//         </section>
//     );
// };

// export default Room;


import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { roomId } = useParams();
    const meetingRef = useRef();

    function randomID(len) {
        let result = '';
        if (result) return result;
        var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            maxPos = chars.length,
            i;
        len = len || 5;
        for (i = 0; i < len; i++) {
            result += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return result;
    }

    const myMeeting = async (element) => {
        const appID = 7946855;
        const serverSecret = "b9395d24d25d5099801f35180509566e";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, randomID(5), randomID(5));
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.LiveStreaming,
            },
            sharedLinks: [{
                name: "Copy link",
                url: `http://localhost:5173/room/${roomId}`
            }],
        });
    };

    useEffect(() => {
        myMeeting(meetingRef.current);
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <section>
            <div ref={meetingRef}></div>
        </section>
    );
};

export default Room;
