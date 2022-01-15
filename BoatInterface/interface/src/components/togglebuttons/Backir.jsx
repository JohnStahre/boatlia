import React from 'react'
import { useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';


const Backir = ({backirSelect, setBackirSelect}) => {

  useEffect(()=>{
    if(backirSelect){
      console.log("BACKIR-ON(1)")
    }else{
      console.log("BACKIR-OFF(0)")
    }
 
  },[backirSelect])


 return (
   
  <div id="backir">
     <ToggleButton
          sx={{
          width: 150,
          height: 80,
        }}
        color="primary"
          value="backir"
          selected={backirSelect}
          onChange={() => {
            setBackirSelect(!backirSelect)
          }}
        >
        <WbIncandescentIcon sx={{ fontSize: 50 }}/>
        Back ir
    </ToggleButton>
  </div>
  
 )
}

export default Backir
