import React from 'react'
import { useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import NightlightIcon from '@mui/icons-material/Nightlight';


const Nightlight = ({nightlightSelect, setNightlightSelect}) => {

  useEffect(()=>{
    if(nightlightSelect){
      console.log("NIGHTLIGHT-ON(1)")
    }else{
      console.log("NIGHTLIGHT-OFF(0)")
    }
 
  },[nightlightSelect])


 return (
   
  <div id="nightlight">
     <ToggleButton
          sx={{
          width: 150,
          height: 80,
        }}
        color="primary"
          value="nightlight"
          selected={nightlightSelect}
          onChange={() => {
            setNightlightSelect(!nightlightSelect)
          }}
        >
        <NightlightIcon sx={{ fontSize: 50 }}/>
        Night light
    </ToggleButton>
  </div>
  
 )
}

export default Nightlight
