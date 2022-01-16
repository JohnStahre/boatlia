import React, { createConext, useState, useRef, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createConext();

const socket = io('http://localhost:3000');

const ContextProvider = ({ children }) => {
    const [stream, setStream] = useState(null);
    const [me, setMe] = useState('');
    const [call, setCall] = useState({});
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [name, setNAme] = useState('')


    const myVideo = useRef();
    const userVideo = useRef();  
    // denna kommer antagligen inte behövas eftersom det är bara en video som ska visas
    const connectionRef = useRef();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
        .then((currentStream) => {
            setStream(currentStream);

            myVideo.current.srcObject = currentStream;

        });
        socket.on('me', (id) => setMe(id));
        
        socket.on('calluser', ({from, name: callerName, signal}) => {
            setCall({isReceivedCall: true, from, name: callerName, signal});
        });
        // måste avsluta med en tom dependency array enligt nedan så att den inte går hela tiden
    }, []);

    const answerCall = () => {
        setCallAccepted(true)

        const peer = new Peer({ initiator: false, trickle: false, stream});

        peer.on('signal', (data) => {
            socket.emit('answercall', {signal: data, to: call.from});

        });

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        peer.signal(call.signal);

        connectionRef.current = peer;

    }

    const callUser = (id) => {
        const peer = new Peer({ initiator: true, trickle: false, stream});

        peer.on('signal', (data) => {
            socket.emit('calluser', {userToCall: id, signalData: data, from: me, name});

        });

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        socket.on('callaccepted', (signal) => {
            setCallAccepted(true);

            peer.signal(signal);
        });

        connectionRef.current = peer;

    }

    const leaveCall = () => {
        setCallEnded(true);
        connectionRef.current.destroy();
        window.location.reload();

    }
    return (
        <SocketContext.Provider value={{call,callAccepted,myVideo,userVideo,stream,name,setName,callEnded,me,callUser,leaveCall,answerCall,
        }}>
            {children}

        </SocketContext.Provider>
    );
}

export { ContextProvider, SocketContext};