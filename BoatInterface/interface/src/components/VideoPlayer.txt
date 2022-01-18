import React, {useContext} from 'react'
import { Box } from "@mui/system";
import { SocketContext } from './SocketContext';
import { ClassNames } from '@emotion/react';

const FrontCamera = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    return (
      <Box sx={{ height: 400, backgroundColor: "red" }}>
        <Box sx={{ color: "white", mx: "auto", textAlign: "center" }}>
            {/* <video playsInline muted ref={'myVideo'} autoPlay className={classes.video} /> */}
            {/* <video playsInline ref={'userVideo'} autoPlay className={classes.video} /> */}
            <video playsInline ref={null} autoPlay className={classes.video} />
          Front Camera
        </Box>
      </Box>
    );
  };
  
//   export default FrontCamera;
  



const VideoPlayer = () => {
    return (
        <div>
            VideoPlayer
        </div>
    )
}

export default VideoPlayer