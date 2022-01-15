import { Box } from "@mui/material";
import React from "react";

const RightCamera = () => {
  return (
    <Box sx={{ height: 400, maxWidth: "100%", backgroundColor: "orange" }}>
      <Box
        sx={{
          color: "white",
          mx: "auto",
          jusitfyContent: "center",
          textAlign: "center",
        }}
      >
        Right Camera
      </Box>
    </Box>
  );
};

export default RightCamera;
