import React from 'react'
import { useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import HighlightIcon from '@mui/icons-material/Highlight';


const Flood = ({floodSelect, setFloodSelect}) => {

  useEffect(()=>{
    if(floodSelect){
      console.log("FLOODLIGHT-ON(1)")
    }else{
      console.log("FLOODLIGHT-OFF(0)")
    }
 
  },[floodSelect])


 return (
   
  <div id="flood">
     <ToggleButton
          sx={{
          width: 150,
          height: 80,
        }}
        color="primary"
          value="flood"
          selected={floodSelect}
          onChange={() => {
            setFloodSelect(!floodSelect)
          }}
        >
        <HighlightIcon sx={{ fontSize: 50 }}/>
        <p>Flood Light</p>
    </ToggleButton>
  </div>
  
 )
}

export default Flood
