import React from 'react'
import { useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';


const Autopilot = ({autopilotSelect, setAutopilotSelect}) => {

  useEffect(()=>{
    if(autopilotSelect){
      console.log("AUTOPILOT-ON(1)")
    }else{
      console.log("AUTOPILOT-OFF(0)")
    }
 
  },[autopilotSelect])


 return (
   
  <div id="autopilot">
     <ToggleButton
          sx={{
          width: 150,
          height: 80,
        }}
        color="primary"
          value="autopilot"
          selected={autopilotSelect}
          onChange={() => {
            setAutopilotSelect(!autopilotSelect)
          }}
        >
        <DirectionsBoatIcon sx={{ fontSize: 50 }}/>
        Auto pilot
    </ToggleButton>
  </div>
  
 )
}

export default Autopilot
