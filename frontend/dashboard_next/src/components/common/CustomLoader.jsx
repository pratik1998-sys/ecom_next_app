import { CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";

const CustomLoader = ({ message = "" }) => {
  return (
    <Stack direction={"column"} gap={2} alignItems={"center"}>
      <CircularProgress />
      <Typography>{`loading ${message}...`}</Typography>
    </Stack>
  );
};

export default CustomLoader;
