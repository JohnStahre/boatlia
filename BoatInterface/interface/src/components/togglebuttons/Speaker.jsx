import React from 'react'
import { useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import CampaignIcon from '@mui/icons-material/Campaign';


const Speaker = ({speakerSelect, setSpeakerSelect}) => {

  useEffect(()=>{
    if(speakerSelect){
      console.log("SPEAKER-ON(1)")
    }else{
      console.log("SPEAKER-OFF(0)")
    }
 
  },[speakerSelect])


 return (
   
  <div id="speaker">
     <ToggleButton
          sx={{
          width: 150,
          height: 80,
        }}
        color="primary"
          value="speaker"
          selected={speakerSelect}
          onChange={() => {
            setSpeakerSelect(!speakerSelect)
          }}
        >
        <CampaignIcon sx={{ fontSize: 50 }}/>
        Speaker
    </ToggleButton>
  </div>
  
 )
}

export default Speaker
