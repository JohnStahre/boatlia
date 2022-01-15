import React from 'react'
import { useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import RadarIcon from '@mui/icons-material/Radar';


const Radar = ({radarSelect, setRadarSelect}) => {

  useEffect(()=>{
    if(radarSelect){
      console.log("RADAR-ON(1)")
    }else{
      console.log("RADAR-OFF(0)")
    }
 
  },[radarSelect])


 return (
   
  <div id="radar">
     <ToggleButton
          sx={{
          width: 150,
          height: 80,
        }}
        color="primary"
          value="radar"
          selected={radarSelect}
          onChange={() => {
            setRadarSelect(!radarSelect)
          }}
        >
        <RadarIcon sx={{ fontSize: 50 }}/>
        Radar 
    </ToggleButton>
  </div>
  
 )
}

export default Radar
