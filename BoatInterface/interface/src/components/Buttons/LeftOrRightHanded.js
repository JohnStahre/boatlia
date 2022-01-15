import React from "react";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";

const LeftOrRightHanded = ({ right, setRight }) => {
  return <SwapHorizontalCircleIcon value={right} onChange={setRight} />;
};

export default LeftOrRightHanded;
