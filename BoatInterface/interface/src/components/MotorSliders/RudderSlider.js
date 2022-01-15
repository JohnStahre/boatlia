import { Slider } from "@mui/material";
import { styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";

const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
    height: 20,
  },
  "& .MuiSlider-rail": {
    height: 20,
  },
  "& .MuiSlider-thumb": {
    height: 35,
    width: 35,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const marks = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 37,
  },
  {
    value: 100,
  },
];

const RudderSlider = () => {

   const [value, setValue] = useState(0);
   const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(`Rudder: ${value}`);

  return (
    <Box sx={{ width: 320 }}>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
        value={value}
        min={-100}
        max={100} 
        onChange={handleChange}
      />
      <Box sx={{ textAlign: "center" }}>Rudder</Box>
    </Box>
  );
};

export default RudderSlider;
