import { Slider } from "@mui/material";
import { styled } from "@mui/material";

import React from "react";
import { useState } from "react";

const RightMotor = styled(Slider)({
  color: "green",
  height: 300,
  "& .MuiSlider-track": {
    border: "none",
    height: 20,
    width: 50,
  },
  "& .MuiSlider-rail": {
    height: 300,
    width: 50,
  },
  "& .MuiSlider-mark": {
    width: 2.5,
    height: 2.5,
  },
  "& .MuiSlider-markLabel": {
    marginLeft: "-4.4rem",
    fontWeight: 500,
    fontSize: 16,
  },
  "& .MuiSlider-thumb": {
    height: 30,
    width: 30,
    marginTop: -8,
    marginRight: -15,
    backgroundColor: "#000",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "0px 0px 0px 8px rgba(84, 199, 97, 0.16)",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 14,
    background: "unset",
    right: "-3.1rem",
    top: "1rem",
    padding: 0,
    width: 35,
    height: 35,
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
    value: -3,
    label: "-3",
  },
  {
    value: -2,
    label: "-2",
  },
  {
    value: -1,
    label: "-1",
  },
  {
    value: 0,
    label: "0",
  },
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
];

function valuetext(value) {
  return `${value}`;
}

const RightMotorSlider = () => {
    const [value, setValue] = useState(0);
   const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(`RightMotor: ${value}`); 
  return (
    <RightMotor
      orientation="vertical"
      aria-label="Always visible"
      defaultValue={0}
      getAriaValueText={valuetext}
      step={1}
      marks={marks}
      min={-3}
      max={5}
      valueLabelDisplay="on"
      value={value} 
      onChange={handleChange}
    />
  );
};

export default RightMotorSlider;
