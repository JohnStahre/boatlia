import "./App.css";
import Grid from "@mui/material/Grid";
import FlipCameraIosIcon from "@mui/icons-material/FlipCameraIos";
import { useState } from "react";
import FrontCamera from "./components/FrontCamera";
import { Box } from "@mui/system";
import BackCamera from "./components/BackCamera";
import RightCamera from "./components/RightCamera";
import LeftCamera from "./components/LeftCamera";
import BottomNavbar from "./components/Navigation/BottomNavbar";
import Anchor from './components/togglebuttons/Anchor';
import Autopilot from './components/togglebuttons/Autopilot';
import Radar from './components/togglebuttons/Radar';
import Speaker from './components/togglebuttons/Speaker';
import Talk from './components/togglebuttons/Talk';
import Flood from './components/togglebuttons/Flood';
import Nightlight from './components/togglebuttons/Nightlight';
import Backir from './components/togglebuttons/Backir';
/* import NightLights from "./components/Switches/NightLights";
import TwoWayAudio from "./components/Switches/TwoWayAudio";
import GpsAnchor from "./components/Switches/GpsAnchor";
import GpsAutoPilot from "./components/Switches/GpsAutoPilot";
import BackIrFloodLight from "./components/Switches/BackIrFloodLight";
import FrontFloodLight from "./components/Switches/FrontFloodLight"; */
import LeftMotorSlider from "./components/MotorSliders/LeftMotorSlider";
import { Button, Container } from "@mui/material";
import RightMotorSlider from "./components/MotorSliders/RightMotorSlider";
import RudderSlider from "./components/MotorSliders/RudderSlider";
import LeftOrRightHanded from "./components/Buttons/LeftOrRightHanded";

function App() {
  const [right, setRight] = useState(true);
  const [cameraFrontLeft, setCameraFrontLeft] = useState(true);
  const [cameraBackRight, setCameraBackRight] = useState(true);

  /* TOGGLE STATES */
  const [anchorSelect, setAnchorSelect] = useState(false);
  const [autopilotSelect, setAutopilotSelect] = useState(false);
  const [radarSelect, setRadarSelect] = useState(false); 
  const [speakerSelect, setSpeakerSelect] = useState(false);
  const [talkSelect, setTalkSelect] = useState(false); 
  const [floodSelect, setFloodSelect] = useState(false);
  const [nightlightSelect, setNightlightSelect] = useState(false); 
  const [backirSelect, setBackirSelect] = useState(false); 
  
  return (
    <div className="App">
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        spacing={1}
      >
        {cameraFrontLeft ? (
          <Grid item xs={6} md={6}>
            <Box sx={{ justifyContent: "center", textAlign: "center" }}>
              <Box
                sx={{
                  backgroundColor: "blue",
                  color: "white",
                  height: 450,
                }}
              >
                FrontCamera
              </Box>
            </Box>
          </Grid>
        ) : (
          <Grid item xs={6} md={6}>
            <Box sx={{ justifyContent: "center", textAlign: "center" }}>
              <Box
                sx={{
                  backgroundColor: "orange",
                  color: "white",
                  height: 450,
                }}
              >
                Left Camera
              </Box>
            </Box>
          </Grid>
        )}
        {cameraBackRight ? (
          <Grid item xs={6} md={6}>
            <Box sx={{ justifyContent: "center", textAlign: "center" }}>
              <Box
                sx={{
                  backgroundColor: "gray",
                  color: "white",
                  height: 450,
                }}
              >
                BackCamera
              </Box>
            </Box>
          </Grid>
        ) : (
          <Grid item xs={6} md={6}>
            <Box sx={{ justifyContent: "center", textAlign: "center" }}>
              <Box
                sx={{
                  backgroundColor: "green",
                  color: "white",
                  height: 450,
                }}
              >
                Right Camera
              </Box>
            </Box>
          </Grid>
        )}

      </Grid>


{/* HÄR BÖRJAR TOGGLE KNAPPAR */}
      <Container
         className=""
           sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }} 
      >
        {/* ANCHOR TOGGLE */}
        
        <Grid item xs={1}>
          <Box
             sx={{
              alignSelf: "center",
              justifySelf: "center",
              textAlign: "center",

            }} 
          >
            <Anchor anchorSelect={anchorSelect} setAnchorSelect={setAnchorSelect} />
          </Box>
        </Grid>
            {/* AUTOPILOT TOGGLE */}
              <Grid item xs={1}>
          <Box
           sx={{
              alignSelf: "center",
              justifySelf: "center",
              textAlign: "center",
            }} 
          >
            <Autopilot autopilotSelect={autopilotSelect} setAutopilotSelect={setAutopilotSelect}/>
          </Box>
        </Grid>
            {/* RADAR TOGGLE */}
              <Grid item xs={1}>
          <Box
            sx={{
              alignSelf: "center",
              justifySelf: "center",
              textAlign: "center",
            }} 
          >
            <Radar radarSelect={radarSelect} setRadarSelect={setRadarSelect}/>
          </Box>
        </Grid>
            {/* SPEAKER TOGGLE */}
              <Grid item xs={1}>
          <Box
             sx={{
              alignSelf: "center",
              justifySelf: "center",
              textAlign: "center",
            }} 
          >
            <Speaker speakerSelect={speakerSelect} setSpeakerSelect={setSpeakerSelect}/>
          </Box>
        </Grid>
            {/* TALK TOGGLE */}
              <Grid item xs={1}>
          <Box
            sx={{
              alignSelf: "center",
              justifySelf: "center",
              textAlign: "center",
            }} 
          >
            <Talk talkSelect={talkSelect} setTalkSelect={setTalkSelect}/>
          </Box>
        </Grid>
            {/* FLOOD TOGGLE */}
              <Grid item xs={1}>
          <Box
           sx={{
              alignSelf: "center",
              justifySelf: "center",
              textAlign: "center",
            }} 
          >
            <Flood floodSelect={floodSelect} setFloodSelect={setFloodSelect}/>
          </Box>
        </Grid>
            {/* NIGHTLIGHT TOGGLE */}
              <Grid item xs={1}>
          <Box
             sx={{
              alignSelf: "center",
              justifySelf: "center",
              textAlign: "center",
            }} 
          >
             <Nightlight nightlightSelect={nightlightSelect} setNightlightSelect={setNightlightSelect}/>
          </Box>
        </Grid>
            {/* BACKIR TOGGLE */}
              <Grid item xs={1}>
          <Box
              sx={{
              alignSelf: "center",
              justifySelf: "center",
              textAlign: "center",
            }} 
          >
             <Backir backirSelect={backirSelect} setBackirSelect={setBackirSelect}/>
          </Box>
        </Grid>
        
        </Container>
        {/* HÄR SLUTAR TOGGLE KNAPPAR */}



      {right ? (
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ mr: 3 }}>
            <LeftMotorSlider />
            <RightMotorSlider />
          </Box>
          <Box sx={{ mt: 38 }}>
            <RudderSlider />
          </Box>
        </Container>
      ) : (
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ mt: 38 }}>
            <RudderSlider />
          </Box>
          <Box sx={{ mr: 3 }}>
            <LeftMotorSlider />
            <RightMotorSlider />
          </Box>
        </Container>
      )}
      <Container
        className=""
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button onClick={() => setRight(!right)}>
          <LeftOrRightHanded>Left Or Right</LeftOrRightHanded>
        </Button>
        <Box>
          <Button onClick={() => setCameraFrontLeft(!cameraFrontLeft)}>
            <FlipCameraIosIcon />
          </Button>
        </Box>
        <Box>
          <Button onClick={() => setCameraBackRight(!cameraBackRight)}>
            <FlipCameraIosIcon />
          </Button>
        </Box>
      </Container>
    </div>
    
  );
}

export default App;
