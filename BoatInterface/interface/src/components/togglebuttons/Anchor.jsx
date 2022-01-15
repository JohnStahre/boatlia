import React from 'react'
import { useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import AnchorIcon from '@mui/icons-material/Anchor';


const Anchor = ({anchorSelect, setAnchorSelect}) => {


  useEffect(()=>{
    if(anchorSelect){
      console.log("ANCHOR-ON(1)")
    }else{
      console.log("ANCHOR-OFF(0)")
    }
 
  },[anchorSelect])

 return (
   
  <div id="anchor">
     <ToggleButton
          sx={{
          width: 150,
          height: 80,
        }}
        color="primary"
          value="anchorSelect"
          selected={anchorSelect}
          onChange={() => {
            setAnchorSelect(!anchorSelect)
          }}
        >
        <AnchorIcon sx={{ fontSize: 50 }}/>
        GPS Anchor
        
    </ToggleButton>
  </div>
  
 )
}

export default Anchor
