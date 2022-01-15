import React from 'react'
import { useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';


const Talk = ({talkSelect, setTalkSelect}) => {

  useEffect(()=>{
    if(talkSelect){
      console.log("TALK-ON(1)")
    }else{
      console.log("TALK-OFF(0)")
    }
 
  },[talkSelect])


 return (
   
  <div id="talk">
     <ToggleButton
          sx={{
          width: 150,
          height: 80,
        }}
        color="primary"
          value="talk"
          selected={talkSelect}
          onChange={() => {
            setTalkSelect(!talkSelect)
          }}
        >
        <PhoneInTalkIcon sx={{ fontSize: 50 }}/>
        Talk
    </ToggleButton>
  </div>
  
 )
}

export default Talk
